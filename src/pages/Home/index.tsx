import Form from '@rjsf/antd';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useEffect, useState } from 'react';
import styles from './index.less';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css'

import { CZML2RJSFAdaptor, RJSFAdaptor2, BaseJSONSchemaObj, editableKeysInPacketSchema } from '@/utils/CZMLRJSFAdaptor';



const DEFAULT_KEY = 'billboard'



const czml1 = [
  {
    id: "document",
    name: "CZML Colors",
    version: "1.0",
  },
  {
    id: "rgba",
    name: "Rectangle with outline using RGBA Colors",
    rectangle: {
      coordinates: {
        wsenDegrees: [-120, 40, -110, 50],
      },
      fill: true,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 100],
          },
        },
      },
      height: 0, // disables ground clamping, needed for outlines
      outline: true,
      outlineColor: {
        rgba: [255, 0, 0, 255],
      },
    },
  },
  {
    id: "rgbaf",
    name: "Rectangle using RGBAF Colors",
    rectangle: {
      coordinates: { wsenDegrees: [-100, 40, -90, 50] },
      fill: true,
      material: {
        solidColor: {
          color: {
            rgbaf: [1, 0, 0, 0.39],
          },
        },
      },
      height: 0, // disables ground clamping, needed for outlines
      outline: true,
      outlineColor: {
        rgba: [255, 255, 0, 255],
      },
    },
  },
];
console.log(' czml1 ', czml1);

const czml = [
  {
    "id": "document",
    "name": "Basic CZML billboard and label",
    "version": "1.0"
  },
  {
    "id": "some-unique-id",
    "name": "AGI",
    "description": "<p><a href='http://www.agi.com' target='_blank'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>",
    "billboard": {
      // "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
      // "scale": 1.0
      "eyeOffset": {
        "cartesian": [0, 0, 0]
      },
      "horizontalOrigin": "CENTER",
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
      "pixelOffset": {
        "cartesian2": [0, 0]
      },
      "scale": 1.5,
      "show": true,
      "verticalOrigin": "CENTER"
    },
    "label": {
      "fillColor": {
        "rgba": [
          255,
          255,
          255,
          255
        ]
      },
      "font": "12pt Lucida Console",
      "horizontalOrigin": "LEFT",
      "verticalOrigin": "BOTTOM",
      "pixelOffset": {
        "cartesian2": [
          8,
          0
        ]
      },
      "style": "FILL",
      "text": "AGIGo go go",
      "showBackground": true,
      "backgroundColor": {
        "rgba": [
          112,
          89,
          57,
          200
        ]
      }
      // "backgroundColor": {
      //     "interval": "2023-08-07T00:00:00Z/2023-08-07T00:05:00Z",
      //     "epoch": "2023-08-07T00:00:00Z",
      //     "rgba": [
      //       {
      //         "interval": "2023-08-07T00:00:00Z/2023-08-07T00:02:00Z",
      //         "rgba": [255, 0, 0, 128]
      //       },
      //       {
      //         "interval": "2023-08-07T00:02:00Z/2023-08-07T00:05:00Z",
      //         "rgba": [0, 0, 255, 128]
      //       }
      //     ]
      // }
    },
    "position": {
      "cartesian": [
        1216361.4096947117,
        -4736253.175342511,
        4081267.4865667094
      ]
    },
     "clock": {
      "interval": "2023-08-07T00:00:00Z/2023-08-07T00:05:00Z",
      "currentTime": "2023-08-07T00:00:00Z",
      "multiplier": 1,
      "range": "LOOP_STOP",
      "step": "SYSTEM_CLOCK_MULTIPLIER"
    },
  }
]

console.log(' czml ----- ', czml);

// 用户导入了  czml 
// 需要对 czml 进行解析 补充默认的字段



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

  const setForm = (e) => {
    // console.log(e);
    setFormData(e.formData)
    if (cesiumViewer) {
      cesiumViewer.dataSources.removeAll()
      curEditPacket[editKey] = e.formData
      // console.log(' end billboard ', czml[1]);
      console.log(' end czml ', e.formData);
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
      cesiumViewer.dataSources.add(dataSourcePromise);
      cesiumViewer.zoomTo(dataSourcePromise);
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

  const initSchema = ()=>{
    const targetJSON = BaseJSONSchemaObj[editKey]
    let jsonStr = JSON.stringify(targetJSON, null, 2);
    // console.log(' jsonStr ', jsonStr)
    jsonStr = jsonStr.replace(/\$ref/g, '#ref')
    const schemaTem = JSON.parse(jsonStr) as RJSFSchema;

    CZML2RJSFAdaptor(schemaTem)
    RJSFAdaptor2(schemaTem)

    const schema = schemaTem
    setFormSchema(schema)
  }


  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);
    setViewer(viewer);
    setPacketAry(czml)
    initSchema();
    return () => {
      // viewer.dataSources.remove(dataSourcePromise);
      const container = document.getElementById('cesiumContainer')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])


  const togglePacket = () => {
    setExpandPacket(!expandPacket)
  }

  const expandPacketItem = (item) => {
    console.log(' haha ');
    item.expand = !item.expand
    setPacketAry([...packetAry])
  }

  const edit = (item, key) => {
    setFormData(null)
    setTimeout(()=>{
      setEditKey(key);
      initSchema();
      setCurPacket(item)
      setFormData(item[key])
    })
  }

  const renderPacketSchema = (packet: any) => {
    const packetObj = packet
    const renderHTML = <>
      {expandPacket && <>
        {packetObj.map((item, index) => {
          return <div key={index} className={styles.packet_item}>
            <div className={styles.packet_item_title} onClick={()=>{
              expandPacketItem(item)
            }}>
              <span className={styles.packet_item_title_name}>{item.id}</span>
              <span className={styles.packet_item_title_type}>{item.name}</span>
              <div className={styles.packet_item_keys}>
                {item.expand && Object.keys(item).map((key, index) => {
                  if(editableKeysInPacketSchema.indexOf(key) === -1){
                    return null
                  }
                  return <div key={index} className={styles.packet_item_key}>
                        <span className={styles.packet_item_key_name} onClick={(e)=>{
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
            Packet 结构 <span onClick={togglePacket}>toggle</span>
            {packetAry && renderPacketSchema(packetAry)}
            {/* <div>
              {
                czml.map((item, index) => {
                  return <div key={index}>{ +index} toggle </div>
                })
              }
            </div> */}
          </div>
          {formData && <Form
            formData={formData}
            onChange={(e) => setForm(e)}
            schema={formSchema}
            validator={validator}
            uiSchema={uiSchema}
          />}
        </div>

      </div>

    </>
  );
};

export default HomePage;
