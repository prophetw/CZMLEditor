import { RJSFSchema } from '@rjsf/utils';
import BillboardJSONSchema from '../../CZMLSchemaJSON/Base/Billboard.json'
import LabelJSONSchema from '../../CZMLSchemaJSON/Base/Label.json'
import ClockJSONSchema from '../../CZMLSchemaJSON/Base/Clock.json'
import PolygonJSONSchema from '../../CZMLSchemaJSON/Base/Polygon.json'
import PolylineJSONSchema from '../../CZMLSchemaJSON/Base/Polyline.json'
import RectangleJSONSchema from '../../CZMLSchemaJSON/Base/Rectangle.json'
import PointJSONSchema from '../../CZMLSchemaJSON/Base/Point.json'
import ModelJSONSchema from '../../CZMLSchemaJSON/Base/Model.json'
import PacketJSONSchema from '../../CZMLSchemaJSON/Base/Packet.json'
import PositionJSONSchema from '../../CZMLSchemaJSON/Base/Position.json'
import PathJSONSchema from '../../CZMLSchemaJSON/Base/Path.json'
import BoxJSONSchema from '../../CZMLSchemaJSON/Base/Box.json'
import ShapeJSONSchema from '../../CZMLSchemaJSON/Base/Shape.json'
import EllipseJSONSchema from '../../CZMLSchemaJSON/Base/Ellipse.json'
import CylinderJSONSchema from '../../CZMLSchemaJSON/Base/Cylinder.json'
import CorridorJSONSchema from '../../CZMLSchemaJSON/Base/Corridor.json'
import PolylineVolumeJSONSchema from '../../CZMLSchemaJSON/Base/PolylineVolume.json'
import EllipsoidJSONSchema  from '../../CZMLSchemaJSON/Base/Ellipsoid.json'


import CZMLDefinitions from './CZMLDefinitions';

// original czml jsonSchema 
const BaseJSONSchemaObj = {
  ellipsoid: EllipsoidJSONSchema,
  polylineVolume: PolylineVolumeJSONSchema,
  corridor: CorridorJSONSchema,
  cylinder: CylinderJSONSchema,
  ellipse: EllipseJSONSchema,
  shape: ShapeJSONSchema,
  box: BoxJSONSchema,
  billboard: BillboardJSONSchema,
  label: LabelJSONSchema,
  polygon: PolygonJSONSchema,
  polyline: PolylineJSONSchema,
  point: PointJSONSchema,
  packet: PacketJSONSchema,
  model: ModelJSONSchema,
  clock: ClockJSONSchema,
  rectangle: RectangleJSONSchema,
  position: PositionJSONSchema,
  path: PathJSONSchema,

}

const validPacketKeys = Object.keys(BaseJSONSchemaObj.packet.properties)
const validBillboardKeys = Object.keys(BaseJSONSchemaObj.billboard.properties)
const validLabelKeys = Object.keys(BaseJSONSchemaObj.label.properties)
const validPolygonKeys = Object.keys(BaseJSONSchemaObj.polygon.properties)
const validPolylineKeys = Object.keys(BaseJSONSchemaObj.polyline.properties)

const editableKeysInPacketSchema = [
  "ellipsoid",
  "polylineVolume",
  "corridor",
  "cylinder",
  "ellipse",
  "shape",
  "billboard",
  "label",
  "polygon",
  "polyline",
  "point",
  "rectangle",
  "clock",
  "model",
  "position",
  "path",
  "box",
]

const czmlSchemaTypeKeymap = CZMLDefinitions;

// some properties need to add new features
// 高级属性
const RJSFSchemaKeymap = {
  show: {
    isAdvancedConfig: false,
  },
  positions: {
    isAdvancedConfig: false,
  }
}


const keyThatNeedSkipDefaultHandle = [
  'eyeOffset',  // czml eyeOffset is a catersian object,  but default value is a array  cause error, write default value in definitions
  'backgroundPadding',
  'pixelOffset',
  'backgroundColor',
  'material',
]

const CZML2RJSFAdaptor = (schemaObj: RJSFSchema) => {
  // first adapt the schemaObj make rjsf can render it

  // 1. czml #ref  => rjsf schema type
  // 2. czml czmlRequiredForDisplay => rjsf required
  // 3. czml default => rjsf default
  // 4. czml enum => rjsf enum
  // 5. czml enumNames => rjsf enumNames

  schemaObj.definitions = czmlSchemaTypeKeymap;
  const properties = schemaObj.properties;
  // console.log(properties);
  for (let key in properties) {
    if (Object.hasOwn(properties, key)) {
      const element = properties[key];
      // console.log(`${key}: `, element);
      if (element) {
        if (element.czmlRequiredForDisplay) {
          if (!schemaObj.required) {
            schemaObj.required = [];
          }
          schemaObj.required.push(key);
        }

        // element.type = 'string';
        // adjust type from pre keymap 
        let ref = element['#ref']; //  replace #ref => rsjf definitions
        // in czml ref is like  Color.json 
        // in rsjf ref is like  #/definitions/Color.json 



        if (ref && ref.indexOf('/') > -1) {
          ref = ref.replace('/', '_');
        }

        if (czmlSchemaTypeKeymap[ref] !== undefined) {
          element['$ref'] = `#/definitions/${ref}`;

          if (keyThatNeedSkipDefaultHandle.indexOf(key) > -1) {
            delete element.default;
            continue;
          }

          if (element.default !== undefined) {
            // should handle this in czmlSchemaTypeKeymap
            // e.g. default [0, 0]  in fact should be cartesian2 = [0, 0]
            // element.default = undefined
            if (element.default === 'π / 180.0') {
              element.default = Math.PI / 180.0;
            }
            if (element.default === 'solid white') {
              delete element.default;
            }
            if (element.default === 'white' || element.default === 'black') {
              element.default = {
                rgba: [255, 255, 255, 255]
              }
            }
            if (element.default !== undefined && typeof element.default === 'string' && element.default.indexOf('[') === 0) {
              element.default = JSON.parse(element.default);
            }
            if (element.type === 'number') {
              element.default = +element.default;
            }
          }


          continue;

          const pre_obje = czmlSchemaTypeKeymap[ref];


          if (pre_obje.type) {
            element.type = pre_obje.type;
          }
          if (pre_obje.items) {
            element.items = pre_obje.items;
          }
          if (pre_obje.enum) {
            element.enum = pre_obje.enum;
          }
          if (pre_obje.enumNames) {
            element.enumNames = pre_obje.enumNames;
          }
          if (pre_obje.default) {
            element.default = pre_obje.default;
          }
          if (pre_obje.oneOf) {
            element.oneOf = pre_obje.oneOf;
          }
          if (pre_obje.anyOf) {
            element.oneOf = pre_obje.anyOf;
          }
          if (pre_obje.properties) {
            element.properties = pre_obje.properties;
          }
          if (pre_obje.minItems) {
            element.minItems = pre_obje.minItems;
          }
          if (pre_obje.required) {
            element.required = pre_obje.required;
          }

        }
      }
    }
  }
  // properties 
}


const RJSFAdaptor2 = (schemaObj: RJSFSchema) => {
  // second adapt the schemaObj  can add some new features

  const properties = schemaObj.properties;
  for (let key in properties) {
    if (Object.hasOwn(properties, key)) {
      const element = properties[key];
      // console.log(`${key}: `, element);
      if (element) {

        // use this to control the advanced config
        element.isAdvancedConfig = true;
        if (RJSFSchemaKeymap[key] !== undefined) {
          element.isAdvancedConfig = RJSFSchemaKeymap[key].isAdvancedConfig;
        }
      }
    }
  }
}

const UserInputJSONAdaptor = (jsonObj: any) => {
  // handle the user input json data
  const cloneObj = JSON.parse(JSON.stringify(jsonObj));
  if (Array.isArray(jsonObj)) {
    // [{id: ""}, {}]
    jsonObj.forEach((packet: any) => {
      editableKeysInPacketSchema.forEach((key: string) => {
        if (packet[key]) {
          // handle the key
          const packetItem = packet[key]; // user input part   billboard polygon label schema 
          const packetItemSchema = editableKeysInPacketSchema[packetItem['#ref']];
          // use user input  value to replace change default value



        }

      })
    })

  }
  if (typeof jsonObj === 'object') {


  }


  return cloneObj
}

export {
  czmlSchemaTypeKeymap,
  RJSFSchemaKeymap,
  CZML2RJSFAdaptor,
  RJSFAdaptor2,
  BaseJSONSchemaObj,
  UserInputJSONAdaptor,
  editableKeysInPacketSchema,
}