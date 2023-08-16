"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[131],{

/***/ 46851:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Editor; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(93525);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(25359);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49811);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(54306);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rjsf+antd@5.11.2_@ant-design+icons@5.2.4_@rjsf+core@5.11.2_@rjsf+utils@5.11.2_antd@5.8.1_day_6wq474oouybmleb36qsqinxf2u/node_modules/@rjsf/antd/dist/antd.esm.js + 85 modules
var antd_esm = __webpack_require__(39748);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(25539);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/select/index.js + 53 modules
var es_select = __webpack_require__(5027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rjsf+validator-ajv8@5.11.2_@rjsf+utils@5.11.2/node_modules/@rjsf/validator-ajv8/dist/validator-ajv8.esm.js
var validator_ajv8_esm = __webpack_require__(88390);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
;// CONCATENATED MODULE: ./src/pages/Editor/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Editormodules = ({"container":"container___UMQI1","flex":"flex___iRZOS","tree_container":"tree_container___JWyA6","cesium_container":"cesium_container___vbLre","thumbnail_container":"thumbnail_container___EmfKt","form_container":"form_container___Zw05R","show_thumbnail":"show_thumbnail___qFfoi","opt_container":"opt_container___adtmp","packet_item":"packet_item___R5pRQ","packet_item_keys":"packet_item_keys___eQ7uG"});
// EXTERNAL MODULE: ./node_modules/.pnpm/@cesium+engine@3.0.2/node_modules/@cesium/engine/Source/DataSources/CzmlDataSource.js + 20 modules
var CzmlDataSource = __webpack_require__(76389);
// EXTERNAL MODULE: ./node_modules/.pnpm/@cesium+widgets@3.0.2/node_modules/@cesium/widgets/Source/Viewer/Viewer.js + 629 modules
var Viewer = __webpack_require__(2918);
// EXTERNAL MODULE: ./node_modules/.pnpm/@cesium+engine@3.0.2/node_modules/@cesium/engine/Source/Core/EllipsoidTerrainProvider.js
var EllipsoidTerrainProvider = __webpack_require__(76910);
// EXTERNAL MODULE: ./node_modules/.pnpm/@cesium+engine@3.0.2/node_modules/@cesium/engine/Source/Core/Color.js
var Color = __webpack_require__(3216);
// EXTERNAL MODULE: ./node_modules/.pnpm/cesium@1.108.0/node_modules/cesium/Build/Cesium/Widgets/widgets.css
var widgets = __webpack_require__(77790);
// EXTERNAL MODULE: ./src/utils/CZMLRJSFAdaptor.ts + 12 modules
var CZMLRJSFAdaptor = __webpack_require__(699);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumCZMLColors.json
var CesiumCZMLColors = __webpack_require__(67599);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumBillboardAndLabel.json
var CesiumBillboardAndLabel = __webpack_require__(77196);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumPoint.json
var CesiumPoint = __webpack_require__(97607);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumPointTimeDynamic.json
var CesiumPointTimeDynamic = __webpack_require__(98763);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumPolygon.json
var CesiumPolygon = __webpack_require__(36205);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumPolyline.json
var CesiumPolyline = __webpack_require__(17856);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumRedPolyline.json
var CesiumRedPolyline = __webpack_require__(27264);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumPolylineDefinitions.json
var CesiumPolylineDefinitions = __webpack_require__(13861);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumPath.json
var CesiumPath = __webpack_require__(98437);
// EXTERNAL MODULE: ./CZMLSchemaJSON/testFile/CesiumModel.json
var CesiumModel = __webpack_require__(79767);
// EXTERNAL MODULE: ./src/utils/CZMLUISchema.ts
var CZMLUISchema = __webpack_require__(8482);
// EXTERNAL MODULE: ./src/utils/CZMLWidgets.ts + 4 modules
var CZMLWidgets = __webpack_require__(86367);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/pages/Editor/index.tsx



























var Editor_widgets = CZMLWidgets/* CZMLCustomWidgets */.y;
var uiSchema = CZMLUISchema/* uiSchema */.N;
var DEFAULT_KEY = 'billboard';
var czmlDemoKeymap = {
  "选择模板": "",
  model: CesiumModel,
  billboard: CesiumBillboardAndLabel,
  rectangle: CesiumCZMLColors,
  point: CesiumPoint,
  polygon: CesiumPolygon,
  polyline: CesiumPolyline,
  polylineRed: CesiumRedPolyline,
  polylineDef: CesiumPolylineDefinitions,
  pointTime: CesiumPointTimeDynamic,
  path: CesiumPath
};
var EMPTY_PACKET_ARY = [{
  id: 'document',
  name: 'CZML Geometries: Polygon',
  version: '1.0'
}, {
  id: 'packet1',
  name: 'packet title'
}];
var EditorPage = function EditorPage() {
  var _useState = (0,react.useState)(null),
    _useState2 = slicedToArray_default()(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = slicedToArray_default()(_useState3, 2),
    cesiumViewer = _useState4[0],
    setViewer = _useState4[1];
  var _useState5 = (0,react.useState)(null),
    _useState6 = slicedToArray_default()(_useState5, 2),
    thumbnailViewer = _useState6[0],
    setThumbViewer = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    expandPacket = _useState8[0],
    setExpandPacket = _useState8[1];
  var _useState9 = (0,react.useState)(null),
    _useState10 = slicedToArray_default()(_useState9, 2),
    packetAry = _useState10[0],
    setPacketAry = _useState10[1];
  var _useState11 = (0,react.useState)(DEFAULT_KEY),
    _useState12 = slicedToArray_default()(_useState11, 2),
    editKey = _useState12[0],
    setEditKey = _useState12[1];
  var _useState13 = (0,react.useState)(null),
    _useState14 = slicedToArray_default()(_useState13, 2),
    formSchema = _useState14[0],
    setFormSchema = _useState14[1];
  var _useState15 = (0,react.useState)(null),
    _useState16 = slicedToArray_default()(_useState15, 2),
    curEditPacket = _useState16[0],
    setCurPacket = _useState16[1];
  var _useState17 = (0,react.useState)('选择模板'),
    _useState18 = slicedToArray_default()(_useState17, 2),
    curDemoName = _useState18[0],
    setCurDemoName = _useState18[1];
  var _useState19 = (0,react.useState)(''),
    _useState20 = slicedToArray_default()(_useState19, 2),
    thumbnailDataUrl = _useState20[0],
    setThumbnailDataUrl = _useState20[1];
  var setForm = function setForm(e) {
    console.log(' curFormData ---- ', e.formData);
    setFormData(e.formData);
    curEditPacket[editKey] = e.formData;
    if (cesiumViewer) {
      var dataSourcePromise = CzmlDataSource/* default.load */.Z.load(packetAry);
      cesiumViewer.dataSources.removeAll();
      cesiumViewer.dataSources.add(dataSourcePromise);
    }
    if (thumbnailViewer) {
      var _dataSourcePromise = CzmlDataSource/* default.load */.Z.load(packetAry);
      thumbnailViewer.dataSources.removeAll();
      thumbnailViewer.dataSources.add(_dataSourcePromise);
    }
  };
  var getTreeFromCZML = function getTreeFromCZML(packetArray) {
    // first children
    // 仅展示第一层属性 
    var cloneObj = JSON.parse(JSON.stringify(packetArray));
    // console.log(' ======= ', typeof cloneObj);
    cloneObj.forEach(function (item, index) {
      item.expand = false;
    });
    return cloneObj;
  };
  var getThumbnail = function getThumbnail() {
    if (thumbnailViewer) {
      // const dataSourcePromise = Cesium.CzmlDataSource.load(packetArray);
      // thumbnailViewer.dataSources.removeAll()
      // thumbnailViewer.dataSources.add(dataSourcePromise);
      // thumbnailViewer.zoomTo(dataSourcePromise)
      // thumbnailViewer.scene.screenSpaceCameraController.enableRotate = false;
      console.log(thumbnailViewer);
      var thumbnail = thumbnailViewer.scene.canvas.toDataURL();
      console.log(' thumbnail is ', thumbnail);
      setThumbnailDataUrl(thumbnail);
    }
  };
  var initSchema = function initSchema(editKey) {
    var targetJSON = CZMLRJSFAdaptor/* BaseJSONSchemaObj */.Uz[editKey];
    var jsonStr = JSON.stringify(targetJSON, null, 2);
    // console.log(' jsonStr ', jsonStr)
    jsonStr = jsonStr.replace(/\$ref/g, '#ref');
    var schemaTem = JSON.parse(jsonStr);
    (0,CZMLRJSFAdaptor/* CZML2RJSFAdaptor */.Xm)(schemaTem);
    (0,CZMLRJSFAdaptor/* RJSFAdaptor2 */.KA)(schemaTem);
    console.log(' init ', schemaTem);
    var schema = schemaTem;
    setFormSchema(schema);
  };
  (0,react.useEffect)(function () {
    var getPacketInfoFromServer = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.resolve(null));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getPacketInfoFromServer() {
        return _ref.apply(this, arguments);
      };
    }();
    var init = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        var packetFromServer, clonePakcet, viewer, thumbView;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getPacketInfoFromServer();
            case 2:
              packetFromServer = _context2.sent;
              if (packetFromServer === null) {
                // 初始化 一个空的 packet
                clonePakcet = JSON.parse(JSON.stringify(EMPTY_PACKET_ARY));
                setPacketAry(clonePakcet);
              } else {
                // handle format data

                setPacketAry(packetFromServer);
              }
              viewer = new Viewer/* default */.Z("cesiumContainer", {
                contextOptions: {
                  webgl: {
                    preserveDrawingBuffer: true,
                    alpha: true
                  }
                }
              });
              thumbView = new Viewer/* default */.Z("thumbnailContainer", {
                baseLayerPicker: false,
                // 移除基础图层选择器
                baseLayer: false,
                geocoder: false,
                // 移除地理编码器
                homeButton: false,
                // 移除主页按钮
                sceneModePicker: false,
                // 移除场景模式选择器
                timeline: false,
                // 移除时间轴
                navigationHelpButton: false,
                // 移除帮助按钮
                animation: false,
                // 移除动画控件
                fullscreenButton: false,
                // 移除全屏按钮
                vrButton: false,
                // 移除VR按钮
                skyAtmosphere: false,
                // 移除大气效果
                skyBox: false,
                // 移除天空盒
                terrainProvider: new EllipsoidTerrainProvider/* default */.Z(),
                // 移除地形
                contextOptions: {
                  webgl: {
                    preserveDrawingBuffer: true,
                    alpha: true
                  }
                }
              });
              thumbView.scene.globe = undefined; // 移除地球球体
              thumbView.scene.backgroundColor = new Color/* default */.Z(0, 0, 0, 0);
              console.log(' viewer ', viewer);
              setViewer(viewer);
              setThumbViewer(thumbView);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function init() {
        return _ref2.apply(this, arguments);
      };
    }();
    init();
    return function () {
      // viewer.dataSources.remove(dataSourcePromise);
      var container = document.getElementById('cesiumContainer');
      var container2 = document.getElementById('thumbnailContainer');
      if (container) {
        container.innerHTML = '';
      }
      if (container2) {
        container2.innerHTML = '';
      }
    };
  }, []);
  var unloadCZML = function unloadCZML() {
    if (cesiumViewer) {
      cesiumViewer.dataSources.removeAll();
    }
    if (thumbnailViewer) {
      thumbnailViewer.dataSources.removeAll();
    }
    setPacketAry(null);
    setFormData(null);
  };
  var loadCZML = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(czml) {
      var dataSourcePromise, path, _dataSourcePromise2;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            // @ts-ignore
            // const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[curDemoName]));
            console.log(' czml ', czml);
            unloadCZML();
            if (!cesiumViewer) {
              _context3.next = 12;
              break;
            }
            _context3.next = 5;
            return CzmlDataSource/* default.load */.Z.load(czml);
          case 5:
            dataSourcePromise = _context3.sent;
            _context3.next = 8;
            return cesiumViewer.dataSources.add(dataSourcePromise);
          case 8:
            path = cesiumViewer.dataSources._dataSources[0].entities.getById('path');
            console.log(' path ', path);
            cesiumViewer.zoomTo(dataSourcePromise);
            if (path) {
              cesiumViewer.trackedEntity = path;
            }
          case 12:
            if (!thumbnailViewer) {
              _context3.next = 19;
              break;
            }
            _context3.next = 15;
            return CzmlDataSource/* default.load */.Z.load(czml);
          case 15:
            _dataSourcePromise2 = _context3.sent;
            _context3.next = 18;
            return thumbnailViewer.dataSources.add(_dataSourcePromise2);
          case 18:
            thumbnailViewer.zoomTo(_dataSourcePromise2);
          case 19:
            // list need this 
            setPacketAry(czml);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function loadCZML(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadTemplate = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(value) {
      var czml;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            // @ts-ignore
            czml = JSON.parse(JSON.stringify(czmlDemoKeymap[value]));
            loadCZML(czml);
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function loadTemplate(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var togglePacket = function togglePacket() {
    console.log(packetAry);
    setExpandPacket(!expandPacket);
    getThumbnail();
  };
  var locatePacket = function locatePacket() {
    if (cesiumViewer) {
      var dataSources = cesiumViewer.dataSources._dataSources[0];
      if (dataSources) {
        cesiumViewer.zoomTo(dataSources);
      }
    }
  };
  var expandPacketItem = function expandPacketItem(item) {
    console.log(' haha ');
    item.expand = !item.expand;
    setPacketAry(toConsumableArray_default()(packetAry));
  };
  var addPacket = function addPacket() {
    var newPacket = {
      id: 'document',
      name: 'CZML Geometries: Polygon',
      version: '1.0'
    };
    packetAry.push(newPacket);
    setPacketAry(toConsumableArray_default()(packetAry));
  };
  var edit = function edit(item, key) {
    setFormData(null);
    setTimeout(function () {
      setEditKey(key);
      initSchema(key);
      setCurPacket(item);
      console.log(' item key ', item, key);
      console.log(' curForm ', item[key]);
      setFormData(item[key]);
    });
  };
  var renderPacketSchema = function renderPacketSchema(packet) {
    var packetObj = packet;
    var renderHTML = /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: expandPacket && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: packetObj.map(function (item, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: Editormodules.packet_item,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: Editormodules.packet_item_title,
              onClick: function onClick() {
                expandPacketItem(item);
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: Editormodules.packet_item_title_name,
                children: ["Packet", index, " id: ", item.id]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: Editormodules.packet_item_keys,
                children: item.expand && Object.keys(item).map(function (key, index) {
                  if (CZMLRJSFAdaptor/* editableKeysInPacketSchema.indexOf */.fE.indexOf(key) === -1) {
                    return null;
                  }
                  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: Editormodules.packet_item_key,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: Editormodules.packet_item_key_name,
                      onClick: function onClick(e) {
                        edit(item, key);
                        e.stopPropagation();
                      },
                      children: key
                    })
                  }, index);
                })
              })]
            })
          }, index);
        })
      })
    });
    return renderHTML;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Editormodules.flex,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: Editormodules.tree_container,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: addPacket,
          children: "\u65B0\u589EPacket"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: addPacket,
          children: "InitPacket"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: function onClick() {
            console.log(' ');
          },
          children: "\u65B0\u589EPacketNode"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: function onClick() {
            console.log(' ');
          },
          children: "\u5220\u9664"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          children: "\u5BFC\u5165"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          children: "\u5BFC\u51FA"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          children: "\u4FDD\u5B58"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          value: curDemoName,
          onChange: /*#__PURE__*/function () {
            var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(value) {
              return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log(' value', value);
                    setCurDemoName(value);
                    if (value === '选择模板') {
                      unloadCZML();
                    } else {
                      loadTemplate(value);
                    }
                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x3) {
              return _ref5.apply(this, arguments);
            };
          }(),
          children: Object.keys(czmlDemoKeymap).map(function (key) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
              value: key,
              children: key
            }, key);
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: Editormodules.packet_list,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: Editormodules.opt_container,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              onClick: togglePacket,
              children: "Packet struct toggle"
            }), packetAry && renderPacketSchema(packetAry)]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: Editormodules.cesium_container,
        id: "cesiumContainer"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: Editormodules.form_container,
        children: formData && /*#__PURE__*/(0,jsx_runtime.jsx)(antd_esm/* default */.ZP, {
          formContext: {
            formData: formData
            // other props...
          },

          formData: formData,
          onChange: function onChange(e) {
            return setForm(e);
          },
          schema: formSchema,
          widgets: Editor_widgets,
          validator: validator_ajv8_esm/* default */.ZP,
          uiSchema: uiSchema,
          experimental_defaultFormStateBehavior: {
            // emptyObjectFields: 'skipDefaults',
            emptyObjectFields: 'populateRequiredDefaults'
            // emptyObjectFields: 'populateAllDefaults' // this is  default config
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        id: "thumbnailContainer",
        className: Editormodules.thumbnail_container
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: Editormodules.show_thumbnail,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: function onClick() {
            getThumbnail();
          },
          children: "getThumbnail"
        }), thumbnailDataUrl && /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          style: {
            border: "1px solid #666"
          },
          src: thumbnailDataUrl,
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: locatePacket,
          children: "\u5B9A\u4F4D"
        })]
      })]
    })
  });
};
/* harmony default export */ var Editor = (EditorPage);

/***/ })

}]);