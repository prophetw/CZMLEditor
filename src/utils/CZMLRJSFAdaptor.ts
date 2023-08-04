import { RJSFSchema } from '@rjsf/utils';

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
    additionalItems: false

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
    type: 'array',
    items: [
      {
        type: "number",
        description: " X axis",
        default: 0
      },
      {
        "type": "number",
        description: " Y axis",
        default: 0
      },
      {
        "type": "number",
        description: " Z axis",
        default: 0
      }
    ],
    additionalItems: false

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
    anyOf: [
      {
        type: 'null',
        title: '未设置',
        enum: ['null'],
      },
      {
        type: 'array',
        description: 'when at near distance, the value is nearValue, when at far distance, the value is farValue',
        title: 'NearFarScalar',
        // default: [0, 0, 0, 0],
        items: {
          type: 'number',
        },
        "minItems": 4,
        "maxItems": 4,
      }
    ],
  },

  'Color.json': {
    "type": "object",
    "oneOf": [
      {
        "properties": {
          "rgba": {
            "type": "array",
            "items": { "type": "integer", "minimum": 0, "maximum": 255 },
            "minItems": 4,
            "maxItems": 4,
            "title": "RGBA Color",
            default: [255, 255, 255, 255],
          }
        },
        "required": ["rgba"]
      },
      {
        "properties": {
          "rgbaf": {
            "type": "array",
            "items": { "type": "number", "minimum": 0, "maximum": 1 },
            "minItems": 4,
            "maxItems": 4,
            "title": "RGBAF Color",
            default: [1.0, 1.0, 1.0, 1.0],
          }
        },
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
        "title": "Distance Display Condition",
        "properties": {
          "near": { "type": "number", "default": 0.1 },
          "far": { "type": "number", "default": 1000.0 }
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
    type: 'string',
    format: 'uri'
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
    type: 'array',
    title: '[x y width height]',
    items: {
      type: 'number',
    },
    minItems: 4,
    maxItems: 4,
  }

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
  console.log(properties);
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
            if (element.default === 'π / 180.0') {
              element.default = Math.PI / 180.0;
            }
            if (element.default === 'solid white') {
              delete element.default;
            }
            if (element.default === 'white') {
              element.default = {
                rgba: [255, 255, 255, 255]
              }
            }
            if (element.default !== undefined && typeof element.default === 'string' && element.default.indexOf('[') === 0) {
              element.default = JSON.parse(element.default);
            }
            if (element.type === 'number') {
              console.log(' _____ ', element.default);
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
  console.log(properties);
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

export {

  czmlSchemaTypeKeymap,
  RJSFSchemaKeymap,
  CZML2RJSFAdaptor,
  RJSFAdaptor2,
}