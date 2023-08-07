import Form from '@rjsf/antd';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useEffect, useState } from 'react';
import styles from './index.less';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css'

import targetJSON from '../../../CZMLSchemaJSON/Base/Billboard.json'
import { CZML2RJSFAdaptor, RJSFAdaptor2 } from '@/utils/CZMLRJSFAdaptor';



let jsonStr = JSON.stringify(targetJSON, null, 2);
console.log(' jsonStr ', jsonStr)
jsonStr = jsonStr.replace(/\$ref/g, '#ref')

const schemaTem = JSON.parse(jsonStr) as RJSFSchema;


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
console.log(czml1);

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
      "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
      "scale": 1.0
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
      "showBackground": false,
      "backgroundColor": {
        "rgba": [
          112,
          89,
          57,
          200
        ]
      }
    },
    "position": {
      "cartesian": [
        1216361.4096947117,
        -4736253.175342511,
        4081267.4865667094
      ]
    }
  }
]


// 用户导入了  czml 
// 需要对 czml 进行解析 补充默认的字段


CZML2RJSFAdaptor(schemaTem)
RJSFAdaptor2(schemaTem)

console.log(' typeof billboard ', typeof targetJSON);
console.log(' billboard ', schemaTem);

const schema = schemaTem

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

const formDataTem = czml[1].billboard

console.log(Cesium);

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState(formDataTem);
  const [cesiumViewer, setViewer] = useState<Cesium.Viewer | null>(null);
  const setForm = (e) => {
    console.log(e);
    setFormData(e.formData)
    if(cesiumViewer) {
      cesiumViewer.dataSources.removeAll()
      czml[1].billboard = e.formData
      console.log(' end billboard ', czml[1].billboard);
      const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
      cesiumViewer.dataSources.add(dataSourcePromise);
    }
  }

  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);
    setViewer(viewer);
    return () => {
      // viewer.dataSources.remove(dataSourcePromise);
      const container = document.getElementById('cesiumContainer')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <>
      <div className={styles.flex}>
        <div id="cesiumContainer">
        </div>
        <div className={styles.form_container}>
          <div className={styles.opt_container}>
            nihao 
          </div>
          <Form
            formData={formData}
            onChange={(e) => setForm(e)}
            schema={schema}
            validator={validator}
            uiSchema={uiSchema}
          />
        </div>

      </div>

    </>
  );
};

export default HomePage;
