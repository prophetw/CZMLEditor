import Form from '@rjsf/antd';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useState } from 'react';

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
const HomePage: React.FC = () => {
  const [formData, setFormData] = useState(formDataTem);
  const setForm = (e) => {
    console.log(e);
    setFormData(e.formData)
  }
  return (
    <Form
      formData={formData}
      onChange={(e) => setForm(e)}
      schema={schema}
      validator={validator}
      uiSchema={uiSchema}
    />
  );
};

export default HomePage;
