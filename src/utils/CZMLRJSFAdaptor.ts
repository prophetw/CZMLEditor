import { RJSFSchema } from '@rjsf/utils';
import BillboardJSONSchema from '../../CZMLSchemaJSON/Base/Billboard.json'
import LabelJSONSchema from '../../CZMLSchemaJSON/Base/Label.json'
import PolygonJSONSchema from '../../CZMLSchemaJSON/Base/Polygon.json'
import PolylineJSONSchema from '../../CZMLSchemaJSON/Base/Polyline.json'
import RectangleJSONSchema from '../../CZMLSchemaJSON/Base/Rectangle.json'
import PointJSONSchema from '../../CZMLSchemaJSON/Base/Point.json'
import ModelJSONSchema from '../../CZMLSchemaJSON/Base/Model.json'
import PacketJSONSchema from '../../CZMLSchemaJSON/Base/Packet.json'

const BaseJSONSchemaObj = {
  billboard: BillboardJSONSchema,
  label: LabelJSONSchema,
  polygon: PolygonJSONSchema,
  polyline: PolylineJSONSchema,
  point: PointJSONSchema,
  packet: PacketJSONSchema,
  model: ModelJSONSchema,
  rectangle: RectangleJSONSchema,
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
  "point",
  "rectangle",
  "model"
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
      },
    }
  },
  'PositionList.json': {
    oneOf: [
      {
        type: "object",
        title: ' Longitude, Latitude, Height in radians',
        properties: {
          cartographicRadians: {
            type: 'array',
            items:
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
            minItems: 9,
          }
        },
      },
      {
        type: "object",
        title: ' Longitude, Latitude, Height in degrees',
        properties: {
          cartographicDegrees: {
            type: 'array',
            items:
            {
              type: "number",
              description: " Longitude, Latitude, Height in degrees",
              default: 0,
            },
            minItems: 9,
          }
        },
      },
      {
        type: "object",
        title: 'X, Y, Z in cartesian coordinates',
        properties: {
          cartesian: {
            type: 'array',
            items:
            {
              type: "number",
              description: " X, Y, Z",
              default: 0,
            },
            minItems: 9,
          }
        },
      }
    ],
  },
  'Position.json': {
    type: 'Object',
    properties: {
      cartographicDegrees: {
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
      default: {
        cartographicDegrees: [0, 0, 0]
      }
    },
  },
  'PositionListOfLists.json': {
    oneOf: [
      {
        type: 'null',
        description: 'undefined',
        title: '未设置'
      },
      {
        type: "array",
        title: ' Longitude, Latitude, Height in radians',
        items: {
          type: 'array',
          items: [
            {
              type: "number",
              description: " Longitude in radians",
              default: 0,
            },
            {
              type: "number",
              description: " Latitude in radians",
              default: 0,
            },
            {
              type: "number",
              description: "  Height in meters",
              default: 0,
            },
          ],
          additionalItems: false
        },
      },
      {
        type: "array",
        title: ' Longitude, Latitude, Height in degrees',
        items: {
          type: 'array',
          items: [
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
          ],
          additionalItems: false
        },
      },
      {
        type: "array",
        title: 'X, Y, Z in cartesian coordinates',
        items: {
          type: 'array',
          items: [
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
            {
              type: "number",
              description: " Longitude, Latitude, Height in radians",
              default: 0,
            },
          ],
          additionalItems: false
        },
      }
    ],
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
      },
      default: [0.0, 0.0, 0.0]
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
        "type": "object",
        "description": "A color.",
        "properties": {
          "rgba": {
            "type": "array",
            "items": {
              "type": "number",
              "minimum": 0,
              "maximum": 255,
              "default": 0
            },
            "minItems": 4,
            "maxItems": 4,
            "title": "RGBAF Color"
          }
        },
        "title": "RGBA Color 0~255",
        "required": ["rgba"],
        default: {
          rgba: [255, 255, 255, 128]
        }
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
          }
        },
        "title": "RGBAF Color 0~1",
        "required": ["rgbaf"],
        default: {
          rgbaf: [1.0, 0.0, 0.0, 0.5],
        }
      }
    ]
  },
  'ColorBlendMode.json': {
    type: 'object',
    properties: {
      "colorBlendMode": {
        type: 'string',
        enum: ['HIGHLIGHT', 'MIX', 'REPLACE'],
        enumNames: ['高亮', '混合', '替换'],
        default: 'MIX',
      },
      required: ['colorBlendMode'],
    }
  },
  'Translation.json': {
    type: 'object',
    properties: {
      "cartesian": {
        type: 'array',
        items: {
          type: 'number',
          default: 0,
        },
        minItems: 3,
        maxItems: 3,
        default: [0, 0, 0],
        additionalItems: false,
      }
    }
  },
  'Scale.json': {
    type: 'object',
    properties: {
      "cartesian": {
        type: 'array',
        items: {
          type: 'number',
          default: 0,
        },
        minItems: 3,
        maxItems: 3,
        default: [0, 0, 0],
        additionalItems: false,
      }
    }
  },
  'Rotation.json': {
    type: 'object',
    properties: {
      "unitQuaternion": {
        type: 'array',
        items: {
          type: 'number',
          default: 0,
        },
        minItems: 4,
        maxItems: 4,
        default: [0, 0, 0, 0],
        additionalItems: false,
      }
    }
  },
  'NodeTransformation.json': {
    "type": "object",
    "properties": {
      "translation": {
        "$ref": "#/definitions/Translation.json",
        "description": "The translation to apply to the model node.",
        "default": [0.0, 0.0, 0.0]
      },
      "rotation": {
        "$ref": "#/definitions/Rotation.json",
        "description": "The rotation to apply to the model node.",
        "default": [0.0, 0.0, 0.0, 1.0]
      },
      "scale": {
        "$ref": "#/definitions/Scale.json",
        "description": "The scaling to apply to the model node.",
        "default": [1.0, 1.0, 1.0]
      }
    }
  },
  'NodeTransformations.json': {
    "title": "NodeTransformations",
    "description": "A mapping of node names to node transformations.",
    "type": "object",
    "additionalProperties": {
      "$ref": "#/definitions/NodeTransformation.json",
      "description": "Transformations to apply to a particular node in a 3D model.",
    },
  },
  'Articulation.json': {
    "type": "object",
    "properties": {
      number: {
        type: 'number',
        default: 1.0
      },
    }
  },
  'Articulations.json': {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "https://analyticalgraphicsinc.github.io/czml-writer/Schema/Articulations.json",
    "title": "Articulations",
    "description": "A mapping of keys to articulation values, where the keys are the name of the articulation, a single space, and the name of the stage.",
    "type": "object",
    "additionalProperties": {
      "$ref": "#/definitions/Articulation.json",
      "description": "Articulation values to apply to a 3D model."
    }
  },
  'Double.json': {
    type: 'number',
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
    enum: ['GEODESIC', 'RHUMB'],
    enumNames: ['大圆弧', '等角弧']
  },
  'ShadowMode.json': {
    type: 'string',
    enum: ['DISABLED', 'ENABLED', 'CAST_ONLY', 'RECEIVE_ONLY'],
    enumNames: ['全关闭', '全开启', '仅投射阴影', '仅接受阴影']
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
    "oneOf": [
      {
        "type": "object",
        "title": "Solid Color",
        "properties": {
          "solidColor": {
            "type": "object",
            "properties": {
              "color": {
                "$ref": "#/definitions/Color.json",
              },
            },
          }
        },
        required: ['solidColor'],
        additionalProperties: false,
      },
      // {
      //   "type": "null",
      //   "title": "未设置",
      // },
      // {
      //   "type": "object",
      //   "title": "Image",
      //   "properties": {
      //     "url": { "type": "string" }
      //   },
      //   "required": ["url"]
      // },
      // {
      //   "type": "object",
      //   "title": "Grid",
      //   "properties": {
      //     "color": { "type": "string" },
      //     "cellAlpha": { "type": "number", default: 1.0 },
      //     "lineCount": { "type": "number" },
      //     "lineThickness": { "type": "number" },
      //     "lineOffset": { "type": "number" }
      //   },
      //   "required": ["color", "cellAlpha", "lineCount", "lineThickness", "lineOffset"]
      // },
      // {
      //   "type": "object",
      //   "title": "Stripe",
      //   "properties": {
      //     "orientation": { "type": "string" },
      //     "evenColor": { "type": "string" },
      //     "oddColor": { "type": "string" },
      //     "offset": { "type": "number" },
      //     "repeat": { "type": "number" }
      //   },
      //   "required": ["orientation", "evenColor", "oddColor", "offset", "repeat"]
      // },
      {
        "type": "object",
        "title": "Checkerboard",
        "properties": {
          "checkerboard": {
            "type": "object",
            properties: {
              "evenColor": { "$ref": "#/definitions/Color.json" },
              "oddColor": { "$ref": "#/definitions/Color.json" },
              "repeat": {
                oneOf: [
                  { "type": "null" },
                  { "type": "number" },
                ]
              },
              "required": ["evenColor", "oddColor"]
            }
          },
        },
        "required": ['checkerboard'],
        additionalProperties: false,
      },
    ]

  },
  'PolylineMaterial.json': {
    "oneOf": [
      {
        "type": "null",
        "title": "未设置",
      },
      {
        "type": "object",
        "title": "Solid Color",
        "properties": {
          "solidColor": {
            "type": "object",
            "properties": {
              "color": {
                "type": "object",
                "$ref": "#/definitions/Color.json",
              },
            },
          },
        },
        "required": ["solidColor"],
        additionalProperties: false
      },
      {
        "type": "object",
        "title": "Checkerboard",
        "properties": {
          "checkerboard": {
            "type": "object",
            properties: {
              "evenColor": { "$ref": "#/definitions/Color.json" },
              "oddColor": { "$ref": "#/definitions/Color.json" },
              "repeat": {
                oneOf: [
                  { "type": "null" },
                  { "type": "number" },
                ]
              },
              "required": ["evenColor", "oddColor"]
            }
          },
        },
        "required": ['checkerboard'],
        additionalProperties: false,
      },
    ]

  },
  'Uri.json': {
    oneOf: [
      {
        type: 'string',
        format: 'uri',
        title: 'Uri or dataUri',
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEX////////7+e7z7tbr4s708qbi1p/ez4vSvIP////Ir2bBoWLGq2XSvmvi13LFqGTe0XDNsmfPuWm9nGHs5oDaym/Yx27Vv5y/n2H079/VwmzQuZDp4nbl2nT//vvcz3DWxGzv6o7t6HjQu2rf03HDpGPv7HrbzHDPtmj69+/v6cHfzrXTvJj8+/f9+/X38+37+uz28ur6+OX28eH59tbw6dbz7dXu5s3w6rnv6rLZxp7j1pnSupPl3I3byo3h1nvm3XXKr2f7+d328tjw6cjr4cjp3r7dzLDg0K/s5afp4KbZxqbf0KHw7JncypXdz4vt6InUv4ff0YPOtYLr43nTvnf7+vL18tD498r18cfr4bvm27LbyanPt5jVv5Ln3oTez4PXw4LRvH7ZyHrEqHbKsnALRXLGAAAACXRSTlO/n7+/v7+/v78Ov8gXAAABoUlEQVQ4y33TaXvBQBAAYL3bSEIQRZMg7rTum6Koq64qet/H//8L3SukQefTzuyb58nuzhi2DNrYOdjf1uZw+2gZ6bLHxTBPUU3JoAGJK94OgM8yb68Dt0V3iIAw99nSA6lQM2sARU2yf8DDG8siMM49MgjQplfnAmS8FyICN5egFBlgEDCWkgg0hoKAQE2RyGFGGDgc/TgAgiDLAPgLmtNlJwhYrWcAzEK8KAu9BN6SCGlNjSAcENjMYdNHitSVr6qTLLs0bbQeI8CYXnDtrsK7fNwgiZJY3bQA9DmsNIasGQI60I+A1EnpgU0UWQDq4Pc6a4HXz/NmO8dZuMCpHpwgwHq4uo932znjJmC3WOkg6/oPOCjZvxHYlqCzFmQqKijFVwEKZQ5BOY2SiA6gkLqUt0nWbRXMVIC/I6+Vq3IAoNcUCJDgFolUmbEsQKZCgLewbG8PBs9x1HL5n298zPc8fMUi68aAtByoRfMSuahp9t4mYjBy6gfnGl4UHRQQGOdAZTOA7b0KUj0Caop+9NRoViEoxrTDqxv/3cM93fj/As6JT9HgmLyYAAAAAElFTkSuQmCC",
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
              default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEX////////7+e7z7tbr4s708qbi1p/ez4vSvIP////Ir2bBoWLGq2XSvmvi13LFqGTe0XDNsmfPuWm9nGHs5oDaym/Yx27Vv5y/n2H079/VwmzQuZDp4nbl2nT//vvcz3DWxGzv6o7t6HjQu2rf03HDpGPv7HrbzHDPtmj69+/v6cHfzrXTvJj8+/f9+/X38+37+uz28ur6+OX28eH59tbw6dbz7dXu5s3w6rnv6rLZxp7j1pnSupPl3I3byo3h1nvm3XXKr2f7+d328tjw6cjr4cjp3r7dzLDg0K/s5afp4KbZxqbf0KHw7JncypXdz4vt6InUv4ff0YPOtYLr43nTvnf7+vL18tD498r18cfr4bvm27LbyanPt5jVv5Ln3oTez4PXw4LRvH7ZyHrEqHbKsnALRXLGAAAACXRSTlO/n7+/v7+/v78Ov8gXAAABoUlEQVQ4y33TaXvBQBAAYL3bSEIQRZMg7rTum6Koq64qet/H//8L3SukQefTzuyb58nuzhi2DNrYOdjf1uZw+2gZ6bLHxTBPUU3JoAGJK94OgM8yb68Dt0V3iIAw99nSA6lQM2sARU2yf8DDG8siMM49MgjQplfnAmS8FyICN5egFBlgEDCWkgg0hoKAQE2RyGFGGDgc/TgAgiDLAPgLmtNlJwhYrWcAzEK8KAu9BN6SCGlNjSAcENjMYdNHitSVr6qTLLs0bbQeI8CYXnDtrsK7fNwgiZJY3bQA9DmsNIasGQI60I+A1EnpgU0UWQDq4Pc6a4HXz/NmO8dZuMCpHpwgwHq4uo932znjJmC3WOkg6/oPOCjZvxHYlqCzFmQqKijFVwEKZQ5BOY2SiA6gkLqUt0nWbRXMVIC/I6+Vq3IAoNcUCJDgFolUmbEsQKZCgLewbG8PBs9x1HL5n298zPc8fMUi68aAtByoRfMSuahp9t4mYjBy6gfnGl4UHRQQGOdAZTOA7b0KUj0Caop+9NRoViEoxrTDqxv/3cM93fj/As6JT9HgmLyYAAAAAElFTkSuQmCC",
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
            title: "west south east north in radians.",
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
            title: "west south east north in degrees.",
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
        const ref = element['#ref']; //  replace #ref => rsjf definitions
        // in czml ref is like  Color.json 
        // in rsjf ref is like  #/definitions/Color.json 




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