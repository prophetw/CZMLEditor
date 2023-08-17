import Form from '@rjsf/antd';
import { Button, Dropdown, Select, message } from 'antd';
import type { MenuProps } from 'antd';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useEffect, useState } from 'react';
import styles from './index.less';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css'

import { CZML2RJSFAdaptor, RJSFAdaptor2, BaseJSONSchemaObj, editableKeysInPacketSchema } from '@/utils/CZMLRJSFAdaptor';

import CZMLRectangle from '../../../CZMLSchemaJSON/testFile/CesiumCZMLColors.json'
import CZMLBillboardAndLabel from '../../../CZMLSchemaJSON/testFile/CesiumBillboardAndLabel.json'
import CZMLPoint from '../../../CZMLSchemaJSON/testFile/CesiumPoint.json'
import CZMLPointTime from '../../../CZMLSchemaJSON/testFile/CesiumPointTimeDynamic.json'
import CZMLPolygon from '../../../CZMLSchemaJSON/testFile/CesiumPolygon.json'
import CZMLPolyline from '../../../CZMLSchemaJSON/testFile/CesiumPolyline.json'
import CZMLPolylineRed from '../../../CZMLSchemaJSON/testFile/CesiumRedPolyline.json'
import CZMLPolylineDef from '../../../CZMLSchemaJSON/testFile/CesiumPolylineDefinitions.json'
import CZMLPath from '../../../CZMLSchemaJSON/testFile/CesiumPath.json'
import CZMLModel from '../../../CZMLSchemaJSON/testFile/CesiumModel.json'

import { uiSchema as CZMLUISchema } from '@/utils/CZMLUISchema';
import { CZMLCustomWidgets } from '@/utils/CZMLWidgets';
import { ALL_TEMPLATE } from '../../utils/CZMLTemplate';
const widgets = CZMLCustomWidgets
const uiSchema = CZMLUISchema

const DEFAULT_KEY = 'billboard'

const czmlDemoKeymap = {
  "ChooseTemplate": "",
  model: CZMLModel,
  billboard: CZMLBillboardAndLabel,
  rectangle: CZMLRectangle,
  point: CZMLPoint,
  polygon: CZMLPolygon,
  polyline: CZMLPolyline,
  polylineRed: CZMLPolylineRed,
  polylineDef: CZMLPolylineDef,
  pointTime: CZMLPointTime,
  path: CZMLPath,
}

const ALL_DEFAULT_TEMPLATE = ALL_TEMPLATE
type KeyOfTemplate = keyof typeof ALL_DEFAULT_TEMPLATE

const EditorPage: React.FC = () => {
  const [formData, setFormData] = useState(null);
  const [cesiumViewer, setViewer] = useState<Cesium.Viewer | null>(null);
  const [thumbnailViewer, setThumbViewer] = useState<Cesium.Viewer | null>(null);
  const [expandPacket, setExpandPacket] = useState(false)
  const [packetAry, setPacketAry] = useState<any>(null)
  const [editKey, setEditKey] = useState(DEFAULT_KEY)
  const [formSchema, setFormSchema] = useState<any>(null)
  const [curEditPacket, setCurPacket] = useState<any>(null)
  const [curDemoName, setCurDemoName] = useState('ChooseTemplate')
  const [thumbnailDataUrl, setThumbnailDataUrl] = useState('')
  const [curSelectPacket, setCurSelectPacket] = useState<any>(null)



  const locatePacket = () => {
    if (cesiumViewer) {
      const dataSources = cesiumViewer.dataSources._dataSources[0]
      console.log(' locate ', cesiumViewer, dataSources);
      if (dataSources) {
        cesiumViewer.zoomTo(dataSources)
      }
    }
  }

  const reloadCZML = async (czml) => {
    // if change czml , reload it
    if (cesiumViewer) {
      const dataSourcePromise = await Cesium.CzmlDataSource.load(czml);
      cesiumViewer.dataSources.removeAll()
      await cesiumViewer.dataSources.add(dataSourcePromise);
    }
    if (thumbnailViewer) {
      const dataSourcePromise = await Cesium.CzmlDataSource.load(czml);
      thumbnailViewer.dataSources.removeAll()
      await thumbnailViewer.dataSources.add(dataSourcePromise);
    }
  }

  const addPacketNode = async (nodeName: KeyOfTemplate) => {

    // TODO: packetAry may be null 

    console.log(' hall ');
    if (curSelectPacket) {
      if (curSelectPacket === packetAry[0]) {
        const targetPacket = packetAry[1]
        targetPacket[nodeName] = ALL_DEFAULT_TEMPLATE[nodeName]
      } else {
        if (curSelectPacket[nodeName]) {
          message.error('该操作会覆盖该节点 可以 ctrl+z 撤销')
        }
        curSelectPacket[nodeName] = ALL_DEFAULT_TEMPLATE[nodeName]
      }

    } else {
      if (packetAry) {
        const targetPacket = packetAry[1]
        if (targetPacket[nodeName]) {
          message.error('该操作会覆盖该节点 可以 ctrl+z 撤销')
        }
        targetPacket[nodeName] = ALL_DEFAULT_TEMPLATE[nodeName]
      } else {
        // TODO: better never go this 
        const newPacketAry = {...ALL_DEFAULT_TEMPLATE['EMPTY_PACKET_ARY']};
        newPacketAry[1][nodeName] = ALL_DEFAULT_TEMPLATE[nodeName]
        setPacketAry({...newPacketAry})
      }
    }

    // update UI 
    setPacketAry([...packetAry])
    await reloadCZML(packetAry)

    locatePacket()
  }

  const PacketNodeList: MenuProps['items'] = [
    {
      key: 'billboard',
      label: (<a onClick={() => { addPacketNode('billboard') }}>图片</a>), // this is the show name in the form
    },
    {
      key: 'label',
      label: (<a onClick={() => { addPacketNode('label') }}>文字</a>), // this is the show name in the form
    },
    {
      key: 'model',
      label: (<a onClick={() => { addPacketNode('model') }}>gltf模型</a>), // this is the show name in the form
    },
    {
      key: 'point',
      label: (<a onClick={() => { addPacketNode('point') }}>点</a>), // this is the show name in the form
    },
    {
      key: 'polyline',
      label: (<a onClick={() => { addPacketNode('polyline') }}>线</a>), // this is the show name in the form
    },
  ]


  const setForm = (e) => {
    console.log(' curFormData ---- ', e.formData);
    setFormData(e.formData)
    curEditPacket[editKey] = e.formData
    reloadCZML(packetAry)
  }

  const getTreeFromCZML = (packetArray: any) => {
    // first children
    // 仅展示第一层属性 
    const cloneObj = JSON.parse(JSON.stringify(packetArray))
    // console.log(' ======= ', typeof cloneObj);
    cloneObj.forEach((item, index) => {
      item.expand = false
    })
    return cloneObj
  }

  const getThumbnail = () => {
    if (thumbnailViewer) {
      // const dataSourcePromise = Cesium.CzmlDataSource.load(packetArray);
      // thumbnailViewer.dataSources.removeAll()
      // thumbnailViewer.dataSources.add(dataSourcePromise);
      // thumbnailViewer.zoomTo(dataSourcePromise)
      // thumbnailViewer.scene.screenSpaceCameraController.enableRotate = false;
      console.log(thumbnailViewer);
      const thumbnail = thumbnailViewer.scene.canvas.toDataURL()
      console.log(' thumbnail is ', thumbnail);
      setThumbnailDataUrl(thumbnail)
    }
  }

  const initSchema = (editKey: string) => {
    const targetJSON = BaseJSONSchemaObj[editKey]
    let jsonStr = JSON.stringify(targetJSON, null, 2);
    // console.log(' jsonStr ', jsonStr)
    jsonStr = jsonStr.replace(/\$ref/g, '#ref')
    const schemaTem = JSON.parse(jsonStr) as RJSFSchema;

    CZML2RJSFAdaptor(schemaTem)
    RJSFAdaptor2(schemaTem)

    console.log(' init ', schemaTem);

    const schema = schemaTem
    setFormSchema(schema)
  }

  const unloadCZML = (viewer = undefined, thumbViewer = undefined) => {
    let viewer1 = viewer || cesiumViewer
    let viewer2 = thumbViewer || thumbnailViewer
    if (viewer1) {
      viewer1.dataSources.removeAll()
    }
    if (viewer2) {
      viewer2.dataSources.removeAll()
    }
    const emptyPacketAry = JSON.parse(JSON.stringify(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET_ARY))
    setPacketAry(emptyPacketAry)
    setFormData(null)
  }

  const loadCZML = async (czml: any, viewer: Cesium.Viewer | undefined, thumbViewer: Cesium.Viewer | undefined) => {
    // @ts-ignore
    // const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[curDemoName]));
    console.log(' czml ', czml, viewer, thumbViewer);
    unloadCZML(viewer, thumbViewer)
    let viewer1 = viewer || cesiumViewer
    let viewer2 = thumbViewer || thumbnailViewer

    if (viewer1) {
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
      viewer1.dataSources.add(dataSourcePromise);
      viewer1.zoomTo(dataSourcePromise);

      // this is for track path feature
      // const path = viewer1.dataSources._dataSources[0].entities.getById('path')
      // console.log(' path ', path);
      // if (path) {
      //   viewer1.trackedEntity = path
      // }
    }
    if (viewer2) {
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
      viewer2.dataSources.add(dataSourcePromise);
      viewer2.zoomTo(dataSourcePromise);
    }

    // list need this 
    setPacketAry(czml)
  }


  useEffect(() => {

    const getPacketInfoFromServer = async () => {
      return Promise.resolve(null)
    }

    const init = async () => {


      const packetFromServer = await getPacketInfoFromServer()
      let initedPacketAry = packetFromServer

      if (packetFromServer === null) {
        // 初始化 一个空的 packet
        const clonePakcet = JSON.parse(JSON.stringify(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET_ARY))
        initedPacketAry = clonePakcet

      } 
      // setPacketAry(initedPacketAry)

      const viewer = new Cesium.Viewer("cesiumContainer", {
        contextOptions: {
          webgl: {
            preserveDrawingBuffer: true,
            alpha: true,
          },
        }
      });
      const thumbView = new Cesium.Viewer("thumbnailContainer", {
        baseLayerPicker: false, // 移除基础图层选择器
        baseLayer: false,
        geocoder: false, // 移除地理编码器
        homeButton: false, // 移除主页按钮
        sceneModePicker: false, // 移除场景模式选择器
        timeline: false, // 移除时间轴
        navigationHelpButton: false, // 移除帮助按钮
        animation: false, // 移除动画控件
        fullscreenButton: false, // 移除全屏按钮
        vrButton: false, // 移除VR按钮
        skyAtmosphere: false, // 移除大气效果
        skyBox: false, // 移除天空盒
        terrainProvider: new Cesium.EllipsoidTerrainProvider(), // 移除地形
        contextOptions: {
          webgl: {
            preserveDrawingBuffer: true,
            alpha: true,
          },
        }
      });
      thumbView.scene.globe = undefined; // 移除地球球体
      thumbView.scene.backgroundColor = new Cesium.Color(0, 0, 0, 0);
      if(initedPacketAry){
        loadCZML(initedPacketAry, viewer, thumbView)
      }

      console.log(' viewer ', viewer);


      setViewer(viewer);
      setThumbViewer(thumbView)
    }

    init()

    return () => {
      // viewer.dataSources.remove(dataSourcePromise);
      const container = document.getElementById('cesiumContainer')
      const container2 = document.getElementById('thumbnailContainer')
      if (container) {
        container.innerHTML = ''
      }
      if (container2) {
        container2.innerHTML = ''
      }
    }
  }, [])

  const addPacket = () => {
    if (packetAry) {
      packetAry.push(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET)
      setPacketAry([...packetAry])
    } else {
      const clonePakcet = JSON.parse(JSON.stringify(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET_ARY))
      clonePakcet.push(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET)
      setPacketAry(clonePakcet)
    }
  }

  const loadTemplate = async (value: string) => {
    // @ts-ignore
    const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[value]));
    loadCZML(czml)
  }


  const togglePacket = () => {
    console.log(packetAry);
    setExpandPacket(!expandPacket)
    getThumbnail()
  }

  const expandPacketItem = (item) => {
    console.log(' haha ');
    item.expand = !item.expand
    setPacketAry([...packetAry])
  }

  const edit = (item, key) => {
    setFormData(null)
    setTimeout(() => {
      setEditKey(key);
      initSchema(key);
      setCurPacket(item)
      console.log(' item key ', item, key);
      console.log(' curForm ', item[key]);
      setFormData(item[key])
    })
  }

  const exportJSON = () => {
    console.log(' packetAry === ', JSON.stringify(packetAry, null, 2));

  }


  const renderPacketSchema = (packet: any) => {
    const packetObj = packet
    const renderHTML = <>
      {expandPacket && <>
        {packetObj.map((item, index) => {
          return <div key={index} className={styles.packet_item}>
            <div className={styles.packet_item_title} onClick={() => {
              expandPacketItem(item)
            }}>
              <span className={styles.packet_item_title_name}>Packet{index} id: {item.id}</span>
              {/* <span className={styles.packet_item_title_type}> name: {item.name}</span> */}
              <div className={styles.packet_item_keys}>
                {item.expand && Object.keys(item).map((key, index) => {
                  if (editableKeysInPacketSchema.indexOf(key) === -1) {
                    return null
                  }
                  return <div key={index} className={styles.packet_item_key}>
                    <span className={styles.packet_item_key_name} onClick={(e) => {
                      edit(item, key)
                      e.stopPropagation()
                    }}>{key}</span>
                  </div>
                })
                }

              </div>
            </div>
            {/* <div className={styles.packet_item_content}>
              {item.type === 'object' && renderPacketSchema(item.children)}
            </div> */}
          </div>
        })}
      </>}


    </>

    return renderHTML
  }

  return (
    <>
      <div className={styles.flex}>
        <div className={styles.tree_container}>
          <Button onClick={addPacket}>addPacket</Button>
          <Dropdown menu={{ items: PacketNodeList }} trigger={['click']}>
            <Button>addPacketNode</Button>
          </Dropdown>
          <Button onClick={() => {
            console.log(' ');
          }}>delete</Button>
          <Button>Import</Button>
          <Button onClick={exportJSON}>Export</Button>
          <Button>Save</Button>
          <Select value={curDemoName} onChange={async (value) => {
            console.log(' value', value);
            setCurDemoName(value)
            if (value === 'ChooseTemplate') {
              unloadCZML()
            } else {
              loadTemplate(value)
            }
          }}>
            {Object.keys(czmlDemoKeymap).map((key) => {
              return <Select.Option key={key} value={key}>{key}</Select.Option>
            })}
          </Select>

          <div className={styles.packet_list}>
            <div className={styles.opt_container}>
              <span onClick={togglePacket}>Packet struct toggle</span>
              {packetAry && renderPacketSchema(packetAry)}
            </div>
          </div>

        </div>
        <div className={styles.cesium_container} id="cesiumContainer">
        </div>
        <div className={styles.form_container}>
          {formData &&
            <Form
              formContext={{
                formData,
                // other props...
              }}
              formData={formData}
              onChange={(e) => setForm(e)}
              schema={formSchema}
              widgets={widgets}
              validator={validator}
              uiSchema={uiSchema}
              experimental_defaultFormStateBehavior={{
                emptyObjectFields: 'skipDefaults',
                // emptyObjectFields: 'populateRequiredDefaults',
                // emptyObjectFields: 'populateAllDefaults' // this is  default config
              }}
            />}
        </div>
        <div id="thumbnailContainer" className={styles.thumbnail_container}>
        </div>
        <div className={styles.show_thumbnail}>
          <Button onClick={() => {
            getThumbnail()
          }}>getThumbnail</Button>
          {thumbnailDataUrl && <img style={{ border: "1px solid #666" }} src={thumbnailDataUrl} alt="" />}
          <Button onClick={locatePacket}>Locate</Button>
        </div>
      </div>

    </>
  );
};

export default EditorPage;
