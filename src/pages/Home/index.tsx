import Form from '@rjsf/antd';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useEffect, useState } from 'react';
import styles from './index.less';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css'

import targetJSON from '../../../CZMLSchemaJSON/Polyline.json'
import { CZML2RJSFAdaptor, RJSFAdaptor2 } from '@/utils/CZMLRJSFAdaptor';


let jsonStr = JSON.stringify(targetJSON, null, 2);
console.log(' jsonStr ', jsonStr)
jsonStr = jsonStr.replace(/\$ref/g, '#ref')

const schemaTem = JSON.parse(jsonStr) as RJSFSchema;

CZML2RJSFAdaptor(schemaTem)
RJSFAdaptor2(schemaTem)

console.log(' typeof billboard ', typeof targetJSON);
console.log(' billboard ', schemaTem);

const schema = schemaTem

const uiSchema = {
  outlineColor: {
    'ui:widget': 'color',
  },
  fillColor: {
    'ui:widget': 'color',
  },
  backgroundColor: {
    'ui:widget': 'color',
  },
  image: {
    'ui:widget': 'uri',
  },
  "material": {
    "solidColor": {
      "color": {
        "ui:widget": "color"
      }
    },
    "color": {
      "ui:widget": "color"
    },
    "evenColor": {
      "ui:widget": "color"
    },
    "oddColor": {
      "ui:widget": "color"
    }
  }

}

const formDataTem = {
  done: false,
};

console.log(Cesium);

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState(formDataTem);
  const setForm = (e) => {
    console.log(e);
    setFormData(e.formData)
  }

  useEffect(() => {
    const czml = [
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
            rgba: [0, 0, 0, 255],
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
            rgba: [0, 0, 0, 255],
          },
        },
      },
    ];

    const viewer = new Cesium.Viewer("cesiumContainer");
    const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
    viewer.dataSources.add(dataSourcePromise);
    viewer.zoomTo(dataSourcePromise);

  }, [])

  return (
    <>
      <div className={styles.flex}>
        <div id="cesiumContainer">
        </div>
        <div className={styles.form_container}>
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
