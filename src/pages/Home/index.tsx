import Form from '@rjsf/antd';
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
import CZMLModel from '../../../CZMLSchemaJSON/testFile/CesiumModel.json'
import { Button, Select } from 'antd';
import DoubleDateTimePicker from '@/RJSFCustom/CZMLIntervalValue';
import Cartesian3Value from '@/RJSFCustom/Cartesian3Value';
import ColorPickerRGBA from '@/RJSFCustom/ColorPickerRGBA';
import ColorPickerRGBAF from '@/RJSFCustom/ColorPickerRGBAF';



const DEFAULT_KEY = 'billboard'

const czmlDemoKeymap = {
  model: CZMLModel,
  billboard: CZMLBillboardAndLabel,
  rectangle: CZMLRectangle,
  point: CZMLPoint,
  polygon: CZMLPolygon,
  polyline: CZMLPolyline,
  polylineRed: CZMLPolylineRed,
  polylineDef: CZMLPolylineDef,
  pointTime: CZMLPointTime,
}


const widgets = { // custom format name => custom widget component 
  double_date_time_picker: DoubleDateTimePicker,
  cartesian3_value: Cartesian3Value,
  cartographicDegree_value: Cartesian3Value,
  cartographicRadians_value: Cartesian3Value,
  color_rgba: ColorPickerRGBA,
  color_rgbaf: ColorPickerRGBAF
}

const uiSchema = {
  cartesian: {
    'ui:widget': 'cartesian3_value',
  },
  cartographicDegrees: {
    'ui:widget': 'cartesian3_value',
  },
  cartographicRadians: {
    'ui:widget': 'cartesian3_value',
  },
  interval: {
    'ui:widget': 'double_date_time_picker',
  },
  backgroundColor: {
    rgba: {
      'ui:widget': 'color_rgba',
    },
    rgbaf: {
      'ui:widget': 'color_rgbaf',
    }
  },
  fillColor: {
    rgba: {
      'ui:widget': 'color_rgba',
    },
    rgbaf: {
      'ui:widget': 'color_rgbaf',
    }
  },
  outlineColor: {
    rgba: {
      'ui:widget': 'color_rgba',
    },
    rgbaf: {
      'ui:widget': 'color_rgbaf',
    }
  },
  color: {
    rgba: {
      'ui:widget': 'color_rgba',
    },
    rgbaf: {
      'ui:widget': 'color_rgbaf',
    }
  },
  silhouetteColor: {
    rgba: {
      'ui:widget': 'color_rgba',
    },
    rgbaf: {
      'ui:widget': 'color_rgbaf',
    }
  }

}

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState(null);
  const [cesiumViewer, setViewer] = useState<Cesium.Viewer | null>(null);
  const [thumbnailViewer, setThumbViewer] = useState<Cesium.Viewer | null>(null);
  const [expandPacket, setExpandPacket] = useState(false)
  const [packetAry, setPacketAry] = useState<any>(null)
  const [editKey, setEditKey] = useState(DEFAULT_KEY)
  const [formSchema, setFormSchema] = useState<any>(null)
  const [curEditPacket, setCurPacket] = useState<any>(null)
  const [curDemoName, setCurDemoName] = useState('billboard')
  const [thumbnailDataUrl, setThumbnailDataUrl] = useState('')

  const setForm = (e) => {
    console.log(' curFormData ---- ', e.formData);
    setFormData(e.formData)
    curEditPacket[editKey] = e.formData
    if (cesiumViewer) {
      const dataSourcePromise = Cesium.CzmlDataSource.load(packetAry);
      cesiumViewer.dataSources.removeAll()
      cesiumViewer.dataSources.add(dataSourcePromise);
    }
    if (thumbnailViewer) {
      const dataSourcePromise = Cesium.CzmlDataSource.load(packetAry);
      thumbnailViewer.dataSources.removeAll()
      thumbnailViewer.dataSources.add(dataSourcePromise);
    }
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


  useEffect(() => {
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

    console.log(' viewer ', viewer);
    // @ts-ignore
    const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[curDemoName]));
    console.log(' czml ', czml);

    if (viewer) {
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
      viewer.dataSources.add(dataSourcePromise);
      viewer.zoomTo(dataSourcePromise);
    }

    if (thumbView) {
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
      thumbView.dataSources.add(dataSourcePromise);
      thumbView.zoomTo(dataSourcePromise);
    }

    setViewer(viewer);
    setThumbViewer(thumbView)
    setPacketAry(czml)
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

  const renderPacketSchema = (packet: any) => {
    const packetObj = packet
    const renderHTML = <>
      {expandPacket && <>
        {packetObj.map((item, index) => {
          return <div key={index} className={styles.packet_item}>
            <div className={styles.packet_item_title} onClick={() => {
              expandPacketItem(item)
            }}>
              <span className={styles.packet_item_title_name}>{item.id}</span>
              <span className={styles.packet_item_title_type}>{item.name}</span>
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
        <div id="cesiumContainer">
        </div>
        <div className={styles.form_container}>
          <div className={styles.opt_container}>
            <span onClick={togglePacket}>Packet struct toggle</span>
            {packetAry && renderPacketSchema(packetAry)}

            <Select style={{
              position: 'absolute',
              width: 200,
              right: 0,
              top: 0,
            }} value={curDemoName} onChange={(value) => {
              console.log(value);
              setCurDemoName(value)
              // @ts-ignore
              const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[value]));
              console.log(' new czml demo', czml);
              setPacketAry(czml)
              if (cesiumViewer) {
                cesiumViewer.dataSources.removeAll()
                const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
                cesiumViewer.dataSources.add(dataSourcePromise);
                cesiumViewer.zoomTo(dataSourcePromise);
              }
              if (thumbnailViewer) {
                thumbnailViewer.dataSources.removeAll()
                const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
                thumbnailViewer.dataSources.add(dataSourcePromise);
                thumbnailViewer.zoomTo(dataSourcePromise);
              }
            }}>
              {Object.keys(czmlDemoKeymap).map((key) => {
                return <Select.Option key={key} value={key}>{key}</Select.Option>
              })}
            </Select>

          </div>
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
              // emptyObjectFields: 'skipDefaults',
              emptyObjectFields: 'populateRequiredDefaults',
              // emptyObjectFields: 'populateAllDefaults' // this is  default config
            }}
          />}
        </div>
        <div id="thumbnailContainer" className={styles.thumbnail_container}>
        </div>
        <div style={{
          position: "absolute",
          bottom: 0,
          right: '50%',
          height: "200px",
          width: "200px",
          background: "white"
        }}>
          <Button onClick={() => {
            getThumbnail()
          }}>getThumbnail</Button>
          {thumbnailDataUrl && <img style={{border: "1px solid #666"}} src={thumbnailDataUrl} alt="" />}

        </div>
      </div>

    </>
  );
};

export default HomePage;
