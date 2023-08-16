
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
    examples: [
      "10pt sans-serif",
      "12pt Lucida Console",
      "bold italic 20px Georgia"
    ]
  },
  "IntervalTimeValue.json": {
    type: 'string',
    description: "startISOTime/endISOTime 2023-01-01T00:00:00Z/2023-01-01T00:10:00Z",
    default: "",
    format: 'double_date_time_picker'
  },
  "Values_TimeValue.json": {
    type: 'string',
    format: 'date-time',
    default: '2019-01-01T00:00:00Z',
  },
  "Values_ClockRangeValue.json": {
    type: 'string',
    enum: ['LOOP_STOP', 'UNBOUNDED', 'CLAMPED'],
    enumNames: ['循环停止', '无限循环', '限制循环'],
    default: 'LOOP_STOP',
  },
  "Values_ClockStepValue.json": {
    type: 'string',
    enum: ['SYSTEM_CLOCK', 'SYSTEM_CLOCK_MULTIPLIER', 'TICK_DEPENDENT'],
    enumNames: ['系统时钟', '系统时钟乘数', '依赖于时钟'],
    default: 'SYSTEM_CLOCK',
  },
  "Values_Cartesian3Value.json": {
    format: 'cartesian3_value',
    "description": "A three-dimensional Cartesian value specified as `[X, Y, Z]`. If the array has three elements, the value is constant. If it has four or more elements, they are time-tagged samples arranged as `[Time, X, Y, Z, Time, X, Y, Z, ...]`, where Time is an ISO 8601 date and time string or seconds since epoch.",
    type: 'array',
    items: {
      type: "string"
    }
    // [TimeISO, number, number, number,  TimeISO, number, number, number]
    // or [number, number, number,   number, number, number]
  },
  "Values_CartographicRadiansValue.json": {
    type: 'array',
    format: 'cartographicRadians_value',
    "description": "A geodetic, WGS84 position specified as `[Longitude, Latitude, Height]`, where Longitude and Latitude are in radians and Height is in meters. If the array has three elements, the value is constant. If it has four or more elements, they are time-tagged samples arranged as `[Time, Longitude, Latitude, Height, Time, Longitude, Latitude, Height, ...]`, where Time is an ISO 8601 date and time string or seconds since epoch.",
    items: {
      type: "number",
    }
    // format: 'Cartesian3_value',
  },
  "Values_CartographicDegreesValue.json": {
    type: 'array',
    format: 'cartographicDegree_value',
    items: {
      type: "number",
    }
    // format: 'Cartesian3_value',
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
    type: "object",
    title: ' Longitude, Latitude, Height in radians',
    properties: {
      cartographicRadians: {
        type: 'array',
        format: 'cartesian3_value',
        items:
        {
          type: "number",
          description: " Longitude, Latitude, Height in radians",
        },
        // minItems: 9,
        // default: [121, 31, 2 , 123, 34, 5, 126, 37, 8]
      },
      cartesian: {
        type: 'array',
        title: 'X, Y, Z in cartesian coordinates',
        format: 'cartesian3_value',
        items: {
          type: "number",
          description: " X, Y, Z",
          default: 1
        },
        minItems: 9,
        // default: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },

      cartographicDegrees: {
        type: 'array',
        format: 'cartesian3_value',
        title: ' Longitude, Latitude, Height in degrees',
        items:
        {
          type: "number",
          description: " Longitude, Latitude, Height in degrees",
        },
        // minItems: 9,
        // default: [121, 31, 2 , 123, 34, 5, 126, 37, 8]
      }
    },
  },
  // 'Position.json': {
  //   type: 'Object',
  //   properties: {
  //     cartographicDegrees: {
  //       type: 'array',
  //       items: [
  //         {
  //           type: "number",
  //           description: " X or Longitude",
  //         },
  //         {
  //           "type": "number",
  //           description: " Y or Latitude"
  //         },
  //         {
  //           "type": "number",
  //           description: " Z or Height"
  //         }
  //       ],
  //       additionalItems: false
  //     },
  //     default: {
  //       cartographicDegrees: [0, 0, 0]
  //     }
  //   },
  // },
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
    oneOf: [
      {
        type: 'null',
        title: 'undefined',
      },
      {
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
      }
    ]
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

    oneOf: [
      {
        type: 'null',
        title: 'undefined',
      },
      {
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

      }]
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
    // oneOf 存在很多问题 先简化成 rgba 格式
    "oneOf": [
      {
        "type": "null",
        "title": "undefined"
      },
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
            format: 'color_rgba',
            "title": "RGBA Color"
          }
        },
        "title": "RGBA Color 0~255",
        "required": ["rgba"],
        default: {
          rgba: [255, 255, 255, 128]
        },
      },
      {
        "type": "object",
        "description": "A color. The color can optionally vary over time.",
        "properties": {
          "rgbaf": {
            "type": "array",
            "items": { "type": "number", "minimum": 0, "maximum": 1 },
            "minItems": 4,
            "maxItems": 4,
            format: 'color_rgbaf',
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
    // oneOf: [
    //   {
    //     "type": "object",
    //     "description": "A color.",
    //     "properties": {
    //       "rgba": {
    //         "type": "array",
    //         "items": {
    //           "type": "number",
    //           "minimum": 0,
    //           "maximum": 255,
    //           "default": 0
    //         },
    //         "minItems": 4,
    //         "maxItems": 4,
    //         "title": "RGBAF Color"
    //       }
    //     },
    //     "title": "RGBA Color 0~255",
    //     "required": ["rgba"],
    //     default: {
    //       rgba: [255, 255, 255, 128]
    //     }
    //   },
    //   {
    //     "type": "object",
    //     "description": "A color. The color can optionally vary over time.",
    //     "properties": {
    //       "rgba": {
    //         "type": "array",
    //         "items": {
    //           "type": "object",
    //           properties: {
    //             interval: {
    //               type: 'string',
    //               default: '2019-01-01T00:00:00Z/2019-01-01T00:00:00Z',
    //             },
    //             rgba: {
    //               "type": "array",
    //               "items": { "type": "integer", "minimum": 0, "maximum": 255 },
    //               "minItems": 4,
    //               "maxItems": 4,
    //               "title": "RGBA Color",
    //               default: [255, 0, 0, 126],
    //             }


    //           },
    //           default: [255, 0, 0, 126],
    //         }
    //       }
    //     },
    //     "title": "RGBA Color 0~255 change with time",
    //     "required": ["rgba"]
    //   },
    //   {
    //     "type": "object",
    //     "description": "A color. The color can optionally vary over time.",
    //     "properties": {
    //       "rgbaf": {
    //         "type": "array",
    //         "items": { "type": "number", "minimum": 0, "maximum": 1 },
    //         "minItems": 4,
    //         "maxItems": 4,
    //         "title": "RGBAF Color",
    //       }
    //     },
    //     "title": "RGBAF Color 0~1",
    //     "required": ["rgbaf"],
    //     default: {
    //       rgbaf: [1.0, 0.0, 0.0, 0.5],
    //     }
    //   }
    // ]
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
  "Repeat.json": {
    oneOf: [
      {
        type: "null",
        title: "Undefined"
      },
      {
        "type": "object",
        "properties": {
          cartersian2: {
            type: 'array',
            items: {
              type: 'number',
            },
            "minItems": 2,
            "maxItems": 2,
            default: [1.0, 1.0],
            additionalItems: false,
          }
        },
      }
    ]
  },
  "ImageMaterial.json": {
    "type": "object",
    "properties": {
      "image": {
        "$ref": "#/definitions/Uri.json",
        "description": "The image to display on the surface of the polygon.",
      },
      "repeat": {
        "$ref": "#/definitions/Repeat.json",
        "description": "The number of times the image repeats in each direction.",
      },
      "color": {
        "$ref": "#/definitions/Color.json",
        "description": "A color that blends with the image.",
      },
      "transparent": {
        "type": "boolean",
        "description": "Whether the image has transparency. If true, an alpha texture is generated and the alpha channel of the image is ignored. If false, no alpha texture is generated and the alpha channel of the image is used.",
        "default": false
      }
    },
  },
  "StripeOrientation.json": {
    "type": "string",
    "enum": ["HORIZONTAL", "VERTICAL"],
    "enumNames": ["水平", "垂直"],
    "default": "HORIZONTAL"
  },
  'Material.json': {
    "oneOf": [
      {
        type: "null",
        title: "未设置"
      },
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
      {
        "type": "object",
        "title": "Image",
        "properties": {
          "image": {
            "type": "object",
            "$ref": "#/definitions/ImageMaterial.json",
          }
        },
      },
      {
        "type": "object",
        "title": "Grid",
        "properties": {
          "grid": {
            "type": "object",
            "properties": {
              "color": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the surface.",
                default: {
                  rgba: [255, 255, 255, 255],
                }
              },
              "cellAlpha": {
                "$ref": "#/definitions/Double.json",
                "description": "The alpha value for the space between grid lines. This will be combined with the color alpha.",
                "default": 0.1
              },
              "lineCount": {
                "$ref": "#/definitions/Repeat.json",
                "description": "The number of grid lines along each axis.",
              },
              "lineThickness": {
                "$ref": "#/definitions/Repeat.json",
                "description": "The thickness of grid lines along each axis, in pixels.",
              },
              "lineOffset": {
                "$ref": "#/definitions/Repeat.json",
                "description": "The offset of grid lines along each axis, as a percentage from 0 to 1.",
              }
            }

          }
        },
      },
      {
        "type": "object",
        "title": "Stripe",
        "properties": {
          "stripe": {
            "type": "object",
            "properties": {
              "orientation": {
                "$ref": "#/definitions/StripeOrientation.json",
                "description": "The value indicating if the stripes are horizontal or vertical.",
                "default": "HORIZONTAL"
              },
              "evenColor": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the even stripes.",
                default: {
                  rgba: [255, 255, 255, 255],
                }
              },
              "oddColor": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the odd stripes.",
                default: {
                  rgba: [0, 0, 0, 255],
                }
              },
              "offset": {
                "$ref": "#/definitions/Double.json",
                "description": "The offset of the stripe pattern.",
                "default": 0.0
              },
              "repeat": {
                "$ref": "#/definitions/Double.json",
                "description": "The number of times the stripes repeat.",
                "default": 10.0
              }
            }
          },
          required: ['offset', 'repeat', 'evenColor', 'oddColor', 'orientation'],
        },
        default: {
          stripe: {
            orientation: "HORIZONTAL",
            evenColor: {
              rgba: [255, 255, 255, 255],
            },
            oddColor: {
              rgba: [0, 0, 0, 255],
            },
            offset: 0.0,
            repeat: 10.0,
          }
        },
        "required": ['stripe'],
        additionalProperties: false,
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
                "$ref": "#/definitions/Color.json",
              },
            },
          }
        },
        required: ['solidColor'],
        additionalProperties: false,
      },
      {
        "type": "object",
        "title": "PolylineArrow",
        "properties": {
          "polylineArrow": {
            "type": "object",
            "properties": {
              "color": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the line.",
                default: {
                  rgba: [255, 255, 255, 255],
                }
              }
            }
          }
        }
      },
      {
        "type": "object",
        "title": "PolylineGlow",
        "properties": {
          "polylineGlow": {
            "type": "object",
            "properties": {
              "color": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the line.",
                default: {
                  rgba: [255, 255, 255, 255],
                }
              },
              "glowPower": {
                "$ref": "#/definitions/Double.json",
                "description": "The strength of the glow, as a percentage of the total line width.",
                "default": 0.25
              },
              "taperPower": {
                "$ref": "#/definitions/Double.json",
                "description": "The strength of the tapering effect, as a percentage of the total line length.",
                "default": 1.0
              }
            }
          }
        },
        required: ['polylineGlow'],
      },
      {
        "type": "object",
        "title": "PolylineDash",
        "properties": {
          "polylineDash": {
            "type": "object",
            "properties": {
              "color": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the line.",
                default: {
                  rgba: [255, 255, 255, 255],
                }
              },
              "dashLength": {
                "$ref": "#/definitions/Double.json",
                "description": "The length of the dash pattern.",
                "default": 16.0
              },
              "dashPattern": {
                "$ref": "#/definitions/Double.json",
                "description": "A 16-bit bitfield representing which portions along a single dashLength are the dash (1) and which are the gap (0). The default value, 255 (0000000011111111), indicates 50% gap followed by 50% dash. in console 0b0000000011111111",
                "default": 255
              },
              "gapColor": {
                "$ref": "#/definitions/Color.json",
                "description": "The color of the gaps in the line.",
                default: {
                  rgba: [0, 0, 0, 0],
                }
              }
            }
          }
        }
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
        examples: [
          "hospital.png",
          "location.png",
          "school.png",
          "camera.png",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEX////////7+e7z7tbr4s708qbi1p/ez4vSvIP////Ir2bBoWLGq2XSvmvi13LFqGTe0XDNsmfPuWm9nGHs5oDaym/Yx27Vv5y/n2H079/VwmzQuZDp4nbl2nT//vvcz3DWxGzv6o7t6HjQu2rf03HDpGPv7HrbzHDPtmj69+/v6cHfzrXTvJj8+/f9+/X38+37+uz28ur6+OX28eH59tbw6dbz7dXu5s3w6rnv6rLZxp7j1pnSupPl3I3byo3h1nvm3XXKr2f7+d328tjw6cjr4cjp3r7dzLDg0K/s5afp4KbZxqbf0KHw7JncypXdz4vt6InUv4ff0YPOtYLr43nTvnf7+vL18tD498r18cfr4bvm27LbyanPt5jVv5Ln3oTez4PXw4LRvH7ZyHrEqHbKsnALRXLGAAAACXRSTlO/n7+/v7+/v78Ov8gXAAABoUlEQVQ4y33TaXvBQBAAYL3bSEIQRZMg7rTum6Koq64qet/H//8L3SukQefTzuyb58nuzhi2DNrYOdjf1uZw+2gZ6bLHxTBPUU3JoAGJK94OgM8yb68Dt0V3iIAw99nSA6lQM2sARU2yf8DDG8siMM49MgjQplfnAmS8FyICN5egFBlgEDCWkgg0hoKAQE2RyGFGGDgc/TgAgiDLAPgLmtNlJwhYrWcAzEK8KAu9BN6SCGlNjSAcENjMYdNHitSVr6qTLLs0bbQeI8CYXnDtrsK7fNwgiZJY3bQA9DmsNIasGQI60I+A1EnpgU0UWQDq4Pc6a4HXz/NmO8dZuMCpHpwgwHq4uo932znjJmC3WOkg6/oPOCjZvxHYlqCzFmQqKijFVwEKZQ5BOY2SiA6gkLqUt0nWbRXMVIC/I6+Vq3IAoNcUCJDgFolUmbEsQKZCgLewbG8PBs9x1HL5n298zPc8fMUi68aAtByoRfMSuahp9t4mYjBy6gfnGl4UHRQQGOdAZTOA7b0KUj0Caop+9NRoViEoxrTDqxv/3cM93fj/As6JT9HgmLyYAAAAAElFTkSuQmCC"
        ]
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

const CZMLDefinitions = czmlSchemaTypeKeymap;

export default CZMLDefinitions 