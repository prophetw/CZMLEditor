import { RJSFSchema } from '@rjsf/utils';
import BillboardJSONSchema from '../../CZMLSchemaJSON/Base/Billboard.json'
import LabelJSONSchema from '../../CZMLSchemaJSON/Base/Label.json'
import PolygonJSONSchema from '../../CZMLSchemaJSON/Base/Polygon.json'
import PolylineJSONSchema from '../../CZMLSchemaJSON/Base/Polyline.json'
import PacketJSONSchema from '../../CZMLSchemaJSON/Base/Packet.json'

const BaseJSONSchemaObj = {
  billboard: BillboardJSONSchema,
  label: LabelJSONSchema,
  polygon: PolygonJSONSchema,
  polyline: PolylineJSONSchema,
  packet: PacketJSONSchema,
}

const validPacketKeys = Object.keys(BaseJSONSchemaObj.packet.properties)
const validBillboardKeys = Object.keys(BaseJSONSchemaObj.billboard.properties)
const validLabelKeys = Object.keys(BaseJSONSchemaObj.label.properties)
const validPolygonKeys = Object.keys(BaseJSONSchemaObj.polygon.properties)
const validPolylineKeys = Object.keys(BaseJSONSchemaObj.polyline.properties)

const editableKeysInPacketSchema = [
  "billboard",
  "label",
  "polygon",
  "polyline",
]

// console.log('validPacketKeys', validPacketKeys);
// console.log('validBillboardKeys', validBillboardKeys);
// console.log('validLabelKeys', validLabelKeys);
// console.log('validPolygonKeys', validPolygonKeys);
// console.log('validPolylineKeys', validPolylineKeys);





const czmlSchemaTypeKeymap = {
  'Boolean.json': {
    type: 'boolean',
    enum: [true, false]
  },
  'String.json': {
    type: 'string'
  },
  'Font.json': {
    type: 'string',

  },
  'BackgroundPadding.json': {
    type: 'object',
    properties: {
      cartesian2: {
        type: 'array',
        items: [
          {
            type: "number",
            description: " offsetX",
            default: 7
          },
          {
            "type": "number",
            description: " offsetY ",
            default: 5
          }
        ],
        additionalItems: false,
        default: [7, 5],
      },
    }
  },
  'PositionList.json': {
    type: "array",
    items: {
      type: "number",
    },
    minItems: 3,
  },
  'Point.json': {
    type: 'array',
    items: [
      {
        type: "number",
        description: " X or Longitude",
      },
      {
        "type": "number",
        description: " Y or Latitude"
      },
      {
        "type": "number",
        description: " Z or Height"
      }
    ],
    additionalItems: false
  },
  'PositionListOfLists.json': {
    type: 'array',
    items: {
      type: 'array',
      items: [
        {
          type: "number",
          description: " X or Longitude",
        },
        {
          "type": "number",
          description: " Y or Latitude"
        },
        {
          "type": "number",
          description: " Z or Height"
        }
      ],
      additionalItems: false
    }
  },
  'PixelOffset.json': {
    type: 'object',
    properties: {
      "cartesian2": {
        type: 'array',
        items: [
          {
            type: "number",
            description: " offsetX ",
            default: 0
          },
          {
            "type": "number",
            description: " offsetY",
            default: 0
          }
        ],
        additionalItems: false
      },
    },
  },
  'AlignedAxis.json': {
    oneOf: [
      {
        type: 'null',
        title: 'undefined',
        default: undefined,
      },
      {
        type: 'object',
        title: ' Axis ',
        properties: {
          "cartesian": {
            type: 'array',
            items: [
              {
                type: "number",
                description: " X axis",
                default: 0.0
              },
              {
                "type": "number",
                description: " Y axis",
                default: 1.0
              },
              {
                "type": "number",
                description: " Z axis",
                default: 0.0
              }
            ],
            additionalItems: false,
            default: [0.0, 1.0, 0.0],
          }
        }

      }
    ]
  },
  'EyeOffset.json': {
    type: 'object',
    properties: {
      "cartesian": {
        type: 'array',
        items: [
          {
            type: "number",
            description: " offsetX",
            default: 0
          },
          {
            "type": "number",
            description: " offsetY",
            default: 0
          },
          {
            "type": "number",
            description: " offsetZ",
            default: 0
          }
        ],
        additionalItems: false
      }
    },
  },
  'NearFarScalar.json': {
    oneOf: [
      {
        type: 'null',
        title: '未设置',
        enum: ['null'],
      },
      {
        type: 'object',
        description: 'when at near distance, the value is nearValue, when at far distance, the value is farValue',
        title: '[near, nearValue, far, farValue]  NearFarScalar',
        properties: {
          "nearFarScalar": {
            type: 'array',
            items: [
              {
                type: "number",
                description: " near distance",
                default: 1
              },
              {
                "type": "number",
                description: " near value",
                default: 0.1
              },
              {
                "type": "number",
                description: " far distance",
                default: 100
              },
              {
                "type": "number",
                description: " far value",
                default: 1.0
              }
            ],
            additionalItems: false
          }
        }
      }
    ],
  },

  'Color.json': {
    oneOf: [
      {
        type: 'null',
        title: 'unset',
      },
      {
        "type": "object",
        "description": "A color.",
        "properties": {
          "rgba": {
            "type": "array",
            "items": { "type": "integer", "minimum": 0, "maximum": 255 },
            "minItems": 4,
            "maxItems": 4,
            "title": "RGBA Color",
            default: [255, 0, 0, 126],
          }
        },
        "title": "RGBA Color 0~255",
        "required": ["rgba"]
      },
      // {
      //   "type": "object",
      //   "description": "A color. The color can optionally vary over time.",
      //   "properties": {
      //     "rgba": {
      //       "type": "array",
      //       "items": {
      //         "type": "object",
      //         properties: {
      //           interval: {
      //             type: 'string',
      //             default: '2019-01-01T00:00:00Z/2019-01-01T00:00:00Z',
      //           },
      //           rgba: {
      //             "type": "array",
      //             "items": { "type": "integer", "minimum": 0, "maximum": 255 },
      //             "minItems": 4,
      //             "maxItems": 4,
      //             "title": "RGBA Color",
      //             default: [255, 0, 0, 126],
      //           }


      //         },
      //         default: [255, 0, 0, 126],
      //       }
      //     }
      //   },
      //   "title": "RGBA Color 0~255 change with time",
      //   "required": ["rgba"]
      // },
      {
        "type": "object",
        "description": "A color. The color can optionally vary over time.",
        "properties": {
          "rgbaf": {
            "type": "array",
            "items": { "type": "number", "minimum": 0, "maximum": 1 },
            "minItems": 4,
            "maxItems": 4,
            "title": "RGBAF Color",
            default: [1.0, 0.0, 0.0, 0.5],
          }
        },
        "title": "RGBAF Color 0~1",
        "required": ["rgbaf"]
      }
    ]
  },
  'Double.json': {
    type: 'number',
    // anyOf: [
    //     { type: 'number' }, // 定义第一种类型：浮点数字
    //     {
    //       type: 'array',
    //       items: {
    //         type: 'object',
    //         properties: {
    //           Time: {
    //             type: 'string', // ISO 8601 date and time string 或者 seconds since epoch
    //           },
    //           Value: {
    //             type: 'number',
    //           }
    //         }
    //       }
    //     },
    // ],
  },
  'HorizontalOrigin.json': {
    type: 'string',
    enum: ['CENTER', 'LEFT', 'RIGHT'],
    enumNames: ['居中', '左对齐', '右对齐'],
    default: 'CENTER',
  },
  'VerticalOrigin.json': {
    type: 'string',
    enum: ['CENTER', 'BOTTOM', 'TOP'],
    enumNames: ['居中', '下对齐', '上对齐'],
    default: 'CENTER',
  },
  'HeightReference.json': {
    type: 'string',
    enum: ['NONE', 'CLAMP_TO_GROUND', 'RELATIVE_TO_GROUND'],
    enumNames: ['无高度', '贴地模式', '相对地面高度'],
    default: 'NONE',
  },
  'Number.json': {
    type: 'number',
  },
  'Layer.json': {
    type: 'string',
    enum: ['TERRAIN', 'COLUMBUS_VIEW', '3D_TILES'],
    enumNames: ['地形模式', '哥伦布视图模式', '3D瓦片模式'],
    default: 'TERRAIN',
  },
  'LabelStyle.json': {
    type: 'string',
    enum: ['FILL', 'OUTLINE', 'FILL_AND_OUTLINE'],
    enumNames: ['填充', '轮廓', '填充和轮廓'],
    default: 'FILL',
  },
  'ArcType.json': {
    type: 'string',
    enum: ['NONE', 'GEODESIC', 'RHUMB'],
    enumNames: ['无', '大圆弧', '等角弧'],
    default: 'GEODESIC',
  },
  'ShadowMode.json': {
    type: 'string',
    enum: ['DISABLED', 'ENABLED', 'CAST_ONLY', 'RECEIVE_ONLY'],
    enumNames: ['全关闭', '全开启', '仅投射阴影', '仅接受阴影'],
    default: 'DISABLED',
  },
  'ClassificationType.json': {
    type: 'string',
    enum: ['NONE', 'TERRAIN', 'CESIUM_3D_TILE', 'BOTH'],
    enumNames: ['无', '地形', '3D瓦片', '地形和3D瓦片'],
    default: 'NONE',
  },
  'Integer.json': {
    type: 'number',
  },
  'DistanceDisplayCondition.json': {
    anyOf: [
      {
        "type": "null",
        "title": "Undefined"
      },
      {
        "type": "object",
        "title": " [near, far] DistanceDisplayCondition",
        "properties": {
          "distanceDisplayCondition": {
            type: 'array',
            items: {
              type: 'number',
            },
            "minItems": 2,
            "maxItems": 2,
            default: [0.1, 1000],
          }
        }
      }
    ]
  },
  'Material.json': {
    "anyOf": [
      {
        "type": "object",
        "title": "Solid Color",
        "properties": {
          "solidColor": {
            "type": "object",
            "properties": {
              "color": { "type": "string", default: 'white' },
            },
          }
        },
      },
      {
        "type": "object",
        "title": "Image",
        "properties": {
          "type": { "type": "string", "enum": ["Image"], "default": "Image" },
          "url": { "type": "string" }
        },
        "required": ["type", "url"]
      },
      {
        "type": "object",
        "title": "Grid",
        "properties": {
          "type": { "type": "string", "enum": ["Grid"], "default": "Grid" },
          "color": { "type": "string" },
          "cellAlpha": { "type": "number", default: 1.0 },
          "lineCount": { "type": "number" },
          "lineThickness": { "type": "number" },
          "lineOffset": { "type": "number" }
        },
        "required": ["type", "color", "cellAlpha", "lineCount", "lineThickness", "lineOffset"]
      },
      {
        "type": "object",
        "title": "Stripe",
        "properties": {
          "type": { "type": "string", "enum": ["Stripe"], "default": "Stripe" },
          "orientation": { "type": "string" },
          "evenColor": { "type": "string" },
          "oddColor": { "type": "string" },
          "offset": { "type": "number" },
          "repeat": { "type": "number" }
        },
        "required": ["type", "orientation", "evenColor", "oddColor", "offset", "repeat"]
      },
      {
        "type": "object",
        "title": "Checkerboard",
        "properties": {
          "type": { "type": "string", "enum": ["Checkerboard"], "default": "Checkerboard" },
          "evenColor": { "type": "string" },
          "oddColor": { "type": "string" },
          "repeat": { "type": "number" }
        },
        "required": ["type", "evenColor", "oddColor", "repeat"]
      }
    ]

  },
  'PolylineMaterial.json': {
    "anyOf": [
      {
        "type": "object",
        "title": "Solid Color",
        "properties": {
          "solidColor": {
            "type": "object",
            "properties": {
              "color": { "type": "string", default: 'white' },
            },
          }
        },
      },
      {
        "type": "object",
        "title": "Image",
        "properties": {
          "type": { "type": "string", "enum": ["Image"], "default": "Image" },
          "url": { "type": "string" }
        },
        "required": ["type", "url"]
      },
      {
        "type": "object",
        "title": "Grid",
        "properties": {
          "type": { "type": "string", "enum": ["Grid"], "default": "Grid" },
          "color": { "type": "string" },
          "cellAlpha": { "type": "number", default: 1.0 },
          "lineCount": { "type": "number" },
          "lineThickness": { "type": "number" },
          "lineOffset": { "type": "number" }
        },
        "required": ["type", "color", "cellAlpha", "lineCount", "lineThickness", "lineOffset"]
      },
      {
        "type": "object",
        "title": "Stripe",
        "properties": {
          "type": { "type": "string", "enum": ["Stripe"], "default": "Stripe" },
          "orientation": { "type": "string" },
          "evenColor": { "type": "string" },
          "oddColor": { "type": "string" },
          "offset": { "type": "number" },
          "repeat": { "type": "number" }
        },
        "required": ["type", "orientation", "evenColor", "oddColor", "offset", "repeat"]
      },
      {
        "type": "object",
        "title": "Checkerboard",
        "properties": {
          "type": { "type": "string", "enum": ["Checkerboard"], "default": "Checkerboard" },
          "evenColor": { "type": "string" },
          "oddColor": { "type": "string" },
          "repeat": { "type": "number" }
        },
        "required": ["type", "evenColor", "oddColor", "repeat"]
      }
    ]

  },
  'Uri.json': {
    oneOf: [
      {
        type: 'string',
        format: 'uri',
        title: 'Uri or dataUri',
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
      },
      {
        type: 'array',
        title: 'The URI can optionally vary with time.',
        items: {
          type: 'object',
          properties: {
            "interval": {
              "type": "string",
              description: 'start = end = new Date().toISOString; value = start/end',
              default: '2023-08-07T05:31:35.12Z/2024-08-07T06:31:35.12Z'
            },
            "uri": {
              "type": "string",
              "format": "uri",
              default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACvSURBVDhPrZDRDcMgDAU9GqN0lIzijw6SUbJJygUeNQgSqepJTyHG91LVVpwDdfxM3T9TSl1EXZvDwii471fivK73cBFFQNTT/d2KoGpfGOpSIkhUpgUMxq9DFEsWv4IXhlyCnhBFnZcFEEuYqbiUlNwWgMTdrZ3JbQFoEVG53rd8ztG9aPJMnBUQf/VFraBJeWnLS0RfjbKyLJA8FkT5seDYS1Qwyv8t0B/5C2ZmH2/eTGNNBgMmAAAAAElFTkSuQmCC",
            }
          },
          "required": ["uri", "interval"]
        }
      }
    ]
    // properties: {
    //   "uri": {
    //     "type": "string",
    //     "format": "uri",
    //   }
    // },
    // "required": ["uri"]
  },
  'BoundingRectangle.json': {
    // https://github.com/AnalyticalGraphicsInc/czml-writer/blob/main/Schema/BoundingRectangle.json
    oneOf: [
      {
        "type": "null",
        "title": "不设置",
        default: undefined,
      },
      {
        type: 'object',
        title: '[x y width height]',
        properties: {
          "boundingRectangle": {
            "type": "array",
            "description": "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in radians.",
            items: {
              type: 'number',
            },
            minItems: 4,
            maxItems: 4,
            default: [0, 0, 10, 10],
          }
        }
      },
    ]
  },
  'RectangleCoordinates.json': {

    type: 'object',
    title: 'Rectangle',
    oneOf: [
      {
        properties: {
          "wsen": {
            "type": "array",
            "description": "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in radians.",
            items: {
              type: 'number',
            },
            minItems: 4,
            maxItems: 4,
          }
        }
      },
      {
        properties: {
          "wsenDegrees": {
            "type": "array",
            "description": "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in degrees.",
            items: {
              type: 'number',
            },
            minItems: 4,
            maxItems: 4,
          }
        }
      },
    ]

  },

}

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


const CZML2RJSFAdaptor = (schemaObj: RJSFSchema) => {
  // first adapt the schemaObj make rjsf can render it

  // 1. czml #ref  => rjsf schema type
  // 2. czml czmlRequiredForDisplay => rjsf required
  // 3. czml default => rjsf default
  // 4. czml enum => rjsf enum
  // 5. czml enumNames => rjsf enumNames

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
        const ref = element['#ref'];
        if (czmlSchemaTypeKeymap[ref] !== undefined) {
          const pre_obje = czmlSchemaTypeKeymap[ref];
          if (pre_obje.type) {
            element.type = pre_obje.type;
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