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
import { Select } from 'antd';



const DEFAULT_KEY = 'billboard'

// 用户导入了  czml 
// 需要对 czml 进行解析 补充默认的字段
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



const uiSchema = {
  // outlineColor: {
  //   'ui:widget': 'color',
  // },
  // fillColor: {
  //   'ui:widget': 'color',
  // },
  // backgroundColor: {
  //   'ui:widget': 'color',
  // },
  // image: {
  // 'ui:widget': 'uri',
  // },
  // "material": {
  //   "solidColor": {
  //     "color": {
  //       "ui:widget": "color"
  //     }
  //   },
  //   "color": {
  //     "ui:widget": "color"
  //   },
  //   "evenColor": {
  //     "ui:widget": "color"
  //   },
  //   "oddColor": {
  //     "ui:widget": "color"
  //   }
  // }

}

// const formDataTem = czml[1].label

console.log(Cesium);

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState(null);
  const [cesiumViewer, setViewer] = useState<Cesium.Viewer | null>(null);
  const [expandPacket, setExpandPacket] = useState(false)
  const [packetAry, setPacketAry] = useState<any>(null)
  const [editKey, setEditKey] = useState(DEFAULT_KEY)
  const [formSchema, setFormSchema] = useState<any>(null)
  const [curEditPacket, setCurPacket] = useState<any>(null)
  const [curDemoName, setCurDemoName] = useState('billboard')

  const setForm = (e) => {
    // console.log(e);
    setFormData(e.formData)
    if (cesiumViewer) {
      cesiumViewer.dataSources.removeAll()
      curEditPacket[editKey] = e.formData
      // console.log(' end billboard ', czml[1]);
      console.log(' end czml ', e.formData);
      const dataSourcePromise = Cesium.CzmlDataSource.load(packetAry);
      cesiumViewer.dataSources.add(dataSourcePromise);
      console.log(' cesium data sources ---- ', cesiumViewer.dataSources);
      // cesiumViewer.zoomTo(dataSourcePromise);
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
        },
      }
    });
    console.log(' viewer ', viewer);
    // @ts-ignore
    const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[curDemoName]));
    console.log(' czml ', czml);
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);
    setViewer(viewer);
    setPacketAry(czml)
    return () => {
      // viewer.dataSources.remove(dataSourcePromise);
      const container = document.getElementById('cesiumContainer')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  const togglePacket = () => {
    console.log(packetAry);
    setExpandPacket(!expandPacket)
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
            <span onClick={togglePacket}>Packet 结构 展开/关闭</span>
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
            }}>
              {Object.keys(czmlDemoKeymap).map((key) => {
                return <Select.Option key={key} value={key}>{key}</Select.Option>
              })}
            </Select>

          </div>
          {formData && <Form
            formData={formData}
            onChange={(e) => setForm(e)}
            schema={formSchema}
            validator={validator}
            uiSchema={uiSchema}
            experimental_defaultFormStateBehavior={{
              emptyObjectFields: 'skipDefaults',
            }}
          />}
        </div>

      </div>

    </>
  );
};

export default HomePage;
