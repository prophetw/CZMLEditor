"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[536],{

/***/ 62177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54306);
/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93236);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96356);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67006);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62086);




// dayjs.locale('zh-cn');


dayjs__WEBPACK_IMPORTED_MODULE_2___default()().locale('zh-cn').format();
function DoubleDateTimePicker(props) {
  // TimeISO/TimeISO for interval
  var value = props.value;
  var start = null;
  var end = null;
  if (value) {
    start = value.split('/')[0];
    end = value.split('/')[1];
    start = new (dayjs__WEBPACK_IMPORTED_MODULE_2___default())(start);
    end = new (dayjs__WEBPACK_IMPORTED_MODULE_2___default())(end);
  }
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(start),
    _useState2 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(end),
    _useState4 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    endDate = _useState4[0],
    setEndDate = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (startDate && endDate) {
      var res = "".concat(startDate.toISOString(), "/").concat(endDate.toISOString());
      props.onChange(res);
    }
  }, [startDate, endDate]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      value: startDate,
      onChange: function onChange(date) {
        setStartDate(date);
      },
      showTime: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      value: endDate,
      onChange: function onChange(date) {
        setEndDate(date);
      },
      showTime: true
    })]
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (DoubleDateTimePicker);

/***/ }),

/***/ 64015:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93525);
/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54306);
/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93236);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96356);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93444);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66293);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67006);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62086);





// dayjs.locale('zh-cn');


dayjs__WEBPACK_IMPORTED_MODULE_3___default()().locale('zh-cn').format();
function Cartesian3Value(props) {
  // TimeISO/TimeISO for interval

  var formContext = props.formContext;
  var key = props.name; // the key of this component cartesian  cartographicDegrees cartographicRadians           

  // cartesian x y z 
  // cartographicDegrees lontitude latitude height
  // cartographicRadians lontitude latitude height 

  var formData = formContext.formData;
  var epoch = null;
  if (formData) {
    epoch = formData.epoch;
  }
  var value = props.value;
  var valueVaryTime = false;
  if (value && value.length > 0) {
    value.map(function (item, index) {
      if (typeof item === 'string') {
        valueVaryTime = true;
      }
    });
  }
  if (!!epoch) {
    valueVaryTime = true;
  }
  var initValue = null;
  if (value && value.length > 0) {
    initValue = [];
  }
  if (valueVaryTime) {
    if (!!epoch) {
      // if epoch is set then 
      value.map(function (item, index) {
        if (index % 4 === 0) {
          initValue.push([item, value[index + 1], value[index + 2], value[index + 3]]);
        }
      });
    } else {
      value.map(function (item, index) {
        if (index % 4 === 0) {
          initValue.push([new (dayjs__WEBPACK_IMPORTED_MODULE_3___default())(item), value[index + 1], value[index + 2], value[index + 3]]);
        }
      });
    }
  } else {
    value.map(function (item, index) {
      if (index % 3 === 0) {
        initValue.push([value[index], value[index + 1], value[index + 2]]);
      }
    });
  }
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(valueVaryTime),
    _useState2 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    enableTimeInput = _useState2[0],
    setEnableTimeInput = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!!epoch),
    _useState4 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
    isUseEpoch = _useState4[0],
    setUseEpoch = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initValue || []),
    _useState6 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
    valueAry = _useState6[0],
    setValueAry = _useState6[1]; // [ item = [], item = [], item = [] ]

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var result = valueAry.flat();
    if (enableTimeInput && !isUseEpoch) {
      result.map(function (item, index) {
        if (index % 4 === 0) {
          result[index] = item.toISOString();
        }
      });
    }
    props.onChange(result);
  }, [valueAry]);
  var addNewItem = function addNewItem() {
    if (enableTimeInput) {
      setValueAry([].concat(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry), [[new (dayjs__WEBPACK_IMPORTED_MODULE_3___default())(Date.now()), 0, 0, 0]]));
    } else {
      setValueAry([].concat(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry), [[0, 0, 0]]));
    }
  };
  var toggleEpoch = function toggleEpoch() {
    var useEpoch = !isUseEpoch;
    valueAry.forEach(function (item, index) {
      if (enableTimeInput) {
        if (item.length === 3) {
          valueAry[index] = [0, item[0], item[1], item[2]];
        }
      } else {
        if (item.length === 4) {
          valueAry[index] = [item[1], item[2], item[3]];
        }
      }
    });
    setUseEpoch(useEpoch);
    setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
  };
  var toggleTime = function toggleTime() {
    var endEnableTimeInput = !enableTimeInput;
    valueAry.forEach(function (item, index) {
      if (endEnableTimeInput) {
        if (item.length === 3) {
          if (!isUseEpoch) {
            valueAry[index] = [new (dayjs__WEBPACK_IMPORTED_MODULE_3___default())(Date.now()), item[0], item[1], item[2]];
          } else {
            valueAry[index] = [0, item[0], item[1], item[2]];
          }
        }
      } else {
        if (item.length === 4) {
          valueAry[index] = [item[1], item[2], item[3]];
        }
      }
    });
    setEnableTimeInput(endEnableTimeInput);
    setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
  };
  var ArrayItem = function ArrayItem(ary) {
    // when large ary will encounter performance issue
    //  
    var min = Number.NEGATIVE_INFINITY;
    var max = Number.POSITIVE_INFINITY;
    var min2 = Number.NEGATIVE_INFINITY;
    var max2 = Number.POSITIVE_INFINITY;
    var title = 'X';
    var title2 = 'Y';
    if (key === 'cartographicDegrees') {
      min = -180;
      max = 180;
      min2 = -90;
      max2 = 90;
      title = 'Lontitude in degrees';
      title2 = 'Latitude in degrees';
    } else if (key === 'cartographicRadians') {
      min = -Math.PI;
      max = Math.PI;
      min2 = -Math.PI / 2;
      max2 = Math.PI / 2;
      title = 'Lontitude in radians';
      title2 = 'Latitude in radians ';
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      style: {
        maxHeight: 300,
        overflow: 'auto'
      },
      children: ary.map(function (item, index) {
        var _item = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(item, 3),
          x = _item[0],
          y = _item[1],
          z = _item[2];
        var time = null;
        if (enableTimeInput) {
          time = item[0];
          x = item[1];
          y = item[2];
          z = item[3];
        }
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [enableTimeInput && !isUseEpoch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            value: time,
            onChange: function onChange(date) {
              item[0] = date;
              setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
            },
            showTime: true
          }), enableTimeInput && isUseEpoch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            value: time,
            title: "second after epoch",
            onChange: function onChange(date) {
              item[0] = date;
              setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            value: x,
            min: min,
            max: max,
            title: title,
            onChange: function onChange(e) {
              if (enableTimeInput) {
                item[1] = e;
              } else {
                item[0] = e;
              }
              setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            value: y,
            min: min2,
            max: max2,
            title: title2,
            onChange: function onChange(e) {
              if (enableTimeInput) {
                item[2] = e;
              } else {
                item[1] = e;
              }
              setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            value: z,
            title: "Z or Height ",
            onChange: function onChange(e) {
              if (enableTimeInput) {
                item[3] = e;
              } else {
                item[2] = e;
              }
              setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
              onClick: function onClick() {
                valueAry.splice(index, 1);
                setValueAry(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0___default()(valueAry));
              },
              children: "\u5220\u9664"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
              onClick: addNewItem,
              children: "\u65B0\u589E"
            })]
          })]
        }, index);
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
      onClick: function onClick(e) {
        console.log(e);
        toggleTime();
      },
      children: ["\u5F00\u542F\u65F6\u95F4\u8F93\u5165 ", enableTimeInput ? "true" : 'false', " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
      onClick: function onClick(e) {
        toggleEpoch();
      },
      children: ["useEpoch ", isUseEpoch ? "true" : 'false', " "]
    }), ArrayItem(valueAry), valueAry.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
      onClick: addNewItem,
      children: "\u65B0\u589E"
    })]
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (Cartesian3Value);

/***/ }),

/***/ 84279:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54306);
/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93236);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65617);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67006);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62086);




// dayjs.locale('zh-cn');

dayjs__WEBPACK_IMPORTED_MODULE_2___default()().locale('zh-cn').format();
function ColorPickerRGBA(props) {
  // TimeISO/TimeISO for interval

  var value = props.value;
  // console.log(' RGBA 0~255 ', props, value);
  var targetValue = "rgba(".concat(value[0], ", ").concat(value[1], ", ").concat(value[2], ", ").concat(value[3] / 255, ")");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(targetValue),
    _useState2 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    color = _useState2[0],
    setColor = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (typeof color === 'string') return;
    if (!color) return;
    // console.log(color);
    var rgba = color.toRgb();
    var result = [rgba.r, rgba.g, rgba.b, Math.floor(rgba.a * 255)];
    props.onChange(result);
  }, [color]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      value: color,
      onChange: setColor
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (ColorPickerRGBA);

/***/ }),

/***/ 97893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54306);
/* harmony import */ var _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93236);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65617);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67006);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62086);




// dayjs.locale('zh-cn');

dayjs__WEBPACK_IMPORTED_MODULE_2___default()().locale('zh-cn').format();
function ColorPickerRGBAF(props) {
  // TimeISO/TimeISO for interval

  var value = props.value;
  // console.log(' RGBAF 0~1 ', props, value);
  var targetValue = "rgba(".concat(value[0] * 255, ", ").concat(value[1] * 255, ", ").concat(value[2] * 255, ", ").concat(value[3], ")");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(targetValue),
    _useState2 = _home_runner_work_CZMLEditor_CZMLEditor_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    color = _useState2[0],
    setColor = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // props.onChange(result);
    // color.toHexString // "#000000"
    // color.toHsb // { h: 0, s: 0, b: 0 }
    // color.toRgb // { r: 0, g: 0, b: 0, a: 0 }
    if (typeof color === 'string') return;
    if (!color) return;
    // console.log(color);
    var rgba = color.toRgb();
    var result = [rgba.r / 255, rgba.g / 255, rgba.b / 255, rgba.a];
    props.onChange(result);
  }, [color]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      value: color,
      onChange: setColor
    })
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (ColorPickerRGBAF);

/***/ }),

/***/ 46417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uz": function() { return /* binding */ BaseJSONSchemaObj; },
  "Xm": function() { return /* binding */ CZML2RJSFAdaptor; },
  "KA": function() { return /* binding */ RJSFAdaptor2; },
  "fE": function() { return /* binding */ editableKeysInPacketSchema; }
});

// UNUSED EXPORTS: RJSFSchemaKeymap, UserInputJSONAdaptor, czmlSchemaTypeKeymap

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(37635);
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Billboard.json
var Billboard_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Billboard.json","title":"Billboard","description":"A billboard, or viewport-aligned image. The billboard is positioned in the scene by the `position` property. A billboard is sometimes called a marker.","type":"object","czmlExamples":["Examples/Billboard.json"],"properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the billboard is shown.","default":true},"image":{"$ref":"Uri.json","description":"The URI of the image displayed on the billboard. For broadest client compatibility, the URI should be accessible via Cross-Origin Resource Sharing (CORS). The URI may also be a <a href=\\"https://developer.mozilla.org/en/data_URIs\\">data URI</a>.","czmlRequiredForDisplay":true},"scale":{"$ref":"Double.json","description":"The scale of the billboard. The scale is multiplied with the pixel size of the billboard\'s `image`. For example, if the scale is 2.0, the billboard will be rendered with twice the number of pixels, in each direction, of the `image`.","default":1},"pixelOffset":{"$ref":"PixelOffset.json","description":"The offset, in viewport pixels, of the billboard origin from the `position`. A pixel offset is the number of pixels up and to the right to place the billboard, relative to the `position`.","default":"[0.0, 0.0]"},"eyeOffset":{"$ref":"EyeOffset.json","description":"The eye offset of the billboard, which is the offset in eye coordinates at which to place the billboard relative to the `position` property. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer\'s right, the Y-axis points up, and the Z-axis points into the screen.","default":"[0.0, 0.0, 0.0]"},"horizontalOrigin":{"$ref":"HorizontalOrigin.json","description":"The horizontal origin of the billboard, which determines whether the billboard image is left-, center-, or right-aligned with the `position`.","default":"CENTER"},"verticalOrigin":{"$ref":"VerticalOrigin.json","description":"The vertical origin of the billboard, which determines whether the billboard image is bottom-, center-, or top-aligned with the `position`.","default":"CENTER"},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the billboard, which indicates if the position is relative to terrain or not.","default":"NONE"},"color":{"$ref":"Color.json","description":"The color of the billboard. This color value is multiplied with the values of the billboard\'s `image` to produce the final color.","default":{"rgba":[255,255,255,255]}},"rotation":{"$ref":"Double.json","description":"The rotation of the billboard, in radians, counter-clockwise from the alignedAxis.","default":0},"alignedAxis":{"$ref":"AlignedAxis.json","description":"The aligned axis is the unit vector, in world coordinates, that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector."},"sizeInMeters":{"$ref":"Boolean.json","description":"Whether this billboard\'s size (`width` and `height`) should be measured in meters, otherwise size is measured in pixels.","default":false},"width":{"$ref":"Double.json","description":"The width of the billboard, in pixels (or meters, if `sizeInMeters` is true). By default, the native width of the image is used."},"height":{"$ref":"Double.json","description":"The height of the billboard, in pixels (or meters, if `sizeInMeters` is true). By default, the native height of the image is used."},"scaleByDistance":{"$ref":"NearFarScalar.json","description":"How the billboard\'s scale should change based on the billboard\'s distance from the camera. This scalar value will be multiplied by `scale`."},"translucencyByDistance":{"$ref":"NearFarScalar.json","description":"How the billboard\'s translucency should change based on the billboard\'s distance from the camera. This scalar value should range from 0 to 1."},"pixelOffsetScaleByDistance":{"$ref":"NearFarScalar.json","description":"How the billboard\'s pixel offset should change based on the billboard\'s distance from the camera. This scalar value will be multiplied by `pixelOffset`."},"imageSubRegion":{"$ref":"BoundingRectangle.json","description":"A sub-region of the image which will be used for the billboard, rather than the entire image, measured in pixels from the bottom-left."},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying the distance from the camera at which this billboard will be displayed."},"disableDepthTestDistance":{"$ref":"Double.json","description":"The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied.","default":0}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Label.json
var Label_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Label.json","title":"Label","description":"A string of text.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the label is shown.","default":true},"text":{"$ref":"String.json","description":"The text displayed by the label. The newline character (\\\\n) indicates line breaks."},"font":{"$ref":"Font.json","description":"The font to use for the label.","default":"30px sans-serif"},"style":{"$ref":"LabelStyle.json","description":"The style of the label.","default":"FILL"},"scale":{"$ref":"Double.json","description":"The scale of the label. The scale is multiplied with the pixel size of the label\'s text. For example, if the scale is 2.0, the label will be rendered with twice the number of pixels, in each direction, of the text.","default":1},"showBackground":{"$ref":"Boolean.json","description":"Whether or not a background behind the label is shown.","default":false},"backgroundColor":{"$ref":"Color.json","description":"The color of the background behind the label.","default":"[0.165, 0.165, 0.165, 0.8]"},"backgroundPadding":{"$ref":"BackgroundPadding.json","description":"The amount of padding between the text and the label\'s background.","default":"[7, 5]"},"pixelOffset":{"$ref":"PixelOffset.json","description":"The offset, in viewport pixels, of the label origin from the `position`. A pixel offset is the number of pixels up and to the right to place the label, relative to the `position`.","default":"[0.0, 0.0]"},"eyeOffset":{"$ref":"EyeOffset.json","description":"The eye offset of the label, which is the offset in eye coordinates at which to place the label relative to the `position` property. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer\'s right, the Y-axis points up, and the Z-axis points into the screen.","default":"[0.0, 0.0, 0.0]"},"horizontalOrigin":{"$ref":"HorizontalOrigin.json","description":"The horizontal origin of the label. It controls whether the label is left-, center-, or right-aligned with the `position`.","default":"CENTER"},"verticalOrigin":{"$ref":"VerticalOrigin.json","description":"The vertical origin of the label. It controls whether the label image is bottom-, center-, or top-aligned with the `position`.","default":"CENTER"},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the label, which indicates if the position is relative to terrain or not.","default":"NONE"},"fillColor":{"$ref":"Color.json","description":"The fill color of the label.","default":"white"},"outlineColor":{"$ref":"Color.json","description":"The outline color of the label.","default":"black"},"outlineWidth":{"$ref":"Double.json","description":"The outline width of the label.","default":1},"translucencyByDistance":{"$ref":"NearFarScalar.json","description":"How the label\'s translucency should change based on the label\'s distance from the camera. This scalar value should range from 0 to 1."},"pixelOffsetScaleByDistance":{"$ref":"NearFarScalar.json","description":"How the label\'s pixel offset should change based on the label\'s distance from the camera. This scalar value will be multiplied by `pixelOffset`."},"scaleByDistance":{"$ref":"NearFarScalar.json","description":"How the label\'s scale should change based on the label\'s distance from the camera. This scalar value will be multiplied by `scale`."},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying the distance from the camera at which this label will be displayed."},"disableDepthTestDistance":{"$ref":"Double.json","description":"The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied.","default":0}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Clock.json
var Clock_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Clock.json","title":"Clock","description":"Initial settings for a simulated clock when a document is loaded. The start and stop time are configured using the interval property.","type":"object","czmlExamples":["Examples/Clock.json"],"properties":{"currentTime":{"$ref":"Values/TimeValue.json","description":"The current time, specified in ISO8601 format."},"multiplier":{"description":"The multiplier. When `step` is set to `TICK_DEPENDENT`, this is the number of seconds to advance each tick. When `step` is set to `SYSTEM_CLOCK_DEPENDENT`, this is multiplied by the elapsed system time between ticks. This value is ignored in `SYSTEM_CLOCK` mode.","type":"number","default":1},"interval":{"$ref":"IntervalTimeValue.json","type":"string","description":"startISOTime/endISOTime 2023-01-01T00:00:00Z/2023-01-01T00:10:00Z"},"range":{"$ref":"Values/ClockRangeValue.json","description":"The behavior when the current time reaches its start or end times.","default":"LOOP_STOP"},"step":{"$ref":"Values/ClockStepValue.json","description":"How the current time advances each tick.","default":"SYSTEM_CLOCK_MULTIPLIER"}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Polygon.json
var Polygon_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Polygon.json","title":"Polygon","description":"A polygon, which is a closed figure on the surface of the Earth.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the polygon is shown.","default":true},"positions":{"$ref":"PositionList.json","description":"The array of positions defining a simple polygon.","czmlRequiredForDisplay":true},"holes":{"$ref":"PositionListOfLists.json","description":"The array of arrays of positions defining holes in the polygon."},"arcType":{"$ref":"ArcType.json","description":"The type of arc that should connect the positions of the polygon.","default":"GEODESIC"},"height":{"$ref":"Double.json","description":"The height of the polygon when `perPositionHeight` is false.","default":0},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the polygon, which indicates if `height` is relative to terrain or not.","default":"NONE"},"extrudedHeight":{"$ref":"Double.json","description":"The extruded height of the polygon."},"extrudedHeightReference":{"$ref":"HeightReference.json","description":"The extruded height reference of the polygon, which indicates if `extrudedHeight` is relative to terrain or not.","default":"NONE"},"stRotation":{"$ref":"Double.json","description":"The rotation of any applied texture. A positive rotation is counter-clockwise.","default":0},"granularity":{"$ref":"Double.json","description":"The sampling distance, in radians.","default":"π / 180.0"},"fill":{"$ref":"Boolean.json","description":"Whether or not the polygon is filled.","default":true},"material":{"$ref":"Material.json","description":"The material to use to fill the polygon.","default":"solid white"},"outline":{"$ref":"Boolean.json","description":"Whether or not the polygon is outlined.","default":false},"outlineColor":{"$ref":"Color.json","description":"The color of the polygon outline.","default":"black"},"outlineWidth":{"$ref":"Double.json","description":"The width of the polygon outline.","default":1},"perPositionHeight":{"$ref":"Boolean.json","description":"Whether to use the height of each position to define the polygon or to use `height` as a constant height above the surface.","default":false},"closeTop":{"$ref":"Boolean.json","description":"Whether to close the top of the polygon.","default":true},"closeBottom":{"$ref":"Boolean.json","description":"Whether to close the bottom of the polygon.","default":true},"shadows":{"$ref":"ShadowMode.json","description":"Whether or not the polygon casts or receives shadows.","default":"DISABLED"},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying the distance from the camera at which this polygon will be displayed."},"classificationType":{"$ref":"ClassificationType.json","description":"Whether a classification affects terrain, 3D Tiles, or both.","default":"BOTH"},"zIndex":{"$ref":"Integer.json","description":"The z-index of the polygon, used for ordering ground geometry. Only has an effect if the polygon is constant, and `height` and `extrudedHeight` are not specified.","default":"0"}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Polyline.json
var Polyline_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Polyline.json","title":"Polyline","description":"A polyline, which is a line in the scene composed of multiple segments.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the polyline is shown.","default":true},"positions":{"$ref":"PositionList.json","description":"The array of positions defining the polyline as a line strip.","czmlRequiredForDisplay":true},"arcType":{"$ref":"ArcType.json","description":"The type of arc that should connect the positions of the polyline.","default":"GEODESIC"},"width":{"$ref":"Double.json","description":"The width of the polyline.","default":1},"granularity":{"$ref":"Double.json","description":"The sampling distance, in radians."},"material":{"$ref":"PolylineMaterial.json","description":"The material to use to draw the polyline.","default":{"solidColor":{"color":{"rgba":[255,255,255,255]}}}},"shadows":{"$ref":"ShadowMode.json","description":"Whether or not the polyline casts or receives shadows."},"depthFailMaterial":{"$ref":"PolylineMaterial.json","description":"The material to use to draw the polyline when it is below the terrain."},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying at what distance from the camera this polyline will be displayed."},"clampToGround":{"$ref":"Boolean.json","description":"Whether or not the polyline should be clamped to the ground.","default":false},"classificationType":{"$ref":"ClassificationType.json","description":"Whether a classification affects terrain, 3D Tiles, or both."},"zIndex":{"$ref":"Integer.json","description":"The z-index of the polyline, used for ordering ground geometry. Only has an effect if the polyline is constant, and `clampToGround` is true."}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Rectangle.json
var Rectangle_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Rectangle.json","title":"Rectangle","description":"A cartographic rectangle, which conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the rectangle is shown.","default":true},"coordinates":{"$ref":"RectangleCoordinates.json","description":"The coordinates of the rectangle.","czmlRequiredForDisplay":true},"height":{"$ref":"Double.json","description":"The height of the rectangle.","default":0},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the rectangle, which indicates if `height` is relative to terrain or not.","default":"NONE"},"extrudedHeight":{"$ref":"Double.json","description":"The extruded height of the rectangle."},"extrudedHeightReference":{"$ref":"HeightReference.json","description":"The extruded height reference of the rectangle, which indicates if `extrudedHeight` is relative to terrain or not.","default":"NONE"},"rotation":{"$ref":"Double.json","description":"The rotation of the rectangle clockwise from north.","default":0},"stRotation":{"$ref":"Double.json","description":"The rotation of any applied texture. A positive rotation is counter-clockwise.","default":0},"granularity":{"$ref":"Double.json","description":"The sampling distance, in radians.","default":"π / 180.0"},"fill":{"$ref":"Boolean.json","description":"Whether or not the rectangle is filled.","default":true},"material":{"$ref":"Material.json","description":"The material to display on the surface of the rectangle.","default":"solid white"},"outline":{"$ref":"Boolean.json","description":"Whether or not the rectangle is outlined.","default":false},"outlineColor":{"$ref":"Color.json","description":"The color of the rectangle outline.","default":"black"},"outlineWidth":{"$ref":"Double.json","description":"The width of the rectangle outline.","default":1},"shadows":{"$ref":"ShadowMode.json","description":"Whether or not the rectangle casts or receives shadows.","default":"DISABLED"},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying at what distance from the camera this rectangle will be displayed."},"classificationType":{"$ref":"ClassificationType.json","description":"Whether a classification affects terrain, 3D Tiles, or both.","default":"BOTH"},"zIndex":{"$ref":"Integer.json","description":"The z-index of the rectangle, used for ordering ground geometry. Only has an effect if the rectangle is constant, and `height` and `extrudedHeight` are not specified.","default":"0"}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Point.json
var Point_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Point.json","title":"Point","description":"A point, or viewport-aligned circle.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the point is shown.","default":true},"pixelSize":{"$ref":"Double.json","description":"The size of the point, in pixels.","default":1},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the point, which indicates if the position is relative to terrain or not.","default":"NONE"},"color":{"$ref":"Color.json","description":"The color of the point.","default":"white"},"outlineColor":{"$ref":"Color.json","description":"The color of the outline of the point.","default":"black"},"outlineWidth":{"$ref":"Double.json","description":"The width of the outline of the point.","default":0},"scaleByDistance":{"$ref":"NearFarScalar.json","description":"How the point\'s scale should change based on the point\'s distance from the camera. This scalar value will be multiplied by `pixelSize`."},"translucencyByDistance":{"$ref":"NearFarScalar.json","description":"How the point\'s translucency should change based on the point\'s distance from the camera. This scalar value should range from 0 to 1."},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying the distance from the camera at which this point will be displayed."},"disableDepthTestDistance":{"$ref":"Double.json","description":"The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied.","default":0}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Model.json
var Model_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Model.json","title":"Model","description":"A 3D model.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the model is shown.","default":true},"gltf":{"$ref":"Uri.json","description":"The URI of a <a href=\\"https://github.com/KhronosGroup/glTF\\">glTF</a> model. For broadest client compatibility, the URI should be accessible via Cross-Origin Resource Sharing (CORS). The URI may also be a <a href=\\"https://developer.mozilla.org/en/data_URIs\\">data URI</a>.","czmlRequiredForDisplay":true},"scale":{"$ref":"Double.json","description":"The scale of the model.","default":1},"minimumPixelSize":{"$ref":"Double.json","description":"The approximate minimum pixel size of the model regardless of zoom.","default":0},"maximumScale":{"$ref":"Double.json","description":"The maximum scale size of the model. This is used as an upper limit for `minimumPixelSize`."},"incrementallyLoadTextures":{"$ref":"Boolean.json","description":"Whether or not the model can be rendered before all textures have loaded.","default":true},"runAnimations":{"$ref":"Boolean.json","description":"Whether or not to run all animations defined in the glTF model.","default":true},"shadows":{"$ref":"ShadowMode.json","description":"Whether or not the model casts or receives shadows.","default":"ENABLED"},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the model, which indicates if the position is relative to terrain or not.","default":"NONE"},"silhouetteColor":{"$ref":"Color.json","description":"The color of the silhouette drawn around the model."},"silhouetteSize":{"$ref":"Double.json","description":"The size, in pixels, of the silhouette drawn around the model.","default":0},"color":{"$ref":"Color.json","description":"The color to blend with the model\'s rendered color."},"colorBlendMode":{"$ref":"ColorBlendMode.json","description":"The mode to use for blending between `color` and the model\'s color.","default":"HIGHLIGHT"},"colorBlendAmount":{"$ref":"Double.json","description":"The color strength when `colorBlendMode` is `MIX`. A value of 0.0 results in the model\'s rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.","default":0.5},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying at what distance from the camera this model will be displayed."},"nodeTransformations":{"$ref":"NodeTransformations.json","czmlExamples":["Examples/ModelNodeTransformations.json"]},"articulations":{"$ref":"Articulations.json","czmlExamples":["Examples/ModelArticulations.json"]}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Packet.json
var Packet_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Packet.json","title":"Packet","description":"Describes the graphical properties of a single object in a scene, such as a single aircraft.","type":"object","czmlExamples":["Examples/Packet.json","Examples/DocumentPacket.json","Examples/DeletePacket.json"],"properties":{"id":{"description":"The ID of the object described by this packet. IDs do not need to be GUIDs, but they do need to uniquely identify a single object within a CZML source and any other CZML sources loaded into the same scope. If this property is not specified, the client will automatically generate a unique one. However, this prevents later packets from referring to this object in order to add more data to it.","type":"string"},"delete":{"description":"Whether the client should delete all existing data for this object, identified by ID. If true, all other properties in this packet will be ignored.","type":"boolean"},"name":{"description":"The name of the object. It does not have to be unique and is intended for user consumption.","type":"string"},"parent":{"description":"The ID of the parent object, if any.","type":"string"},"description":{"$ref":"String.json","description":"An HTML description of the object."},"clock":{"$ref":"Clock.json","description":"The clock settings for the entire data set. Only valid on the document object."},"version":{"description":"The CZML version being written. Only valid on the document object.","type":"string"},"availability":{"$ref":"Values/TimeIntervalCollectionValue.json","description":"The set of time intervals over which data for an object is available. The property can be a single string specifying a single interval, or an array of strings representing intervals. A later CZML packet can update this availability if it changes or is found to be incorrect. For example, an SGP4 propagator may initially report availability for all time, but then later the propagator throws an exception and the availability can be adjusted to end at that time. If this optional property is not present, the object is assumed to be available for all time. Availability is scoped to a particular CZML stream, so two different streams can list different availability for a single object. Within a single stream, the last availability stated for an object is the one in effect and any availabilities in previous packets are ignored. If an object is not available at a time, the client will not draw that object.","default":"0000-00-00T00:00:00Z/9999-12-31T24:00:00Z"},"properties":{"$ref":"CustomProperties.json","description":"A set of custom properties for this object."},"position":{"$ref":"Position.json","description":"The position of the object in the world. The position has no direct visual representation, but it is used to locate billboards, labels, and other graphical items attached to the object.","czmlExamples":["Examples/SimplePosition.json","Examples/TimeVaryingPosition.json"]},"orientation":{"$ref":"Orientation.json","description":"The orientation of the object in the world. The orientation has no direct visual representation, but it is used to orient models, cones, pyramids, and other graphical items attached to the object."},"viewFrom":{"$ref":"ViewFrom.json","description":"A suggested camera location when viewing this object. The property is specified as a Cartesian position in the East (x), North (y), Up (z) reference frame relative to the object\'s position."},"billboard":{"$ref":"Billboard.json","description":"A billboard, or viewport-aligned image, sometimes called a marker. The billboard is positioned in the scene by the `position` property."},"box":{"$ref":"Box.json","description":"A box, which is a closed rectangular cuboid. The box is positioned and oriented using the `position` and `orientation` properties."},"corridor":{"$ref":"Corridor.json","description":"A corridor, which is a shape defined by a centerline and width."},"cylinder":{"$ref":"Cylinder.json","description":"A cylinder, truncated cone, or cone defined by a length, top radius, and bottom radius. The cylinder is positioned and oriented using the `position` and `orientation` properties."},"ellipse":{"$ref":"Ellipse.json","description":"An ellipse, which is a closed curve on the surface of the Earth. The ellipse is positioned using the `position` property."},"ellipsoid":{"$ref":"Ellipsoid.json","description":"An ellipsoid, which is a closed quadric surface that is a three-dimensional analogue of an ellipse. The ellipsoid is positioned and oriented using the `position` and `orientation` properties."},"label":{"$ref":"Label.json","description":"A string of text. The label is positioned in the scene by the `position` property."},"model":{"$ref":"Model.json","description":"A 3D model. The model is positioned and oriented using the `position` and `orientation` properties."},"path":{"$ref":"Path.json","description":"A path, which is a polyline defined by the motion of an object over time. The possible vertices of the path are specified by the `position` property."},"point":{"$ref":"Point.json","description":"A point, or viewport-aligned circle. The point is positioned in the scene by the `position` property."},"polygon":{"$ref":"Polygon.json","description":"A polygon, which is a closed figure on the surface of the Earth."},"polyline":{"$ref":"Polyline.json","description":"A polyline, which is a line in the scene composed of multiple segments."},"polylineVolume":{"$ref":"PolylineVolume.json","description":"A polyline with a volume, defined as a 2D shape extruded along a polyline."},"rectangle":{"$ref":"Rectangle.json","description":"A cartographic rectangle, which conforms to the curvature of the globe and can be placed along the surface or at altitude."},"tileset":{"$ref":"Tileset.json","description":"A 3D Tiles tileset."},"wall":{"$ref":"Wall.json","description":"A two-dimensional wall which conforms to the curvature of the globe and can be placed along the surface or at altitude."},"agi_conicSensor":{"$ref":"Extensions/AGI/ConicSensor.json","description":"A conical sensor volume taking into account occlusion of an ellipsoid, i.e., the globe. The sensor is positioned and oriented using the `position` and `orientation` properties."},"agi_customPatternSensor":{"$ref":"Extensions/AGI/CustomPatternSensor.json","description":"A custom sensor volume taking into account occlusion of an ellipsoid, i.e., the globe. The sensor is positioned and oriented using the `position` and `orientation` properties."},"agi_rectangularSensor":{"$ref":"Extensions/AGI/RectangularSensor.json","description":"A rectangular pyramid sensor volume taking into account occlusion of an ellipsoid, i.e., the globe. The sensor is positioned and oriented using the `position` and `orientation` properties."},"agi_fan":{"$ref":"Extensions/AGI/Fan.json","description":"Defines a fan, which starts at a point or apex and extends in a specified list of directions from the apex. Each pair of directions forms a face of the fan extending to the specified radius. The fan is positioned and oriented using the `position` and `orientation` properties."},"agi_vector":{"$ref":"Extensions/AGI/Vector.json","description":"Defines a graphical vector that originates at the `position` property and extends in the provided direction for the provided length. The vector is positioned using the `position` property."}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Position.json
var Position_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Position.json","title":"Position","description":"Defines a position. The position can optionally vary over time.","allOf":[{"$ref":"InterpolatableProperty.json"},{"$ref":"DeletableProperty.json"},{"$ref":"ValueProperties/Cartesian3ValueProperty.json"},{"$ref":"ValueProperties/CartographicRadiansValueProperty.json"},{"$ref":"ValueProperties/CartographicDegreesValueProperty.json"},{"$ref":"ValueProperties/Cartesian3VelocityValueProperty.json"},{"$ref":"ValueProperties/ReferenceValueProperty.json"}],"type":"object","properties":{"epoch":{"$ref":"Values/TimeValue.json","description":"The current time, specified in ISO8601 format."},"referenceFrame":{"description":"The reference frame in which cartesian positions are specified. Possible values are \\"FIXED\\" and \\"INERTIAL\\".","type":"string","default":"FIXED"},"cartesian":{"$ref":"Values/Cartesian3Value.json","description":"The position specified as a three-dimensional Cartesian value, `[X, Y, Z]`, in meters relative to the `referenceFrame`."},"cartographicRadians":{"$ref":"Values/CartographicRadiansValue.json","description":"The position specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height]`, where Longitude and Latitude are in radians and Height is in meters.","czmlExamples":["Examples/PositionCartographicRadians.json"]},"cartographicDegrees":{"$ref":"Values/CartographicDegreesValue.json","description":"The position specified in Cartographic WGS84 coordinates, `[Longitude, Latitude, Height]`, where Longitude and Latitude are in degrees and Height is in meters.","czmlExamples":["Examples/PositionCartographicDegrees.json"]}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Path.json
var Path_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Path.json","title":"Path","description":"A path, which is a polyline defined by the motion of an object over time. The possible vertices of the path are specified by the `position` property. Note that because clients cannot render a truly infinite path, the path must be limited, either by defining availability for this object, or by using the `leadTime` and `trailTime` properties.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the path is shown.","default":true},"leadTime":{"$ref":"Double.json","description":"The time ahead of the animation time, in seconds, to show the path. The time will be limited to not exceed the object\'s availability. By default, the value is unlimited, which effectively results in drawing the entire available path of the object."},"trailTime":{"$ref":"Double.json","description":"The time behind the animation time, in seconds, to show the path. The time will be limited to not exceed the object\'s availability. By default, the value is unlimited, which effectively results in drawing the entire available path of the object."},"width":{"$ref":"Double.json","description":"The width of the path line.","default":1},"resolution":{"$ref":"Double.json","description":"The maximum step-size, in seconds, used to sample the path. If the `position` property has data points farther apart than resolution specifies, additional samples will be computed, creating a smoother path.","default":60},"material":{"$ref":"PolylineMaterial.json","description":"The material to use to draw the path.","default":"solid white"},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying at what distance from the camera this path will be displayed."}}}');
;// CONCATENATED MODULE: ./src/utils/CZMLRJSFAdaptor.ts












var BaseJSONSchemaObj = {
  billboard: Billboard_namespaceObject,
  label: Label_namespaceObject,
  polygon: Polygon_namespaceObject,
  polyline: Polyline_namespaceObject,
  point: Point_namespaceObject,
  packet: Packet_namespaceObject,
  model: Model_namespaceObject,
  clock: Clock_namespaceObject,
  rectangle: Rectangle_namespaceObject,
  position: Position_namespaceObject,
  path: Path_namespaceObject
};
var validPacketKeys = Object.keys(BaseJSONSchemaObj.packet.properties);
var validBillboardKeys = Object.keys(BaseJSONSchemaObj.billboard.properties);
var validLabelKeys = Object.keys(BaseJSONSchemaObj.label.properties);
var validPolygonKeys = Object.keys(BaseJSONSchemaObj.polygon.properties);
var validPolylineKeys = Object.keys(BaseJSONSchemaObj.polyline.properties);
var editableKeysInPacketSchema = ["billboard", "label", "polygon", "polyline", "point", "rectangle", "clock", "model", "position", "path"];

// console.log('validPacketKeys', validPacketKeys);
// console.log('validBillboardKeys', validBillboardKeys);
// console.log('validLabelKeys', validLabelKeys);
// console.log('validPolygonKeys', validPolygonKeys);
// console.log('validPolylineKeys', validPolylineKeys);

var czmlSchemaTypeKeymap = {
  'Boolean.json': {
    type: 'boolean',
    "enum": [true, false]
  },
  'String.json': {
    type: 'string'
  },
  'Font.json': {
    type: 'string',
    examples: ["10pt sans-serif", "12pt Lucida Console", "bold italic 20px Georgia"]
  },
  "IntervalTimeValue.json": {
    type: 'string',
    description: "startISOTime/endISOTime 2023-01-01T00:00:00Z/2023-01-01T00:10:00Z",
    "default": "",
    format: 'double_date_time_picker'
  },
  "Values_TimeValue.json": {
    type: 'string',
    format: 'date-time',
    "default": '2019-01-01T00:00:00Z'
  },
  "Values_ClockRangeValue.json": {
    type: 'string',
    "enum": ['LOOP_STOP', 'UNBOUNDED', 'CLAMPED'],
    enumNames: ['循环停止', '无限循环', '限制循环'],
    "default": 'LOOP_STOP'
  },
  "Values_ClockStepValue.json": {
    type: 'string',
    "enum": ['SYSTEM_CLOCK', 'SYSTEM_CLOCK_MULTIPLIER', 'TICK_DEPENDENT'],
    enumNames: ['系统时钟', '系统时钟乘数', '依赖于时钟'],
    "default": 'SYSTEM_CLOCK'
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
      type: "number"
    }
    // format: 'Cartesian3_value',
  },

  "Values_CartographicDegreesValue.json": {
    type: 'array',
    format: 'cartographicDegree_value',
    items: {
      type: "number"
    }
    // format: 'Cartesian3_value',
  },

  'BackgroundPadding.json': {
    type: 'object',
    properties: {
      cartesian2: {
        type: 'array',
        items: [{
          type: "number",
          description: " offsetX",
          "default": 7
        }, {
          "type": "number",
          description: " offsetY ",
          "default": 5
        }],
        additionalItems: false
      }
    }
  },
  'PositionList.json': {
    oneOf: [{
      type: "object",
      title: ' Longitude, Latitude, Height in radians',
      properties: {
        cartographicRadians: {
          type: 'array',
          items: {
            type: "number",
            description: " Longitude, Latitude, Height in radians",
            "default": 0
          },
          minItems: 9
        }
      }
    }, {
      type: "object",
      title: ' Longitude, Latitude, Height in degrees',
      properties: {
        cartographicDegrees: {
          type: 'array',
          items: {
            type: "number",
            description: " Longitude, Latitude, Height in degrees",
            "default": 0
          },
          minItems: 9
        }
      }
    }, {
      type: "object",
      title: 'X, Y, Z in cartesian coordinates',
      properties: {
        cartesian: {
          type: 'array',
          items: {
            type: "number",
            description: " X, Y, Z",
            "default": 0
          },
          minItems: 9
        }
      }
    }]
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
    oneOf: [{
      type: 'null',
      description: 'undefined',
      title: '未设置'
    }, {
      type: "array",
      title: ' Longitude, Latitude, Height in radians',
      items: {
        type: 'array',
        items: [{
          type: "number",
          description: " Longitude in radians",
          "default": 0
        }, {
          type: "number",
          description: " Latitude in radians",
          "default": 0
        }, {
          type: "number",
          description: "  Height in meters",
          "default": 0
        }],
        additionalItems: false
      }
    }, {
      type: "array",
      title: ' Longitude, Latitude, Height in degrees',
      items: {
        type: 'array',
        items: [{
          type: "number",
          description: " Longitude, Latitude, Height in radians",
          "default": 0
        }, {
          type: "number",
          description: " Longitude, Latitude, Height in radians",
          "default": 0
        }, {
          type: "number",
          description: " Longitude, Latitude, Height in radians",
          "default": 0
        }],
        additionalItems: false
      }
    }, {
      type: "array",
      title: 'X, Y, Z in cartesian coordinates',
      items: {
        type: 'array',
        items: [{
          type: "number",
          description: " Longitude, Latitude, Height in radians",
          "default": 0
        }, {
          type: "number",
          description: " Longitude, Latitude, Height in radians",
          "default": 0
        }, {
          type: "number",
          description: " Longitude, Latitude, Height in radians",
          "default": 0
        }],
        additionalItems: false
      }
    }]
  },
  'PixelOffset.json': {
    oneOf: [{
      type: 'null',
      title: 'undefined'
    }, {
      type: 'object',
      properties: {
        "cartesian2": {
          type: 'array',
          items: [{
            type: "number",
            description: " offsetX ",
            "default": 0
          }, {
            "type": "number",
            description: " offsetY",
            "default": 0
          }],
          additionalItems: false
        }
      }
    }]
  },
  'AlignedAxis.json': {
    oneOf: [{
      type: 'null',
      title: 'undefined',
      "default": undefined
    }, {
      type: 'object',
      title: ' Axis ',
      properties: {
        "cartesian": {
          type: 'array',
          items: [{
            type: "number",
            description: " X axis",
            "default": 0.0
          }, {
            "type": "number",
            description: " Y axis",
            "default": 1.0
          }, {
            "type": "number",
            description: " Z axis",
            "default": 0.0
          }],
          additionalItems: false,
          "default": [0.0, 1.0, 0.0]
        }
      }
    }]
  },
  'EyeOffset.json': {
    oneOf: [{
      type: 'null',
      title: 'undefined'
    }, {
      type: 'object',
      properties: {
        "cartesian": {
          type: 'array',
          items: [{
            type: "number",
            description: " offsetX",
            "default": 0
          }, {
            "type": "number",
            description: " offsetY",
            "default": 0
          }, {
            "type": "number",
            description: " offsetZ",
            "default": 0
          }],
          additionalItems: false
        },
        "default": [0.0, 0.0, 0.0]
      }
    }]
  },
  'NearFarScalar.json': {
    oneOf: [{
      type: 'null',
      title: '未设置',
      "enum": ['null']
    }, {
      type: 'object',
      description: 'when at near distance, the value is nearValue, when at far distance, the value is farValue',
      title: '[near, nearValue, far, farValue]  NearFarScalar',
      properties: {
        "nearFarScalar": {
          type: 'array',
          items: [{
            type: "number",
            description: " near distance",
            "default": 1
          }, {
            "type": "number",
            description: " near value",
            "default": 0.1
          }, {
            "type": "number",
            description: " far distance",
            "default": 100
          }, {
            "type": "number",
            description: " far value",
            "default": 1.0
          }],
          additionalItems: false
        }
      }
    }]
  },
  'Color.json': {
    // oneOf 存在很多问题 先简化成 rgba 格式
    "oneOf": [{
      "type": "null",
      "title": "undefined"
    }, {
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
      "default": {
        rgba: [255, 255, 255, 128]
      }
    }, {
      "type": "object",
      "description": "A color. The color can optionally vary over time.",
      "properties": {
        "rgbaf": {
          "type": "array",
          "items": {
            "type": "number",
            "minimum": 0,
            "maximum": 1
          },
          "minItems": 4,
          "maxItems": 4,
          format: 'color_rgbaf',
          "title": "RGBAF Color"
        }
      },
      "title": "RGBAF Color 0~1",
      "required": ["rgbaf"],
      "default": {
        rgbaf: [1.0, 0.0, 0.0, 0.5]
      }
    }]
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
        "enum": ['HIGHLIGHT', 'MIX', 'REPLACE'],
        enumNames: ['高亮', '混合', '替换'],
        "default": 'MIX'
      },
      required: ['colorBlendMode']
    }
  },
  'Translation.json': {
    type: 'object',
    properties: {
      "cartesian": {
        type: 'array',
        items: {
          type: 'number',
          "default": 0
        },
        minItems: 3,
        maxItems: 3,
        "default": [0, 0, 0],
        additionalItems: false
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
          "default": 0
        },
        minItems: 3,
        maxItems: 3,
        "default": [0, 0, 0],
        additionalItems: false
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
          "default": 0
        },
        minItems: 4,
        maxItems: 4,
        "default": [0, 0, 0, 0],
        additionalItems: false
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
      "description": "Transformations to apply to a particular node in a 3D model."
    }
  },
  'Articulation.json': {
    "type": "object",
    "properties": {
      number: {
        type: 'number',
        "default": 1.0
      }
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
    type: 'number'
  },
  'HorizontalOrigin.json': {
    type: 'string',
    "enum": ['CENTER', 'LEFT', 'RIGHT'],
    enumNames: ['居中', '左对齐', '右对齐'],
    "default": 'CENTER'
  },
  'VerticalOrigin.json': {
    type: 'string',
    "enum": ['CENTER', 'BOTTOM', 'TOP'],
    enumNames: ['居中', '下对齐', '上对齐'],
    "default": 'CENTER'
  },
  'HeightReference.json': {
    type: 'string',
    "enum": ['NONE', 'CLAMP_TO_GROUND', 'RELATIVE_TO_GROUND'],
    enumNames: ['无高度', '贴地模式', '相对地面高度'],
    "default": 'NONE'
  },
  'Number.json': {
    type: 'number'
  },
  'Layer.json': {
    type: 'string',
    "enum": ['TERRAIN', 'COLUMBUS_VIEW', '3D_TILES'],
    enumNames: ['地形模式', '哥伦布视图模式', '3D瓦片模式'],
    "default": 'TERRAIN'
  },
  'LabelStyle.json': {
    type: 'string',
    "enum": ['FILL', 'OUTLINE', 'FILL_AND_OUTLINE'],
    enumNames: ['填充', '轮廓', '填充和轮廓'],
    "default": 'FILL'
  },
  'ArcType.json': {
    type: 'string',
    "enum": ['GEODESIC', 'RHUMB'],
    enumNames: ['大圆弧', '等角弧']
  },
  'ShadowMode.json': {
    type: 'string',
    "enum": ['DISABLED', 'ENABLED', 'CAST_ONLY', 'RECEIVE_ONLY'],
    enumNames: ['全关闭', '全开启', '仅投射阴影', '仅接受阴影']
  },
  'ClassificationType.json': {
    type: 'string',
    "enum": ['NONE', 'TERRAIN', 'CESIUM_3D_TILE', 'BOTH'],
    enumNames: ['无', '地形', '3D瓦片', '地形和3D瓦片'],
    "default": 'NONE'
  },
  'Integer.json': {
    type: 'number'
  },
  'DistanceDisplayCondition.json': {
    anyOf: [{
      "type": "null",
      "title": "Undefined"
    }, {
      "type": "object",
      "title": " [near, far] DistanceDisplayCondition",
      "properties": {
        "distanceDisplayCondition": {
          type: 'array',
          items: {
            type: 'number'
          },
          "minItems": 2,
          "maxItems": 2,
          "default": [0.1, 1000]
        }
      }
    }]
  },
  "Repeat.json": {
    oneOf: [{
      type: "null",
      title: "Undefined"
    }, {
      "type": "object",
      "properties": {
        cartersian2: {
          type: 'array',
          items: {
            type: 'number'
          },
          "minItems": 2,
          "maxItems": 2,
          "default": [1.0, 1.0],
          additionalItems: false
        }
      }
    }]
  },
  "ImageMaterial.json": {
    "type": "object",
    "properties": {
      "image": {
        "$ref": "#/definitions/Uri.json",
        "description": "The image to display on the surface of the polygon."
      },
      "repeat": {
        "$ref": "#/definitions/Repeat.json",
        "description": "The number of times the image repeats in each direction."
      },
      "color": {
        "$ref": "#/definitions/Color.json",
        "description": "A color that blends with the image."
      },
      "transparent": {
        "type": "boolean",
        "description": "Whether the image has transparency. If true, an alpha texture is generated and the alpha channel of the image is ignored. If false, no alpha texture is generated and the alpha channel of the image is used.",
        "default": false
      }
    }
  },
  "StripeOrientation.json": {
    "type": "string",
    "enum": ["HORIZONTAL", "VERTICAL"],
    "enumNames": ["水平", "垂直"],
    "default": "HORIZONTAL"
  },
  'Material.json': {
    "oneOf": [{
      type: "null",
      title: "未设置"
    }, {
      "type": "object",
      "title": "Solid Color",
      "properties": {
        "solidColor": {
          "type": "object",
          "properties": {
            "color": {
              "$ref": "#/definitions/Color.json"
            }
          }
        }
      },
      required: ['solidColor'],
      additionalProperties: false
    }, {
      "type": "object",
      "title": "Image",
      "properties": {
        "image": {
          "type": "object",
          "$ref": "#/definitions/ImageMaterial.json"
        }
      }
    }, {
      "type": "object",
      "title": "Grid",
      "properties": {
        "grid": {
          "type": "object",
          "properties": {
            "color": {
              "$ref": "#/definitions/Color.json",
              "description": "The color of the surface.",
              "default": {
                rgba: [255, 255, 255, 255]
              }
            },
            "cellAlpha": {
              "$ref": "#/definitions/Double.json",
              "description": "The alpha value for the space between grid lines. This will be combined with the color alpha.",
              "default": 0.1
            },
            "lineCount": {
              "$ref": "#/definitions/Repeat.json",
              "description": "The number of grid lines along each axis."
            },
            "lineThickness": {
              "$ref": "#/definitions/Repeat.json",
              "description": "The thickness of grid lines along each axis, in pixels."
            },
            "lineOffset": {
              "$ref": "#/definitions/Repeat.json",
              "description": "The offset of grid lines along each axis, as a percentage from 0 to 1."
            }
          }
        }
      }
    }, {
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
              "default": {
                rgba: [255, 255, 255, 255]
              }
            },
            "oddColor": {
              "$ref": "#/definitions/Color.json",
              "description": "The color of the odd stripes.",
              "default": {
                rgba: [0, 0, 0, 255]
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
        required: ['offset', 'repeat', 'evenColor', 'oddColor', 'orientation']
      },
      "default": {
        stripe: {
          orientation: "HORIZONTAL",
          evenColor: {
            rgba: [255, 255, 255, 255]
          },
          oddColor: {
            rgba: [0, 0, 0, 255]
          },
          offset: 0.0,
          repeat: 10.0
        }
      },
      "required": ['stripe'],
      additionalProperties: false
    }, {
      "type": "object",
      "title": "Checkerboard",
      "properties": {
        "checkerboard": {
          "type": "object",
          properties: {
            "evenColor": {
              "$ref": "#/definitions/Color.json"
            },
            "oddColor": {
              "$ref": "#/definitions/Color.json"
            },
            "repeat": {
              oneOf: [{
                "type": "null"
              }, {
                "type": "number"
              }]
            },
            "required": ["evenColor", "oddColor"]
          }
        }
      },
      "required": ['checkerboard'],
      additionalProperties: false
    }]
  },
  'PolylineMaterial.json': {
    "oneOf": [{
      "type": "null",
      "title": "未设置"
    }, {
      "type": "object",
      "title": "Solid Color",
      "properties": {
        "solidColor": {
          "type": "object",
          "properties": {
            "color": {
              "$ref": "#/definitions/Color.json"
            }
          }
        }
      },
      required: ['solidColor'],
      additionalProperties: false
    }, {
      "type": "object",
      "title": "PolylineArrow",
      "properties": {
        "polylineArrow": {
          "type": "object",
          "properties": {
            "color": {
              "$ref": "#/definitions/Color.json",
              "description": "The color of the line.",
              "default": {
                rgba: [255, 255, 255, 255]
              }
            }
          }
        }
      }
    }, {
      "type": "object",
      "title": "PolylineGlow",
      "properties": {
        "polylineGlow": {
          "type": "object",
          "properties": {
            "color": {
              "$ref": "#/definitions/Color.json",
              "description": "The color of the line.",
              "default": {
                rgba: [255, 255, 255, 255]
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
      required: ['polylineGlow']
    }, {
      "type": "object",
      "title": "PolylineDash",
      "properties": {
        "polylineDash": {
          "type": "object",
          "properties": {
            "color": {
              "$ref": "#/definitions/Color.json",
              "description": "The color of the line.",
              "default": {
                rgba: [255, 255, 255, 255]
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
              "default": {
                rgba: [0, 0, 0, 0]
              }
            }
          }
        }
      }
    }, {
      "type": "object",
      "title": "Checkerboard",
      "properties": {
        "checkerboard": {
          "type": "object",
          properties: {
            "evenColor": {
              "$ref": "#/definitions/Color.json"
            },
            "oddColor": {
              "$ref": "#/definitions/Color.json"
            },
            "repeat": {
              oneOf: [{
                "type": "null"
              }, {
                "type": "number"
              }]
            },
            "required": ["evenColor", "oddColor"]
          }
        }
      },
      "required": ['checkerboard'],
      additionalProperties: false
    }]
  },
  'Uri.json': {
    oneOf: [{
      type: 'string',
      format: 'uri',
      title: 'Uri or dataUri',
      "default": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEX////////7+e7z7tbr4s708qbi1p/ez4vSvIP////Ir2bBoWLGq2XSvmvi13LFqGTe0XDNsmfPuWm9nGHs5oDaym/Yx27Vv5y/n2H079/VwmzQuZDp4nbl2nT//vvcz3DWxGzv6o7t6HjQu2rf03HDpGPv7HrbzHDPtmj69+/v6cHfzrXTvJj8+/f9+/X38+37+uz28ur6+OX28eH59tbw6dbz7dXu5s3w6rnv6rLZxp7j1pnSupPl3I3byo3h1nvm3XXKr2f7+d328tjw6cjr4cjp3r7dzLDg0K/s5afp4KbZxqbf0KHw7JncypXdz4vt6InUv4ff0YPOtYLr43nTvnf7+vL18tD498r18cfr4bvm27LbyanPt5jVv5Ln3oTez4PXw4LRvH7ZyHrEqHbKsnALRXLGAAAACXRSTlO/n7+/v7+/v78Ov8gXAAABoUlEQVQ4y33TaXvBQBAAYL3bSEIQRZMg7rTum6Koq64qet/H//8L3SukQefTzuyb58nuzhi2DNrYOdjf1uZw+2gZ6bLHxTBPUU3JoAGJK94OgM8yb68Dt0V3iIAw99nSA6lQM2sARU2yf8DDG8siMM49MgjQplfnAmS8FyICN5egFBlgEDCWkgg0hoKAQE2RyGFGGDgc/TgAgiDLAPgLmtNlJwhYrWcAzEK8KAu9BN6SCGlNjSAcENjMYdNHitSVr6qTLLs0bbQeI8CYXnDtrsK7fNwgiZJY3bQA9DmsNIasGQI60I+A1EnpgU0UWQDq4Pc6a4HXz/NmO8dZuMCpHpwgwHq4uo932znjJmC3WOkg6/oPOCjZvxHYlqCzFmQqKijFVwEKZQ5BOY2SiA6gkLqUt0nWbRXMVIC/I6+Vq3IAoNcUCJDgFolUmbEsQKZCgLewbG8PBs9x1HL5n298zPc8fMUi68aAtByoRfMSuahp9t4mYjBy6gfnGl4UHRQQGOdAZTOA7b0KUj0Caop+9NRoViEoxrTDqxv/3cM93fj/As6JT9HgmLyYAAAAAElFTkSuQmCC",
      examples: ["hospital.png", "location.png", "school.png", "camera.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEX////////7+e7z7tbr4s708qbi1p/ez4vSvIP////Ir2bBoWLGq2XSvmvi13LFqGTe0XDNsmfPuWm9nGHs5oDaym/Yx27Vv5y/n2H079/VwmzQuZDp4nbl2nT//vvcz3DWxGzv6o7t6HjQu2rf03HDpGPv7HrbzHDPtmj69+/v6cHfzrXTvJj8+/f9+/X38+37+uz28ur6+OX28eH59tbw6dbz7dXu5s3w6rnv6rLZxp7j1pnSupPl3I3byo3h1nvm3XXKr2f7+d328tjw6cjr4cjp3r7dzLDg0K/s5afp4KbZxqbf0KHw7JncypXdz4vt6InUv4ff0YPOtYLr43nTvnf7+vL18tD498r18cfr4bvm27LbyanPt5jVv5Ln3oTez4PXw4LRvH7ZyHrEqHbKsnALRXLGAAAACXRSTlO/n7+/v7+/v78Ov8gXAAABoUlEQVQ4y33TaXvBQBAAYL3bSEIQRZMg7rTum6Koq64qet/H//8L3SukQefTzuyb58nuzhi2DNrYOdjf1uZw+2gZ6bLHxTBPUU3JoAGJK94OgM8yb68Dt0V3iIAw99nSA6lQM2sARU2yf8DDG8siMM49MgjQplfnAmS8FyICN5egFBlgEDCWkgg0hoKAQE2RyGFGGDgc/TgAgiDLAPgLmtNlJwhYrWcAzEK8KAu9BN6SCGlNjSAcENjMYdNHitSVr6qTLLs0bbQeI8CYXnDtrsK7fNwgiZJY3bQA9DmsNIasGQI60I+A1EnpgU0UWQDq4Pc6a4HXz/NmO8dZuMCpHpwgwHq4uo932znjJmC3WOkg6/oPOCjZvxHYlqCzFmQqKijFVwEKZQ5BOY2SiA6gkLqUt0nWbRXMVIC/I6+Vq3IAoNcUCJDgFolUmbEsQKZCgLewbG8PBs9x1HL5n298zPc8fMUi68aAtByoRfMSuahp9t4mYjBy6gfnGl4UHRQQGOdAZTOA7b0KUj0Caop+9NRoViEoxrTDqxv/3cM93fj/As6JT9HgmLyYAAAAAElFTkSuQmCC"]
    }, {
      type: 'array',
      title: 'The URI can optionally vary with time.',
      items: {
        type: 'object',
        properties: {
          "interval": {
            "type": "string",
            description: 'start = end = new Date().toISOString; value = start/end',
            "default": '2023-08-07T05:31:35.12Z/2024-08-07T06:31:35.12Z'
          },
          "uri": {
            "type": "string",
            "format": "uri",
            "default": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABMlBMVEX////////7+e7z7tbr4s708qbi1p/ez4vSvIP////Ir2bBoWLGq2XSvmvi13LFqGTe0XDNsmfPuWm9nGHs5oDaym/Yx27Vv5y/n2H079/VwmzQuZDp4nbl2nT//vvcz3DWxGzv6o7t6HjQu2rf03HDpGPv7HrbzHDPtmj69+/v6cHfzrXTvJj8+/f9+/X38+37+uz28ur6+OX28eH59tbw6dbz7dXu5s3w6rnv6rLZxp7j1pnSupPl3I3byo3h1nvm3XXKr2f7+d328tjw6cjr4cjp3r7dzLDg0K/s5afp4KbZxqbf0KHw7JncypXdz4vt6InUv4ff0YPOtYLr43nTvnf7+vL18tD498r18cfr4bvm27LbyanPt5jVv5Ln3oTez4PXw4LRvH7ZyHrEqHbKsnALRXLGAAAACXRSTlO/n7+/v7+/v78Ov8gXAAABoUlEQVQ4y33TaXvBQBAAYL3bSEIQRZMg7rTum6Koq64qet/H//8L3SukQefTzuyb58nuzhi2DNrYOdjf1uZw+2gZ6bLHxTBPUU3JoAGJK94OgM8yb68Dt0V3iIAw99nSA6lQM2sARU2yf8DDG8siMM49MgjQplfnAmS8FyICN5egFBlgEDCWkgg0hoKAQE2RyGFGGDgc/TgAgiDLAPgLmtNlJwhYrWcAzEK8KAu9BN6SCGlNjSAcENjMYdNHitSVr6qTLLs0bbQeI8CYXnDtrsK7fNwgiZJY3bQA9DmsNIasGQI60I+A1EnpgU0UWQDq4Pc6a4HXz/NmO8dZuMCpHpwgwHq4uo932znjJmC3WOkg6/oPOCjZvxHYlqCzFmQqKijFVwEKZQ5BOY2SiA6gkLqUt0nWbRXMVIC/I6+Vq3IAoNcUCJDgFolUmbEsQKZCgLewbG8PBs9x1HL5n298zPc8fMUi68aAtByoRfMSuahp9t4mYjBy6gfnGl4UHRQQGOdAZTOA7b0KUj0Caop+9NRoViEoxrTDqxv/3cM93fj/As6JT9HgmLyYAAAAAElFTkSuQmCC"
          }
        },
        "required": ["uri", "interval"]
      }
    }]
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
    oneOf: [{
      "type": "null",
      "title": "不设置",
      "default": undefined
    }, {
      type: 'object',
      title: '[x y width height]',
      properties: {
        "boundingRectangle": {
          "type": "array",
          "description": "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in radians.",
          items: {
            type: 'number'
          },
          minItems: 4,
          maxItems: 4,
          "default": [0, 0, 10, 10]
        }
      }
    }]
  },
  'RectangleCoordinates.json': {
    type: 'object',
    title: 'Rectangle',
    oneOf: [{
      properties: {
        "wsen": {
          "type": "array",
          title: "west south east north in radians.",
          "description": "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in radians.",
          items: {
            type: 'number'
          },
          minItems: 4,
          maxItems: 4
        }
      }
    }, {
      properties: {
        "wsenDegrees": {
          title: "west south east north in degrees.",
          "type": "array",
          "description": "The set of coordinates specified as Cartographic values `[WestLongitude, SouthLatitude, EastLongitude, NorthLatitude]`, with values in degrees.",
          items: {
            type: 'number'
          },
          minItems: 4,
          maxItems: 4
        }
      }
    }]
  }
};

// some properties need to add new features
// 高级属性
var RJSFSchemaKeymap = {
  show: {
    isAdvancedConfig: false
  },
  positions: {
    isAdvancedConfig: false
  }
};
var keyThatNeedSkipDefaultHandle = ['eyeOffset',
// czml eyeOffset is a catersian object,  but default value is a array  cause error, write default value in definitions
'backgroundPadding', 'pixelOffset', 'backgroundColor', 'material'];
var CZML2RJSFAdaptor = function CZML2RJSFAdaptor(schemaObj) {
  // first adapt the schemaObj make rjsf can render it

  // 1. czml #ref  => rjsf schema type
  // 2. czml czmlRequiredForDisplay => rjsf required
  // 3. czml default => rjsf default
  // 4. czml enum => rjsf enum
  // 5. czml enumNames => rjsf enumNames

  schemaObj.definitions = czmlSchemaTypeKeymap;
  var properties = schemaObj.properties;
  // console.log(properties);
  for (var key in properties) {
    if (Object.hasOwn(properties, key)) {
      var element = properties[key];
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
        var ref = element['#ref']; //  replace #ref => rsjf definitions
        // in czml ref is like  Color.json 
        // in rsjf ref is like  #/definitions/Color.json 

        if (ref && ref.indexOf('/') > -1) {
          ref = ref.replace('/', '_');
        }
        if (czmlSchemaTypeKeymap[ref] !== undefined) {
          element['$ref'] = "#/definitions/".concat(ref);
          if (keyThatNeedSkipDefaultHandle.indexOf(key) > -1) {
            delete element["default"];
            continue;
          }
          if (element["default"] !== undefined) {
            // should handle this in czmlSchemaTypeKeymap
            // e.g. default [0, 0]  in fact should be cartesian2 = [0, 0]
            // element.default = undefined
            if (element["default"] === 'π / 180.0') {
              element["default"] = Math.PI / 180.0;
            }
            if (element["default"] === 'solid white') {
              delete element["default"];
            }
            if (element["default"] === 'white' || element["default"] === 'black') {
              element["default"] = {
                rgba: [255, 255, 255, 255]
              };
            }
            if (element["default"] !== undefined && typeof element["default"] === 'string' && element["default"].indexOf('[') === 0) {
              element["default"] = JSON.parse(element["default"]);
            }
            if (element.type === 'number') {
              element["default"] = +element["default"];
            }
          }
          continue;
          var pre_obje = czmlSchemaTypeKeymap[ref];
          if (pre_obje.type) {
            element.type = pre_obje.type;
          }
          if (pre_obje.items) {
            element.items = pre_obje.items;
          }
          if (pre_obje["enum"]) {
            element["enum"] = pre_obje["enum"];
          }
          if (pre_obje.enumNames) {
            element.enumNames = pre_obje.enumNames;
          }
          if (pre_obje["default"]) {
            element["default"] = pre_obje["default"];
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
};

var RJSFAdaptor2 = function RJSFAdaptor2(schemaObj) {
  // second adapt the schemaObj  can add some new features

  var properties = schemaObj.properties;
  for (var key in properties) {
    if (Object.hasOwn(properties, key)) {
      var element = properties[key];
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
};
var UserInputJSONAdaptor = function UserInputJSONAdaptor(jsonObj) {
  // handle the user input json data
  var cloneObj = JSON.parse(JSON.stringify(jsonObj));
  if (Array.isArray(jsonObj)) {
    // [{id: ""}, {}]
    jsonObj.forEach(function (packet) {
      editableKeysInPacketSchema.forEach(function (key) {
        if (packet[key]) {
          // handle the key
          var packetItem = packet[key]; // user input part   billboard polygon label schema 
          var packetItemSchema = editableKeysInPacketSchema[packetItem['#ref']];
          // use user input  value to replace change default value
        }
      });
    });
  }

  if (_typeof(jsonObj) === 'object') {}
  return cloneObj;
};


/***/ }),

/***/ 77196:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"Basic CZML billboard and label","version":"1.0"},{"id":"some-unique-id","name":"AGI","description":"<p><a href=\'http://www.agi.com\' target=\'_blank\'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>","billboard":{"image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvUlEQVRYw+2Y22scVRzHP78zM3uZyWY3abKJl6I2VkLAS4qCCFVRURSh9T/QB1EffPFBBBXf9U189EEQ0Qd9sC8WpXgjIlrwgmirhcam1mQT3Sa72ezszDk/H3biGi8tdrf6sl8YznBmzu98z+/yPWcGhhhiiCHOifp7d83r+7f7FzreXGyCRu0lK51c/kLHy6AJqaoBvMy2FRHbjz0ZMLnC2tpaADAxMVHs9rZ8CDdEpPmfE9xcfPUSv1i5I1e9/y0g7PZuddvYdNu86RKN21vkSydFJPk3c/h9eMsnroWYsAyNCEq6tbUVFYsobJNLQ8gpaTvCkwppo7q8vPzF9PT05sA9qKpBdhsA1Ov1YGxszAeCOD5dyjd/vAXiq0E8TPgTpT1fpxScT+ZBsUG89Pasv+vGRa9UfEfkqvbFJBhuE6X2zmOath9HtLLDsJgG/ugblOYPIeKB677vmWKaJqtBoXp40AQrXWItwAvjOJb8L+++4FznwDknMMVPZWL/S4jvOdeJDLKdVoelUP1hIDrYPvXiTK8IvBAg+PXIg66zceC8C+vUb9aznx90rhP9wS0hxt02EKGuL9x3Q+fMh89AMgnJJEkakbpJtlYe1s5ZNO5d2ASc7ujTzlnc5ql7jaQlI1pGk0lcEjlrZ7RZm+67iiu3vLbYXv74lT/ELGT9y72atiZ3hHLkaqR6Vzdr6kfR+ue9h8lm5JpLM2bkipVtDxpcgNeaA5b7lJn8SGHXnS3SuAKQYgOTNKpqsyLMWlPZh0g3IDJ+E+nKeztz0W6OobYJLkTBOQJjzJUDyEETEbhu/okLfdGQXOkvYmvjtb+97zHMK5rZQUMjLsTa6gCEOs1jXYRzAWhoAcKrNkgPtQHUuQKAW3qTdOpuMDmoHcHrrG/rjQUwxak26iqgoBomPy9UvV3Xn+ifYJIIRkLIdNDFBU/8fOqPfEvanPvdQfEqcuq13jiv0HNerryMCXKZXoW29XPJNmvjtnF4qn+CzrQgiXAaIBp64vsAZmz+M3v67XnVf5AX+/tG4ZnJ/Yu4NBNyLXrFKuy+dd3zw4/gyT5zsGVrQIho2Js9jUzlhlXyE8fPm8GFas0rzzay1WY2bOTlSjnEO9p3kcj4+DpqN5xq2amtoMkkaIgQensf/QCX1rXT1bs/X6ht+7sPfg+uAukkuKjbaoi4JRmdPT6QnQQ1R7VTe0KTX+ez+EVObQQQ7H3kiPgj9b8sLCi1g5mHviE32kuj7Sp2LkL05YHuxTZee9q49uXbm76zXYImPnOlpo1xu7KwxzZO+KB4pT3Wn9q/QlBOCSoboEXNikzAR/UzGb32gcEeFlaPlYiKzyIy7tRGODBGi9ppjolrldG0kJH3VDFi/G75BOUEQNFAXCeynXakncadwWX3fDLwE7U2T07j8RxOLwUXoBqCAhoqiqiGCIqzEZIpRBZWVQKETRmZm7LNEw/4o7OHLsqRX/VkxW2mTxm4eUdlbueX2mzXwe8twIWoLJDog+y6viEiGxf9m0Qbx+5A5GHUXqeqgRjxUReABqgGKAGigTp3TESfl/K+1/+Xrzrd+O4ai73VgznETePwEVdH5Ts8+76M7Ptq+PtiiCGGGOLC8RtKLDgkovpfDQAAAABJRU5ErkJggg==","scale":1.5},"label":{"fillColor":{"rgba":[255,255,255,255]},"font":"12pt Lucida Console","horizontalOrigin":"LEFT","pixelOffset":{"cartesian2":[8,0]},"style":"FILL","text":"Title\\nSubTitle","showBackground":true,"backgroundColor":{"rgba":[112,89,57,200]}},"position":{"cartesian":[1216361.4096947117,-4736253.175342511,4081267.4865667094]}}]');

/***/ }),

/***/ 67599:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Colors","version":"1.0"},{"id":"rgba","name":"Rectangle with outline using RGBA Colors","rectangle":{"coordinates":{"wsenDegrees":[-120,40,-110,50]},"fill":true,"material":{"solidColor":{"color":{"rgba":[255,0,0,100]}}},"height":0,"outline":true,"outlineColor":{"rgba":[0,0,0,255]}}},{"id":"rgbaf","name":"Rectangle using RGBAF Colors","rectangle":{"coordinates":{"wsenDegrees":[-100,40,-90,50]},"fill":true,"material":{"solidColor":{"color":{"rgbaf":[1,0,0,0.39]}}},"height":0,"outline":true,"outlineColor":{"rgba":[0,0,0,255]}}}]');

/***/ }),

/***/ 79767:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Model","version":"1.0"},{"id":"aircraft model","name":"Cesium Air","position":{"cartographicDegrees":[-77,37,10000]},"model":{"gltf":"http://localhost:8000/car1.glb","scale":2,"minimumPixelSize":128}}]');

/***/ }),

/***/ 98437:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Path","version":"1.0","clock":{"interval":"2012-08-04T10:00:00Z/2012-08-04T15:00:00Z","currentTime":"2012-08-04T10:00:00Z","multiplier":10}},{"id":"path","name":"path with GPS flight data","description":"<p>Hang gliding flight log data from Daniel H. Friedman.<br>Icon created by Larisa Skosyrska from the Noun Project</p>","availability":"2012-08-04T10:00:00Z/2012-08-04T15:00:00Z","path":{"material":{"polylineOutline":{"color":{"rgba":[255,0,255,255]},"outlineColor":{"rgba":[0,255,255,255]},"outlineWidth":5}},"width":8,"leadTime":10,"trailTime":1000,"resolution":5},"billboard":{"image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAAACXBIWXMAAC4jAAAuIwF4pT92AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA7VJREFUeNrEl2uIlWUQx39nXUu0m2uQbZYrbabdLKMs/VBkmHQjioqFIhBS+hKEQpQRgVAf2u5RQkGBRUllRH4I2e5ZUBJlEZVt5i0tTfHStrZ6fn35L70d9n7Obg88vOedmWfmf2bmmZkXlRrtq9V16mZ1iVqqhd5agXvQf1c5zw/V8dXqrqO6dQKwBrgdWApsCb0VqAc2AnOrMVANwIsD4BLgTOBPYB2wHJgEzAG+ANqAu4ZsZYiuX5QwfqI2hvaNulA9J7zLQn8o76vUuuHOwXHqSzH4aIF+TWjnBkSH+nCBf716SP1KPWO4AJ6ltgfIjRW8p9U/1KPz/ry6RT2mIDNF3Zjz19Ya4G1R/J16dgWvQd2pPlXhMdVZPUTgxfCW1wJgXUJpQlvfg8zs8K8r0Caom9QHetG7NGfa1ElDBThRXRtFd/Qh16puKIS3e7+clBjdy7kL1b3q4fzJQQGck5z6Nb97kxujblWf64HXov7Vl/E4YXWccP9AAd6dAx+ox/WTArNzY1t64B0f8K0DyLXuUvRGZfcpCo1VX4tg6wB76WMB0dALf526foAX8cqUot2pGP8B2Kz+krBeNYjS8636dh/8Beo2deoA9TWp76pd6g0q9cDNwKvAD8A84EfglLRBe2g+JWAfcEF68bPABOCoAl/gIPA5MA64FVgGnNhP292W3r0SeB1YVlJXAjcBP8XwyQUj9AKwAzg2+/fQSsBhoJxBAaALaIzenZGnD911wA7gEDAD2FFSpwOzgDHZ5T7+ZSlGd2d6AXgi5+qAn+O5U0PbBVwKtAD3AHuB8f3YGBUdncCGoQ4LE9XtGRqK9LnduVPRIu2BPqwD65IYbS7Qpql7Ql9YoJcy9bwzkgPrfOCj5G33+h54E/g0PAr5thq4ApgyEgNrc27aWwVaPTA1QJ4BjgTGFvhteV40EgPrgvTP7qlmZqFnl9WD+b2posN83E/NrEkOjlI/U1fkfUYa/pe5IE3qZPW8jFOqiyN7p3pAPX04c7AxYSoDDcAjKT2LgLXA6IR2M3Bviv59wDTgQGTPH84Qd8+HXfHcoUws2zM0HMjuUPep+xP2PWpnwtw0GJsldbBpewQwE/gbeDyt7H1gcW53O7AC+A3Yn6+/W+Ld9SnWA15DAVhc8xK2TuA9YHrCuhV4EngFuBx4YagG6qv8cF+T52kB2Zy+e1I8taUacNV+uBdXO7ABmJwJpwx8XQvF9TUCWM64tiQhbq/oMv+7BwFWpQzNT8vbVQul/wwAGzzdmXU1xuUAAAAASUVORK5CYII=","scale":1.5,"eyeOffset":{"cartesian":[0,0,-10]}},"position":{"epoch":"2012-08-04T10:00:00Z","cartographicDegrees":[0,-122.93797,39.50935,1776,10,-122.93822,39.50918,1773,20,-122.9385,39.50883,1772,30,-122.93855,39.50842,1770,40,-122.93868,39.50792,1770,50,-122.93877,39.50743,1767,60,-122.93862,39.50697,1771,70,-122.93828,39.50648,1765,80,-122.93818,39.50608,1770,90,-122.93783,39.5057,1754,100,-122.93777,39.50513,1732,110,-122.93793,39.50458,1727,120,-122.93815,39.50415,1717,130,-122.9382,39.50362,1713,140,-122.93818,39.5031,1703,150,-122.93812,39.50258,1706,160,-122.93792,39.5022,1707,170,-122.93775,39.50177,1698,180,-122.93745,39.50125,1693,190,-122.93723,39.50073,1694,200,-122.9373,39.50023,1702,210,-122.93705,39.49987,1705,220,-122.93642,39.4996,1699,230,-122.93593,39.49927,1693,240,-122.936,39.49895,1691,250,-122.93645,39.49907,1689,260,-122.93685,39.49915,1684,270,-122.93708,39.4989,1680,280,-122.93687,39.49843,1684,290,-122.93685,39.49808,1691,300,-122.93722,39.49815,1688,310,-122.93712,39.49867,1680,320,-122.93633,39.49893,1681,330,-122.93615,39.4989,1682,340,-122.936,39.49885,1682,350,-122.93587,39.49877,1682,360,-122.93577,39.49868,1683,370,-122.93568,39.4986,1685,380,-122.93563,39.49853,1685,390,-122.9356,39.49845,1685,400,-122.9356,39.4984,1685,410,-122.93562,39.49835,1685,420,-122.93565,39.4983,1686,430,-122.93568,39.49827,1684,440,-122.93572,39.49822,1684,450,-122.93575,39.49817,1682,460,-122.93577,39.49812,1682,470,-122.93578,39.49805,1682,480,-122.93573,39.498,1682,490,-122.93567,39.49795,1681,500,-122.93555,39.4979,1678,510,-122.9354,39.49788,1676,520,-122.93522,39.49792,1674,530,-122.93502,39.49795,1674,540,-122.93492,39.4981,1671,550,-122.93483,39.49827,1669,560,-122.93485,39.49842,1668,570,-122.93493,39.49855,1665,580,-122.93502,39.49868,1664,590,-122.93517,39.4987,1665,600,-122.9353,39.49873,1665,610,-122.93543,39.49873,1663,620,-122.93553,39.49873,1661,630,-122.93567,39.49872,1660,640,-122.93577,39.49868,1663,650,-122.93585,39.49865,1665,660,-122.93592,39.49862,1667,670,-122.93597,39.4986,1665,680,-122.93607,39.49857,1664,690,-122.93617,39.49857,1664,700,-122.93627,39.49857,1664,710,-122.93638,39.49857,1664,720,-122.9365,39.49857,1666,730,-122.9366,39.49857,1666,740,-122.93672,39.49852,1668,750,-122.93678,39.49847,1672,760,-122.93685,39.49842,1673,770,-122.93693,39.4984,1672,780,-122.937,39.49837,1670,790,-122.93707,39.49832,1669,800,-122.9371,39.49827,1671,810,-122.93713,39.4982,1671,820,-122.93712,39.49813,1669,830,-122.93708,39.49805,1666,840,-122.93702,39.49797,1663,850,-122.9369,39.49787,1663,860,-122.93675,39.4978,1664,870,-122.93657,39.49773,1667,880,-122.9364,39.49772,1670,890,-122.93623,39.49773,1671,900,-122.93608,39.49777,1670,910,-122.93592,39.49777,1667,920,-122.93573,39.49773,1667,930,-122.93557,39.49767,1667,940,-122.93547,39.49762,1666,950,-122.93538,39.49753,1664,960,-122.93537,39.49747,1661,970,-122.93542,39.49738,1657,980,-122.9355,39.49732,1655,990,-122.9356,39.49727,1653,1000,-122.93573,39.49725,1653,1010,-122.93588,39.49725,1652,1020,-122.93602,39.49728,1652,1030,-122.93617,39.49732,1651,1040,-122.93628,39.49738,1651,1050,-122.93638,39.49745,1650,1060,-122.9365,39.49752,1649,1070,-122.93658,39.4976,1649,1080,-122.93667,39.49768,1650,1090,-122.93675,39.4978,1651,1100,-122.93683,39.49788,1654,1110,-122.93692,39.49797,1658,1120,-122.93698,39.49803,1661,1130,-122.93707,39.4981,1661,1140,-122.93717,39.49817,1661,1150,-122.93725,39.49822,1661,1160,-122.93737,39.49825,1661,1170,-122.93745,39.49823,1662,1180,-122.93748,39.49817,1661,1190,-122.93747,39.49808,1658,1200,-122.93732,39.49803,1657,1210,-122.93715,39.49807,1660,1220,-122.937,39.49813,1663,1230,-122.93692,39.49823,1666,1240,-122.93688,39.49833,1666,1250,-122.93692,39.49843,1665,1260,-122.93698,39.49848,1663,1270,-122.93708,39.4985,1661,1280,-122.93717,39.49848,1660,1290,-122.93725,39.49842,1659,1300,-122.93728,39.49832,1661,1310,-122.93725,39.49823,1663,1320,-122.93717,39.49817,1663,1330,-122.93705,39.49812,1666,1340,-122.93692,39.49812,1666,1350,-122.93675,39.49815,1667,1360,-122.93663,39.49825,1668,1370,-122.93657,39.49835,1670,1380,-122.93655,39.49847,1672,1390,-122.93657,39.49855,1673,1400,-122.93663,39.49863,1673,1410,-122.93675,39.49868,1671,1420,-122.93685,39.49872,1672,1430,-122.93695,39.4987,1674,1440,-122.93702,39.49865,1677,1450,-122.93703,39.49858,1679,1460,-122.93705,39.4985,1680,1470,-122.93702,39.49843,1681,1480,-122.93693,39.49837,1682,1490,-122.93682,39.49833,1683,1500,-122.9367,39.49832,1683,1510,-122.93653,39.4983,1684,1520,-122.93638,39.49833,1686,1530,-122.93627,39.49838,1688,1540,-122.93613,39.49847,1688,1550,-122.93605,39.49857,1688,1560,-122.936,39.49868,1689,1570,-122.93603,39.4988,1691,1580,-122.93612,39.49888,1693,1590,-122.9362,39.49893,1693,1600,-122.9363,39.49893,1695,1610,-122.93638,39.4989,1695,1620,-122.93645,39.49883,1696,1630,-122.93647,39.49877,1696,1640,-122.93643,39.49868,1699,1650,-122.93637,39.4986,1701,1660,-122.93625,39.49857,1702,1670,-122.9361,39.49857,1703,1680,-122.93593,39.49858,1704,1690,-122.9358,39.49862,1704,1700,-122.93568,39.4987,1703,1710,-122.93558,39.4988,1703,1720,-122.93553,39.49892,1703,1730,-122.93553,39.49905,1702,1740,-122.93558,39.49917,1705,1750,-122.93565,39.49925,1708,1760,-122.93573,39.49932,1709,1770,-122.93582,39.49933,1711,1780,-122.93592,39.49932,1713,1790,-122.93595,39.49927,1714,1800,-122.93598,39.4992,1714,1810,-122.93597,39.49912,1715,1820,-122.93588,39.49903,1716,1830,-122.93575,39.49897,1717,1840,-122.9356,39.49895,1718,1850,-122.93545,39.49895,1717,1860,-122.93527,39.499,1717,1870,-122.9351,39.49908,1719,1880,-122.935,39.49918,1719,1890,-122.93492,39.49932,1719,1900,-122.93492,39.49945,1720,1910,-122.93493,39.49957,1721,1920,-122.935,39.49965,1722,1930,-122.9351,39.49972,1724,1940,-122.9352,39.49978,1726,1950,-122.93528,39.4998,1727,1960,-122.93535,39.49982,1728,1970,-122.93543,39.49978,1727,1980,-122.93548,39.49973,1726,1990,-122.93552,39.49965,1728,2000,-122.93548,39.49957,1729,2010,-122.93542,39.49948,1728,2020,-122.93527,39.49942,1729,2030,-122.93512,39.49942,1731,2040,-122.93495,39.49942,1732,2050,-122.9348,39.49948,1731,2060,-122.9347,39.49957,1732,2070,-122.93463,39.49968,1733,2080,-122.93462,39.49978,1733,2090,-122.93463,39.4999,1732,2100,-122.9347,39.49998,1733,2110,-122.93478,39.50003,1736,2120,-122.93487,39.50007,1739,2130,-122.93495,39.50007,1740,2140,-122.93502,39.50005,1741,2150,-122.9351,39.5,1742,2160,-122.93513,39.49993,1743,2170,-122.93513,39.49985,1744,2180,-122.9351,39.49977,1747,2190,-122.93502,39.4997,1750,2200,-122.9349,39.49967,1753,2210,-122.93478,39.49965,1753,2220,-122.93467,39.49965,1750,2230,-122.9345,39.49967,1747,2240,-122.93435,39.49973,1745,2250,-122.9342,39.49983,1747,2260,-122.9341,39.49995,1749,2270,-122.93407,39.50003,1749,2280,-122.93407,39.50013,1749,2290,-122.9341,39.50025,1748,2300,-122.9342,39.50032,1750,2310,-122.9343,39.50037,1751,2320,-122.9344,39.5004,1754,2330,-122.9345,39.50042,1755,2340,-122.93462,39.50042,1756,2350,-122.93468,39.50038,1757,2360,-122.93473,39.50032,1760,2370,-122.93472,39.50025,1762,2380,-122.93463,39.50017,1762,2390,-122.93447,39.50012,1764,2400,-122.93432,39.50013,1766,2410,-122.93415,39.50015,1767,2420,-122.93402,39.50023,1766,2430,-122.9339,39.50032,1765,2440,-122.9338,39.50043,1766,2450,-122.93375,39.50057,1768,2460,-122.93375,39.50068,1769,2470,-122.9338,39.50077,1772,2480,-122.93385,39.50082,1773,2490,-122.93392,39.50085,1773,2500,-122.93402,39.50088,1772,2510,-122.93412,39.50087,1773,2520,-122.93422,39.50083,1775,2530,-122.9343,39.50078,1777,2540,-122.93437,39.50073,1779,2550,-122.9344,39.50067,1782,2560,-122.93438,39.5006,1785,2570,-122.93432,39.50053,1787,2580,-122.9342,39.50048,1787,2590,-122.93408,39.50048,1786,2600,-122.93393,39.50052,1782,2610,-122.93377,39.50057,1781,2620,-122.93367,39.50065,1781,2630,-122.93362,39.50083,1780,2640,-122.93363,39.50098,1782,2650,-122.93368,39.50108,1785,2660,-122.93378,39.50118,1787,2670,-122.93388,39.50125,1789,2680,-122.93398,39.50128,1791,2690,-122.93408,39.50128,1791,2700,-122.93415,39.50125,1790,2710,-122.9342,39.5012,1789,2720,-122.93418,39.50113,1789,2730,-122.93415,39.50108,1789,2740,-122.93407,39.50102,1787,2750,-122.93397,39.50098,1786,2760,-122.93382,39.50097,1785,2770,-122.93365,39.50097,1785,2780,-122.9335,39.501,1785,2790,-122.93337,39.50107,1782,2800,-122.93323,39.50118,1782,2810,-122.93317,39.5013,1783,2820,-122.93317,39.50142,1785,2830,-122.9332,39.50153,1786,2840,-122.93327,39.50162,1786,2850,-122.93337,39.50168,1785,2860,-122.9335,39.50173,1787,2870,-122.93365,39.50177,1790,2880,-122.93377,39.50178,1791,2890,-122.9339,39.50178,1791,2900,-122.93402,39.50177,1790,2910,-122.93413,39.50175,1788,2920,-122.93425,39.50173,1786,2930,-122.9344,39.50172,1785,2940,-122.93452,39.5017,1785,2950,-122.93465,39.50168,1785,2960,-122.93477,39.50167,1784,2970,-122.9349,39.50163,1781,2980,-122.93503,39.5016,1778,2990,-122.9351,39.50153,1778,3000,-122.93512,39.50145,1781,3010,-122.93507,39.50138,1781,3020,-122.93498,39.50135,1778,3030,-122.93485,39.50132,1775,3040,-122.93468,39.50135,1773,3050,-122.93453,39.50143,1772,3060,-122.93442,39.50152,1773,3070,-122.93435,39.50163,1772,3080,-122.93435,39.50173,1770,3090,-122.93442,39.50183,1767,3100,-122.93453,39.50188,1766,3110,-122.93467,39.50187,1765,3120,-122.9348,39.50185,1764,3130,-122.93488,39.50182,1763,3140,-122.93498,39.50177,1763,3150,-122.93505,39.50172,1761,3160,-122.93512,39.50165,1759,3170,-122.93522,39.50158,1757,3180,-122.9353,39.50152,1757,3190,-122.93538,39.50145,1757,3200,-122.93545,39.50142,1755,3210,-122.93553,39.50137,1751,3220,-122.93562,39.5013,1746,3230,-122.9357,39.50125,1744,3240,-122.93578,39.50117,1741,3250,-122.93583,39.50107,1741,3260,-122.93587,39.50098,1741,3270,-122.9359,39.5009,1740,3280,-122.93592,39.5008,1739,3290,-122.93592,39.50072,1739,3300,-122.93585,39.50062,1741,3310,-122.93577,39.50057,1744,3320,-122.93565,39.50053,1743,3330,-122.9355,39.50055,1741,3340,-122.93535,39.50062,1737,3350,-122.93522,39.50073,1735,3360,-122.93517,39.50087,1735,3370,-122.93518,39.50102,1735,3380,-122.93525,39.50113,1733,3390,-122.93537,39.5012,1731,3400,-122.9355,39.50122,1728,3410,-122.93565,39.5012,1726,3420,-122.9358,39.50118,1726,3430,-122.93595,39.50115,1726,3440,-122.93607,39.50112,1728,3450,-122.93617,39.50108,1731,3460,-122.93625,39.50105,1734,3470,-122.93633,39.50102,1736,3480,-122.93638,39.50097,1737,3490,-122.93642,39.50088,1738,3500,-122.93638,39.5008,1738,3510,-122.9363,39.50072,1739,3520,-122.93617,39.50067,1740,3530,-122.93602,39.50065,1742,3540,-122.93583,39.50067,1742,3550,-122.9357,39.50073,1743,3560,-122.93558,39.50083,1744,3570,-122.93552,39.50097,1745,3580,-122.93552,39.50108,1744,3590,-122.93557,39.5012,1744,3600,-122.93567,39.50127,1743,3610,-122.93577,39.50133,1743,3620,-122.9359,39.50128,1747,3630,-122.93595,39.50123,1752,3640,-122.93598,39.50118,1755,3650,-122.936,39.50112,1756,3660,-122.936,39.50103,1756,3670,-122.93595,39.50095,1757,3680,-122.93585,39.50087,1761,3690,-122.93572,39.50083,1764,3700,-122.93557,39.50085,1767,3710,-122.93543,39.5009,1769,3720,-122.93532,39.50098,1768,3730,-122.93522,39.5011,1767,3740,-122.93518,39.50125,1766,3750,-122.9352,39.5014,1766,3760,-122.93527,39.50152,1768,3770,-122.93537,39.5016,1770,3780,-122.93548,39.50163,1773,3790,-122.93558,39.50163,1773,3800,-122.93567,39.50163,1774,3810,-122.93577,39.5016,1776,3820,-122.9358,39.50153,1778,3830,-122.93578,39.50145,1780,3840,-122.93573,39.50138,1781,3850,-122.93563,39.5013,1781,3860,-122.93547,39.50127,1781,3870,-122.93527,39.50145,1783,3880,-122.93515,39.50157,1786,3890,-122.93513,39.5017,1790,3900,-122.93515,39.50182,1793,3910,-122.93522,39.50192,1797,3920,-122.9353,39.50198,1797,3930,-122.9354,39.502,1798,3940,-122.93552,39.50197,1799,3950,-122.93557,39.50192,1803,3960,-122.93558,39.50185,1807,3970,-122.93555,39.50177,1809,3980,-122.93548,39.50168,1813,3990,-122.93535,39.50163,1816,4000,-122.93522,39.50163,1817,4010,-122.93507,39.50163,1821,4020,-122.93492,39.5017,1824,4030,-122.9348,39.50177,1826,4040,-122.9347,39.50187,1827,4050,-122.93462,39.50198,1828,4060,-122.9346,39.5021,1831,4070,-122.93462,39.50223,1832,4080,-122.93468,39.50235,1834,4090,-122.93478,39.50243,1837,4100,-122.93488,39.50247,1840,4110,-122.93498,39.50248,1842,4120,-122.93508,39.50247,1844,4130,-122.93517,39.50242,1847,4140,-122.93522,39.50238,1849,4150,-122.93523,39.50232,1852,4160,-122.9352,39.50225,1854,4170,-122.93515,39.50217,1857,4180,-122.93505,39.5021,1859,4190,-122.93493,39.50207,1862,4200,-122.9348,39.50205,1863,4210,-122.93463,39.50207,1864,4220,-122.9345,39.50213,1867,4230,-122.93437,39.50223,1869,4240,-122.9343,39.50237,1870,4250,-122.93428,39.50248,1871,4260,-122.9343,39.50262,1872,4270,-122.93438,39.5027,1874,4280,-122.93448,39.50277,1877,4290,-122.9346,39.50277,1878,4300,-122.9347,39.50273,1878,4310,-122.93478,39.50265,1880,4320,-122.9348,39.50257,1883,4330,-122.9348,39.50247,1885,4340,-122.93473,39.50238,1888,4350,-122.93465,39.50232,1889,4360,-122.93453,39.50227,1890,4370,-122.93437,39.50225,1890,4380,-122.93418,39.50227,1889,4390,-122.93398,39.50233,1888,4400,-122.93383,39.50245,1890,4410,-122.93372,39.50257,1891,4420,-122.93363,39.50272,1891,4430,-122.93362,39.50285,1894,4440,-122.93365,39.50298,1896,4450,-122.93373,39.50312,1897,4460,-122.93373,39.50312,1897,4470,-122.93385,39.5032,1898,4480,-122.93398,39.50327,1899,4490,-122.9341,39.50328,1902,4500,-122.93422,39.50328,1906,4510,-122.93432,39.50325,1906,4520,-122.93437,39.50322,1906,4530,-122.9344,39.50313,1907,4540,-122.9344,39.50307,1909,4550,-122.93433,39.50302,1912,4560,-122.93423,39.50295,1914,4570,-122.93412,39.50292,1917,4580,-122.93397,39.50292,1919,4590,-122.9338,39.50295,1920,4600,-122.93363,39.50303,1921,4610,-122.93348,39.50315,1923,4620,-122.9334,39.50328,1924,4630,-122.93337,39.50342,1924,4640,-122.9334,39.50357,1925,4650,-122.93348,39.50367,1927,4660,-122.93358,39.50372,1929,4670,-122.93368,39.50373,1932,4680,-122.93377,39.50373,1932,4690,-122.93382,39.50368,1931,4700,-122.93383,39.50362,1933,4710,-122.93382,39.50355,1937,4720,-122.93375,39.5035,1940,4730,-122.93367,39.50345,1941,4740,-122.93355,39.50342,1944,4750,-122.9334,39.5034,1946,4760,-122.93327,39.50342,1947,4770,-122.93312,39.50347,1948,4780,-122.93295,39.50353,1949,4790,-122.93283,39.50363,1949,4800,-122.93272,39.50377,1950,4810,-122.93267,39.50388,1950,4820,-122.93267,39.50402,1952,4830,-122.93272,39.50415,1954,4840,-122.93278,39.50423,1954,4850,-122.93288,39.5043,1954,4860,-122.933,39.50433,1954,4870,-122.9331,39.50432,1956,4880,-122.93322,39.50428,1958,4890,-122.93327,39.50423,1960,4900,-122.93327,39.50417,1964,4910,-122.93323,39.50412,1967,4920,-122.93317,39.50407,1968,4930,-122.93308,39.50403,1966,4940,-122.93295,39.504,1964,4950,-122.9328,39.50397,1964,4960,-122.93262,39.50395,1966,4970,-122.93245,39.50397,1967,4980,-122.9323,39.504,1970,4990,-122.93215,39.50405,1971,5000,-122.93203,39.50413,1970,5010,-122.93192,39.50423,1967,5020,-122.93182,39.5044,1965,5030,-122.9318,39.50457,1964,5040,-122.93185,39.50473,1966,5050,-122.93193,39.50485,1968,5060,-122.93202,39.50493,1969,5070,-122.93215,39.50498,1969,5080,-122.93227,39.50498,1969,5090,-122.9324,39.50497,1969,5100,-122.93252,39.50493,1970,5110,-122.9326,39.5049,1973,5120,-122.93267,39.50487,1977,5130,-122.93273,39.50482,1980,5140,-122.93275,39.50478,1981,5150,-122.93273,39.50472,1982,5160,-122.93267,39.50467,1982,5170,-122.93253,39.50463,1981,5180,-122.93237,39.50463,1979,5190,-122.93217,39.50465,1978,5200,-122.93197,39.50473,1977,5210,-122.9318,39.50483,1976,5220,-122.9317,39.50497,1975,5230,-122.93165,39.50513,1974,5240,-122.93168,39.50527,1972,5250,-122.93177,39.50538,1970,5260,-122.9319,39.50547,1967,5270,-122.93222,39.50548,1963,5280,-122.93232,39.50542,1969,5290,-122.93242,39.50537,1973,5300,-122.9325,39.50532,1977,5310,-122.93257,39.50527,1978,5320,-122.93263,39.50522,1978,5330,-122.93273,39.50515,1979,5340,-122.93282,39.50512,1981,5350,-122.93293,39.5051,1984,5360,-122.93307,39.50512,1989,5370,-122.93317,39.50517,1993,5380,-122.93327,39.50527,1994,5390,-122.9333,39.50538,1996,5400,-122.93328,39.50553,1996,5410,-122.9332,39.50568,1995,5420,-122.93308,39.50582,1997,5430,-122.9329,39.50595,1999,5440,-122.9327,39.50598,2002,5450,-122.93255,39.50598,2009,5460,-122.93243,39.50595,2012,5470,-122.93237,39.5059,2011,5480,-122.93232,39.50583,2010,5490,-122.93235,39.50573,2011,5500,-122.93243,39.50567,2013,5510,-122.93255,39.50567,2017,5520,-122.93268,39.5057,2018,5530,-122.93278,39.50578,2019,5540,-122.93287,39.50593,2021,5550,-122.93295,39.50605,2022,5560,-122.93305,39.50613,2023,5570,-122.93315,39.5062,2023,5580,-122.93323,39.50618,2026,5590,-122.93328,39.50612,2027,5600,-122.93323,39.50607,2028,5610,-122.93313,39.50602,2029,5620,-122.93297,39.506,2031,5630,-122.9328,39.50605,2034,5640,-122.93267,39.50612,2036,5650,-122.93253,39.50623,2037,5660,-122.93247,39.50633,2036,5670,-122.93242,39.50648,2032,5680,-122.93242,39.50665,2032,5690,-122.93248,39.50678,2035,5700,-122.93258,39.50688,2038,5710,-122.9327,39.50693,2038,5720,-122.93282,39.50693,2038,5730,-122.9329,39.50688,2039,5740,-122.93293,39.5068,2042,5750,-122.93293,39.50673,2045,5760,-122.93292,39.50665,2046,5770,-122.93293,39.50655,2049,5780,-122.933,39.5065,2056,5790,-122.93305,39.50648,2063,5800,-122.93312,39.50652,2064,5810,-122.93322,39.50655,2062,5820,-122.93333,39.50662,2061,5830,-122.93345,39.50675,2061,5840,-122.9335,39.5069,2061,5850,-122.9335,39.50705,2062,5860,-122.93345,39.50722,2063,5870,-122.93335,39.50735,2063,5880,-122.93322,39.50745,2062,5890,-122.93303,39.50753,2064,5900,-122.93287,39.50755,2067,5910,-122.93273,39.50753,2070,5920,-122.93262,39.5075,2072,5930,-122.93253,39.50745,2075,5940,-122.93248,39.5074,2079,5950,-122.93247,39.50735,2080,5960,-122.93245,39.50727,2082,5970,-122.93248,39.5072,2084,5980,-122.93257,39.50715,2087,5990,-122.93267,39.50712,2091,6000,-122.93277,39.50713,2094,6010,-122.93288,39.50717,2095,6020,-122.933,39.50723,2096,6030,-122.93308,39.50733,2096,6040,-122.93315,39.50747,2098,6050,-122.9332,39.5076,2099,6060,-122.93323,39.50773,2098,6070,-122.93322,39.50788,2095,6080,-122.9332,39.50805,2094,6090,-122.93312,39.5082,2093,6100,-122.933,39.50835,2093,6110,-122.93287,39.50845,2094,6120,-122.93272,39.50855,2095,6130,-122.93255,39.5086,2095,6140,-122.93238,39.50862,2096,6150,-122.93225,39.50858,2097,6160,-122.93215,39.50853,2098,6170,-122.9321,39.50847,2100,6180,-122.93207,39.50842,2101,6190,-122.93208,39.50835,2103,6200,-122.9321,39.50828,2106,6210,-122.93213,39.50823,2109,6220,-122.93217,39.50818,2111,6230,-122.93222,39.50815,2113,6240,-122.93228,39.50813,2113,6250,-122.93235,39.50812,2112,6260,-122.93247,39.5081,2111,6270,-122.93258,39.5081,2110,6280,-122.93273,39.50812,2110,6290,-122.93288,39.50812,2111,6300,-122.933,39.50812,2113,6310,-122.9331,39.50808,2115,6320,-122.93315,39.50803,2116,6330,-122.93318,39.50798,2116,6340,-122.93315,39.50793,2116,6350,-122.9331,39.50788,2115,6360,-122.93298,39.50783,2114,6370,-122.93283,39.50783,2115,6380,-122.93268,39.50787,2116,6390,-122.93253,39.50792,2118,6400,-122.9324,39.508,2120,6410,-122.9323,39.50812,2122,6420,-122.93222,39.50825,2122,6430,-122.93218,39.50838,2122,6440,-122.9322,39.50852,2123,6450,-122.93228,39.50865,2122,6460,-122.9324,39.50873,2123,6470,-122.93253,39.5088,2123,6480,-122.93263,39.50882,2124,6490,-122.93272,39.50882,2121,6500,-122.93282,39.50878,2117,6510,-122.9329,39.50873,2116,6520,-122.93298,39.50868,2117,6530,-122.93307,39.50863,2119,6540,-122.93312,39.5086,2119,6550,-122.93318,39.50857,2117,6560,-122.93327,39.50853,2116,6570,-122.93335,39.5085,2115,6580,-122.93343,39.50847,2114,6590,-122.93352,39.50843,2114,6600,-122.93362,39.50842,2114,6610,-122.93372,39.50842,2114,6620,-122.93382,39.50843,2108,6630,-122.93395,39.5085,2101,6640,-122.93408,39.50862,2096,6650,-122.93422,39.50872,2094,6660,-122.93437,39.50882,2094,6670,-122.93448,39.5089,2093,6680,-122.9346,39.50898,2090,6690,-122.93472,39.50907,2085,6700,-122.93485,39.50913,2081,6710,-122.935,39.50922,2075,6720,-122.93515,39.50927,2071,6730,-122.9353,39.50933,2069,6740,-122.93543,39.50938,2068,6750,-122.93552,39.50943,2065,6760,-122.93563,39.50947,2060,6770,-122.93575,39.5095,2054,6780,-122.93588,39.50952,2050,6790,-122.93602,39.5095,2048,6800,-122.93615,39.5095,2046,6810,-122.93625,39.50947,2044,6820,-122.93635,39.50943,2041,6830,-122.93645,39.5094,2037,6840,-122.93655,39.50935,2032,6850,-122.93667,39.5093,2027,6860,-122.93673,39.50923,2024,6870,-122.93682,39.50915,2022,6880,-122.93687,39.50908,2019,6890,-122.93692,39.509,2015,6900,-122.93695,39.5089,2011,6910,-122.93695,39.5088,2009,6920,-122.93697,39.5087,2007,6930,-122.93698,39.50858,2005,6940,-122.93698,39.5085,2003,6950,-122.93698,39.50838,1998,6960,-122.937,39.50825,1996,6970,-122.937,39.50812,1997,6980,-122.937,39.50798,1998,6990,-122.93698,39.50787,1998,7000,-122.93697,39.50775,1996,7010,-122.93695,39.50763,1993,7020,-122.93693,39.50753,1990,7030,-122.93693,39.50742,1987,7040,-122.93695,39.50732,1983,7050,-122.93687,39.50673,1967,7060,-122.93663,39.5061,1948,7070,-122.93645,39.50553,1942,7080,-122.93627,39.50498,1934,7090,-122.93595,39.50445,1930,7100,-122.93558,39.50385,1917,7110,-122.93542,39.50317,1907,7120,-122.93533,39.50258,1911,7130,-122.93567,39.50247,1907,7140,-122.93553,39.50302,1897,7150,-122.93473,39.50302,1897,7160,-122.93457,39.50282,1892,7170,-122.93453,39.5027,1892,7180,-122.93452,39.50262,1893,7190,-122.93448,39.50253,1892,7200,-122.93445,39.50243,1888,7210,-122.93443,39.50233,1885,7220,-122.93442,39.50222,1883,7230,-122.93442,39.5021,1883,7240,-122.93442,39.502,1883,7250,-122.9344,39.50188,1882,7260,-122.93438,39.5018,1881,7270,-122.93433,39.50168,1879,7280,-122.93427,39.50157,1876,7290,-122.9342,39.50147,1875,7300,-122.93413,39.50135,1874,7310,-122.9341,39.50123,1875,7320,-122.9341,39.50115,1876,7330,-122.9341,39.50105,1876,7340,-122.93415,39.50097,1873,7350,-122.9342,39.5009,1871,7360,-122.93425,39.50082,1871,7370,-122.93432,39.50077,1872,7380,-122.93437,39.50072,1871,7390,-122.93443,39.50068,1868,7400,-122.93452,39.50063,1864,7410,-122.9346,39.50058,1863,7420,-122.93468,39.50053,1862,7430,-122.93477,39.50047,1859,7440,-122.93487,39.50042,1857,7450,-122.93495,39.50037,1856,7460,-122.93505,39.5003,1856,7470,-122.9351,39.50023,1856,7480,-122.93513,39.50018,1855,7490,-122.93517,39.50012,1854,7500,-122.9352,39.50005,1853,7510,-122.93522,39.49998,1851,7520,-122.93523,39.4999,1849,7530,-122.93523,39.49983,1848,7540,-122.93522,39.49975,1847,7550,-122.93522,39.49968,1846,7560,-122.93522,39.4996,1844,7570,-122.93522,39.4995,1843,7580,-122.93522,39.4994,1845,7590,-122.93522,39.4993,1847,7600,-122.93522,39.4992,1850,7610,-122.93518,39.49912,1852,7620,-122.93512,39.49903,1856,7630,-122.93503,39.499,1860,7640,-122.93493,39.49898,1861,7650,-122.93482,39.499,1861,7660,-122.93468,39.49905,1859,7670,-122.93453,39.49913,1858,7680,-122.93442,39.4993,1858,7690,-122.9344,39.49945,1861,7700,-122.9344,39.49958,1866,7710,-122.93445,39.4997,1868,7720,-122.93453,39.49978,1869,7730,-122.93465,39.49987,1869,7740,-122.93477,39.4999,1869,7750,-122.93488,39.4999,1871,7760,-122.93498,39.49987,1873,7770,-122.93503,39.49982,1876,7780,-122.93503,39.49975,1878,7790,-122.93503,39.49968,1879,7800,-122.93498,39.49962,1882,7810,-122.93488,39.49958,1884,7820,-122.93475,39.49955,1884,7830,-122.9346,39.49955,1886,7840,-122.93442,39.4996,1887,7850,-122.93427,39.49968,1890,7860,-122.93415,39.4998,1894,7870,-122.93408,39.4999,1897,7880,-122.93405,39.50003,1898,7890,-122.93405,39.50017,1898,7900,-122.93412,39.50028,1898,7910,-122.93422,39.5004,1897,7920,-122.93437,39.50047,1899,7930,-122.93447,39.5005,1901,7940,-122.9346,39.5005,1903,7950,-122.93468,39.50048,1904,7960,-122.93472,39.50043,1906,7970,-122.93473,39.50037,1909,7980,-122.93473,39.50032,1911,7990,-122.93468,39.50027,1913,8000,-122.93462,39.5002,1915,8010,-122.93452,39.50017,1918,8020,-122.93437,39.50015,1921,8030,-122.93422,39.50017,1923,8040,-122.93405,39.50022,1923,8050,-122.93385,39.50033,1923,8060,-122.93375,39.50045,1924,8070,-122.9337,39.50062,1925,8080,-122.93373,39.50078,1928,8090,-122.93382,39.50088,1930,8100,-122.93395,39.50095,1931,8110,-122.93407,39.50097,1931,8120,-122.93415,39.50093,1932,8130,-122.9342,39.50088,1933,8140,-122.9342,39.50082,1935,8150,-122.93415,39.50075,1938,8160,-122.93403,39.50072,1941,8170,-122.9339,39.5007,1943,8180,-122.93373,39.5007,1945,8190,-122.93358,39.50075,1947,8200,-122.9334,39.50085,1949,8210,-122.93327,39.50097,1952,8220,-122.93318,39.5011,1954,8230,-122.93317,39.50125,1955,8240,-122.93322,39.50138,1955,8250,-122.93332,39.5015,1954,8260,-122.93345,39.50157,1954,8270,-122.93358,39.50158,1954,8280,-122.93368,39.50157,1955,8290,-122.93378,39.50152,1956,8300,-122.93382,39.50145,1956,8310,-122.93385,39.50138,1956,8320,-122.93385,39.50128,1955,8330,-122.9338,39.5012,1958,8340,-122.93373,39.50113,1962,8350,-122.93363,39.5011,1963,8360,-122.9335,39.50107,1963,8370,-122.93333,39.50107,1964,8380,-122.93315,39.5011,1963,8390,-122.93297,39.50117,1964,8400,-122.9328,39.5013,1965,8410,-122.93272,39.50145,1969,8420,-122.9327,39.50162,1973,8430,-122.93275,39.50175,1975,8440,-122.93285,39.50183,1978,8450,-122.933,39.50187,1979,8460,-122.9331,39.50185,1979,8470,-122.93318,39.5018,1981,8480,-122.9332,39.50172,1983,8490,-122.93317,39.50167,1985,8500,-122.93308,39.5016,1988,8510,-122.93297,39.50158,1989,8520,-122.93282,39.50158,1990,8530,-122.93263,39.50162,1993,8540,-122.9325,39.50172,1994,8550,-122.93237,39.50183,1995,8560,-122.93232,39.502,1997,8570,-122.93233,39.50213,1999,8580,-122.93242,39.50227,2003,8590,-122.93252,39.50233,2005,8600,-122.93263,39.50237,2006,8610,-122.93275,39.50235,2006,8620,-122.93283,39.50232,2005,8630,-122.93288,39.50223,2003,8640,-122.93287,39.50212,2004,8650,-122.9328,39.50205,2004,8660,-122.93265,39.50198,2004,8670,-122.9325,39.50197,2005,8680,-122.93232,39.50198,2006,8690,-122.93212,39.50203,2008,8700,-122.93197,39.50213,2012,8710,-122.93185,39.50225,2014,8720,-122.93178,39.5024,2016,8730,-122.93178,39.50255,2018,8740,-122.93185,39.50268,2021,8750,-122.93195,39.50277,2023,8760,-122.93205,39.50282,2024,8770,-122.93217,39.50285,2025,8780,-122.93227,39.50282,2025,8790,-122.93235,39.50277,2025,8800,-122.93242,39.50268,2025,8810,-122.93242,39.50258,2024,8820,-122.93237,39.50248,2024,8830,-122.93228,39.5024,2023,8840,-122.93217,39.50233,2023,8850,-122.93202,39.5023,2023,8860,-122.93185,39.50227,2023,8870,-122.93167,39.50228,2025,8880,-122.93147,39.50232,2028,8890,-122.93133,39.5024,2030,8900,-122.93118,39.5025,2031,8910,-122.93113,39.50265,2033,8920,-122.93112,39.50278,2035,8930,-122.93118,39.50292,2038,8940,-122.93128,39.503,2040,8950,-122.9314,39.50302,2041,8960,-122.9315,39.50298,2040,8970,-122.93155,39.5029,2041,8980,-122.93157,39.50282,2041,8990,-122.93147,39.50273,2043,9000,-122.93137,39.50268,2044,9010,-122.93122,39.50265,2045,9020,-122.93107,39.50265,2045,9030,-122.9309,39.50268,2045,9040,-122.93073,39.50277,2046,9050,-122.9306,39.50288,2049,9060,-122.93053,39.50303,2052,9070,-122.9305,39.50315,2055,9080,-122.93052,39.50327,2057,9090,-122.93057,39.50338,2059,9100,-122.93065,39.50347,2060,9110,-122.93077,39.50352,2062,9120,-122.93088,39.50352,2062,9130,-122.93098,39.5035,2063,9140,-122.93107,39.50343,2062,9150,-122.9311,39.50335,2063,9160,-122.93112,39.50325,2063,9170,-122.93108,39.50315,2063,9180,-122.93102,39.50307,2063,9190,-122.93093,39.50298,2064,9200,-122.9308,39.50292,2064,9210,-122.93068,39.50287,2064,9220,-122.93052,39.50283,2065,9230,-122.93035,39.50285,2065,9240,-122.93022,39.50292,2065,9250,-122.93007,39.50302,2066,9260,-122.93,39.50313,2066,9270,-122.93,39.50327,2066,9280,-122.93005,39.5034,2067,9290,-122.93015,39.5035,2068,9300,-122.93027,39.50355,2069,9310,-122.93038,39.50355,2070,9320,-122.9305,39.50353,2070,9330,-122.9306,39.50348,2069,9340,-122.93065,39.5034,2065,9350,-122.93068,39.5033,2063,9360,-122.93065,39.50318,2064,9370,-122.9306,39.50308,2062,9380,-122.93048,39.50298,2059,9390,-122.93033,39.50292,2057,9400,-122.93017,39.50288,2055,9410,-122.92998,39.50288,2054,9420,-122.9298,39.50293,2052,9430,-122.92963,39.503,2050,9440,-122.9295,39.50313,2048,9450,-122.92943,39.50327,2047,9460,-122.92945,39.5034,2048,9470,-122.92945,39.5034,2048,9480,-122.9295,39.5035,2049,9490,-122.92958,39.5036,2050,9500,-122.9297,39.50367,2051,9510,-122.9298,39.5037,2052,9520,-122.92992,39.50368,2053,9530,-122.93002,39.50363,2052,9540,-122.93007,39.50355,2051,9550,-122.93008,39.50343,2048,9560,-122.93002,39.50332,2046,9570,-122.92992,39.50322,2044,9580,-122.92975,39.50315,2041,9590,-122.92957,39.50312,2039,9600,-122.92935,39.50315,2037,9610,-122.92917,39.50323,2033,9620,-122.92903,39.50337,2031,9630,-122.92895,39.50353,2029,9640,-122.92897,39.50367,2029,9650,-122.92903,39.5038,2030,9660,-122.92913,39.5039,2033,9670,-122.92923,39.50397,2036,9680,-122.92935,39.50402,2037,9690,-122.92947,39.50405,2036,9700,-122.92958,39.50403,2035,9710,-122.9297,39.50398,2031,9720,-122.92982,39.50392,2028,9730,-122.92992,39.50388,2028,9740,-122.93002,39.50388,2028,9750,-122.93008,39.5039,2028,9760,-122.93015,39.50395,2023,9770,-122.93022,39.50403,2015,9780,-122.93032,39.50412,2013,9790,-122.93043,39.5042,2013,9800,-122.93053,39.50423,2014,9810,-122.93063,39.50423,2013,9820,-122.93073,39.50422,2011,9830,-122.9308,39.50415,2007,9840,-122.93085,39.50407,2004,9850,-122.9309,39.50395,2002,9860,-122.93095,39.50387,2001,9870,-122.93098,39.50377,2001,9880,-122.93102,39.50368,2000,9890,-122.93105,39.50358,1999,9900,-122.93107,39.50348,1998,9910,-122.93108,39.5034,1997,9920,-122.93108,39.5033,1993,9930,-122.9311,39.50317,1989,9940,-122.93113,39.50307,1987,9950,-122.93117,39.50295,1989,9960,-122.93118,39.50288,1990,9970,-122.93123,39.5028,1988,9980,-122.93127,39.50272,1983,9990,-122.93133,39.50262,1980,10000,-122.93142,39.50252,1979,10010,-122.93148,39.50242,1980,10020,-122.93153,39.50235,1980,10030,-122.93155,39.50225,1979,10040,-122.93153,39.50217,1978,10050,-122.93147,39.50208,1976,10060,-122.93133,39.50202,1971,10070,-122.93117,39.50198,1967,10080,-122.93098,39.50202,1963,10090,-122.93078,39.5021,1960,10100,-122.93067,39.5022,1961,10110,-122.93057,39.50232,1961,10120,-122.93052,39.50242,1961,10130,-122.93048,39.50253,1960,10140,-122.93047,39.50263,1958,10150,-122.9305,39.50272,1956,10160,-122.93057,39.50278,1954,10170,-122.93065,39.50285,1951,10180,-122.93075,39.50287,1949,10190,-122.93087,39.50285,1945,10200,-122.93097,39.50282,1941,10210,-122.93107,39.50275,1939,10220,-122.93115,39.50267,1936,10230,-122.93122,39.5026,1934,10240,-122.93128,39.50252,1932,10250,-122.93135,39.50242,1929,10260,-122.93142,39.50233,1926,10270,-122.93148,39.50225,1924,10280,-122.93152,39.50218,1924,10290,-122.93157,39.50212,1923,10300,-122.93163,39.50205,1920,10310,-122.93172,39.50202,1915,10320,-122.9318,39.50195,1909,10330,-122.93188,39.50187,1904,10340,-122.93197,39.50178,1900,10350,-122.93208,39.5017,1896,10360,-122.93218,39.50162,1896,10370,-122.93228,39.50157,1897,10380,-122.93237,39.50152,1897,10390,-122.93243,39.50147,1894,10400,-122.93252,39.50142,1891,10410,-122.93262,39.50137,1890,10420,-122.93268,39.50132,1888,10430,-122.93302,39.50147,1877,10440,-122.9323,39.5019,1865,10450,-122.93167,39.50163,1851,10460,-122.93178,39.50137,1842,10470,-122.93185,39.5013,1840,10480,-122.93193,39.50122,1838,10490,-122.93202,39.50115,1835,10500,-122.9321,39.50108,1833,10510,-122.93218,39.50102,1831,10520,-122.93227,39.50095,1829,10530,-122.93235,39.50088,1827,10540,-122.93243,39.50082,1824,10550,-122.9325,39.50075,1822,10560,-122.93258,39.50067,1819,10570,-122.93263,39.5006,1818,10580,-122.93268,39.50053,1816,10590,-122.93275,39.50045,1813,10600,-122.93282,39.50038,1811,10610,-122.93288,39.5003,1807,10620,-122.93295,39.50023,1804,10630,-122.93307,39.50017,1800,10640,-122.93318,39.5001,1795,10650,-122.9333,39.50005,1793,10660,-122.93342,39.5,1791,10670,-122.93353,39.49995,1789,10680,-122.93363,39.49992,1787,10690,-122.93373,39.49987,1784,10700,-122.93385,39.49982,1782,10710,-122.93393,39.49978,1779,10720,-122.93403,39.49973,1777,10730,-122.93412,39.4997,1775,10740,-122.9342,39.49965,1773,10750,-122.9343,39.4996,1769,10760,-122.93438,39.49955,1764,10770,-122.93478,39.49922,1749,10780,-122.93517,39.49888,1733,10790,-122.93577,39.49863,1739,10800,-122.93617,39.49847,1742,10810,-122.93622,39.49908,1743,10820,-122.93563,39.4991,1748,10830,-122.936,39.49908,1753,10840,-122.93605,39.49922,1753,10850,-122.93602,39.49937,1753,10860,-122.93592,39.49948,1754,10870,-122.93577,39.49958,1756,10880,-122.9356,39.4996,1756,10890,-122.93545,39.49957,1755,10900,-122.93535,39.49948,1755,10910,-122.93535,39.4994,1756,10920,-122.9354,39.49933,1756,10930,-122.93548,39.49932,1757,10940,-122.93558,39.49932,1758,10950,-122.9357,39.49937,1758,10960,-122.93577,39.49947,1759,10970,-122.93582,39.4996,1759,10980,-122.9358,39.49973,1759,10990,-122.93568,39.49987,1759,11000,-122.9355,39.49995,1761,11010,-122.93533,39.49997,1763,11020,-122.9352,39.49995,1763,11030,-122.93508,39.49992,1763,11040,-122.93505,39.49985,1761,11050,-122.9351,39.49978,1759,11060,-122.93522,39.49975,1759,11070,-122.93533,39.49977,1759,11080,-122.93545,39.49982,1760,11090,-122.93557,39.49988,1763,11100,-122.93565,39.49997,1765,11110,-122.9357,39.50007,1767,11120,-122.93573,39.50018,1767,11130,-122.93573,39.50033,1765,11140,-122.9357,39.50047,1762,11150,-122.9356,39.50062,1761,11160,-122.93547,39.50077,1761,11170,-122.93533,39.50087,1762,11180,-122.93518,39.50093,1763,11190,-122.93503,39.501,1763,11200,-122.93488,39.50103,1760,11210,-122.93472,39.50103,1757,11220,-122.93457,39.501,1757,11230,-122.93445,39.50095,1757,11240,-122.93438,39.50088,1758,11250,-122.93437,39.50083,1758,11260,-122.9344,39.50077,1756,11270,-122.93448,39.50073,1755,11280,-122.93458,39.50073,1756,11290,-122.9347,39.50075,1758,11300,-122.9348,39.50078,1760,11310,-122.9349,39.5008,1761,11320,-122.93502,39.50083,1762,11330,-122.9351,39.50083,1762,11340,-122.93517,39.50083,1762,11350,-122.93522,39.5008,1763,11360,-122.93523,39.50077,1763,11370,-122.93525,39.50072,1763,11380,-122.93525,39.50067,1763,11390,-122.93525,39.50062,1764,11400,-122.93527,39.50055,1766,11410,-122.93527,39.5005,1766,11420,-122.93528,39.50045,1766,11430,-122.93533,39.50042,1765,11440,-122.93538,39.5004,1764,11450,-122.93545,39.50042,1763,11460,-122.9355,39.50047,1760,11470,-122.93558,39.50053,1756,11480,-122.93568,39.50065,1750,11490,-122.9358,39.50077,1747,11500,-122.93592,39.50087,1744,11510,-122.93605,39.50087,1750,11520,-122.93615,39.50088,1751,11530,-122.93623,39.50088,1751,11540,-122.9363,39.50087,1751,11550,-122.93637,39.50085,1751,11560,-122.93643,39.50083,1750,11570,-122.93648,39.5008,1749,11580,-122.93653,39.50075,1748,11590,-122.93655,39.50068,1747,11600,-122.93655,39.50062,1747,11610,-122.93653,39.50053,1749,11620,-122.93652,39.50047,1749,11630,-122.93648,39.5004,1749,11640,-122.93643,39.50032,1751,11650,-122.93638,39.50023,1753,11660,-122.93633,39.50018,1754,11670,-122.93628,39.50012,1753,11680,-122.93622,39.50005,1753,11690,-122.93617,39.49997,1753,11700,-122.9361,39.49988,1751,11710,-122.93605,39.49982,1751,11720,-122.93605,39.49973,1751,11730,-122.93607,39.49968,1752,11740,-122.93612,39.49967,1753,11750,-122.93618,39.49967,1753,11760,-122.93627,39.49972,1753,11770,-122.93635,39.49985,1752,11780,-122.93638,39.49998,1753,11790,-122.93635,39.50015,1757,11800,-122.93627,39.50028,1762,11810,-122.93615,39.5004,1763,11820,-122.93598,39.50048,1762,11830,-122.9358,39.50057,1761,11840,-122.93563,39.5006,1760,11850,-122.93543,39.50045,1761,11860,-122.93533,39.50037,1760,11870,-122.93528,39.50028,1759,11880,-122.93528,39.5002,1758,11890,-122.9353,39.50013,1757,11900,-122.93533,39.50008,1758,11910,-122.9354,39.50005,1759,11920,-122.93545,39.50003,1760,11930,-122.93552,39.50003,1759,11940,-122.93558,39.50005,1759,11950,-122.93565,39.50008,1760,11960,-122.93573,39.50013,1761,11970,-122.93582,39.50017,1760,11980,-122.9359,39.5002,1757,11990,-122.936,39.50025,1753,12000,-122.93612,39.50027,1750,12010,-122.93625,39.50028,1747,12020,-122.93635,39.50025,1745,12030,-122.93643,39.50022,1743,12040,-122.9365,39.50018,1741,12050,-122.93653,39.50013,1739,12060,-122.93657,39.50008,1736,12070,-122.93658,39.50002,1731,12080,-122.93658,39.49993,1729,12090,-122.93655,39.49983,1728,12100,-122.9365,39.49978,1728,12110,-122.93643,39.49972,1726,12120,-122.93635,39.49965,1724,12130,-122.93627,39.4996,1722,12140,-122.9362,39.49953,1721,12150,-122.93612,39.49945,1719,12160,-122.93605,39.49938,1718,12170,-122.93595,39.4993,1717,12180,-122.93588,39.49923,1717,12190,-122.9358,39.49918,1716,12200,-122.9357,39.4991,1715,12210,-122.93562,39.49903,1715,12220,-122.93552,39.49898,1717,12230,-122.93542,39.49892,1716,12240,-122.93533,39.49887,1715,12250,-122.93525,39.49878,1713,12260,-122.93525,39.49858,1697,12270,-122.93578,39.49835,1686,12280,-122.93625,39.49823,1697,12290,-122.93633,39.49793,1706,12300,-122.93563,39.49818,1708,12310,-122.936,39.49847,1719,12320,-122.93622,39.49838,1724,12330,-122.93628,39.49833,1727,12340,-122.9363,39.49825,1731,12350,-122.93628,39.49818,1733,12360,-122.9362,39.49812,1735,12370,-122.93607,39.49808,1735,12380,-122.93593,39.49808,1735,12390,-122.93573,39.49815,1736,12400,-122.93558,39.49827,1735,12410,-122.9355,39.49842,1740,12420,-122.93548,39.49857,1746,12430,-122.9355,39.49867,1749,12440,-122.93557,39.49875,1749,12450,-122.9357,39.49882,1750,12460,-122.93582,39.49882,1751,12470,-122.9359,39.49878,1750,12480,-122.93593,39.49872,1748,12490,-122.93588,39.49863,1750,12500,-122.93577,39.49857,1752,12510,-122.93562,39.49853,1756,12520,-122.93543,39.49853,1760,12530,-122.93523,39.49857,1763,12540,-122.93507,39.49863,1764,12550,-122.9349,39.49873,1765,12560,-122.93477,39.49887,1769,12570,-122.93468,39.49902,1772,12580,-122.93467,39.4992,1775,12590,-122.93467,39.49932,1776,12600,-122.93473,39.49943,1776,12610,-122.93483,39.49953,1774,12620,-122.93493,39.49957,1771,12630,-122.93507,39.49957,1767,12640,-122.93518,39.49952,1769,12650,-122.93527,39.49947,1771,12660,-122.93532,39.4994,1771,12670,-122.93532,39.49933,1770,12680,-122.93525,39.49923,1768,12690,-122.93517,39.4991,1767,12700,-122.93517,39.49898,1767,12710,-122.93523,39.49888,1769,12720,-122.9353,39.4988,1772,12730,-122.93535,39.49875,1776,12740,-122.93543,39.4987,1778,12750,-122.93552,39.49867,1779,12760,-122.93563,39.49863,1780,12770,-122.93577,39.4986,1784,12780,-122.9359,39.49858,1787,12790,-122.93603,39.49858,1787,12800,-122.93615,39.49857,1787,12810,-122.93625,39.49853,1788,12820,-122.93633,39.49847,1789,12830,-122.93633,39.49842,1789,12840,-122.93628,39.49833,1792,12850,-122.9362,39.49828,1794,12860,-122.93608,39.49823,1795,12870,-122.93592,39.49822,1797,12880,-122.93573,39.49825,1798,12890,-122.93558,39.49833,1799,12900,-122.93545,39.49847,1800,12910,-122.93542,39.4986,1802,12920,-122.93545,39.49872,1806,12930,-122.93553,39.4988,1809,12940,-122.93563,39.49883,1810,12950,-122.93575,39.49883,1812,12960,-122.9358,39.49878,1815,12970,-122.9358,39.49873,1817,12980,-122.93575,39.49867,1819,12990,-122.93567,39.49862,1819,13000,-122.93553,39.49857,1820,13010,-122.93535,39.49853,1823,13020,-122.93518,39.49855,1823,13030,-122.935,39.49862,1824,13040,-122.93485,39.49872,1827,13050,-122.93477,39.49882,1831,13060,-122.93472,39.49892,1833,13070,-122.93472,39.49903,1833,13080,-122.93478,39.49913,1833,13090,-122.93492,39.49923,1832,13100,-122.93505,39.49928,1832,13110,-122.93517,39.49925,1839,13120,-122.93525,39.49923,1841,13130,-122.9353,39.49918,1841,13140,-122.9353,39.4991,1841,13150,-122.93525,39.499,1840,13160,-122.93517,39.49887,1842,13170,-122.93513,39.49875,1846,13180,-122.93515,39.49865,1851,13190,-122.93522,39.49857,1854,13200,-122.93532,39.49853,1855,13210,-122.93543,39.49857,1856,13220,-122.93555,39.49863,1860,13230,-122.93562,39.49875,1861,13240,-122.93563,39.49888,1861,13250,-122.93558,39.49905,1862,13260,-122.93548,39.49917,1863,13270,-122.93532,39.49927,1865,13280,-122.93515,39.49932,1867,13290,-122.935,39.49933,1868,13300,-122.93485,39.4993,1869,13310,-122.93475,39.49923,1870,13320,-122.9347,39.49915,1872,13330,-122.9347,39.49907,1875,13340,-122.93475,39.49902,1877,13350,-122.93482,39.499,1878,13360,-122.93493,39.499,1878,13370,-122.93505,39.49905,1878,13380,-122.93515,39.49917,1881,13390,-122.9352,39.49928,1883,13400,-122.93518,39.49943,1885,13410,-122.93512,39.49957,1884,13420,-122.935,39.49968,1883,13430,-122.93482,39.4998,1883,13440,-122.93465,39.49987,1883,13450,-122.93447,39.49985,1884,13460,-122.9343,39.49983,1885,13470,-122.93418,39.49977,1885,13480,-122.9341,39.4997,1885,13490,-122.93405,39.4996,1888,13500,-122.93407,39.49953,1892,13510,-122.93413,39.49948,1895,13520,-122.93422,39.49948,1899,13530,-122.93432,39.49952,1901,13540,-122.9344,39.4996,1902,13550,-122.93447,39.49972,1902,13560,-122.93448,39.49985,1904,13570,-122.93445,39.5,1905,13580,-122.93435,39.50013,1905,13590,-122.9342,39.50027,1905,13600,-122.93403,39.50033,1905,13610,-122.93383,39.50037,1904,13620,-122.93365,39.50037,1906,13630,-122.93352,39.50032,1905,13640,-122.93342,39.50025,1904,13650,-122.9334,39.50015,1903,13660,-122.93347,39.5001,1905,13670,-122.93358,39.50007,1908,13680,-122.9337,39.50008,1911,13690,-122.93378,39.50015,1913,13700,-122.93385,39.50025,1915,13710,-122.93388,39.50037,1916,13720,-122.93387,39.5005,1914,13730,-122.9338,39.50067,1913,13740,-122.93367,39.5008,1913,13750,-122.93348,39.50092,1915,13760,-122.93332,39.50097,1916,13770,-122.93315,39.50098,1916,13780,-122.933,39.50097,1915,13790,-122.93288,39.50092,1912,13800,-122.93278,39.50085,1910,13810,-122.93275,39.50073,1910,13820,-122.9328,39.50067,1911,13830,-122.93288,39.50062,1911,13840,-122.93298,39.50058,1909,13850,-122.93313,39.50058,1908,13860,-122.93328,39.5006,1913,13870,-122.9334,39.50062,1916,13880,-122.93352,39.5006,1918,13890,-122.93358,39.50058,1920,13900,-122.93363,39.50055,1921,13910,-122.93365,39.50048,1921,13920,-122.93363,39.50042,1921,13930,-122.93357,39.50033,1921,13940,-122.93347,39.50027,1924,13950,-122.93335,39.50022,1927,13960,-122.93322,39.50017,1928,13970,-122.93307,39.50008,1929,13980,-122.93297,39.50002,1929,13990,-122.93298,39.49992,1934,14000,-122.93305,39.49985,1937,14010,-122.93313,39.49982,1938,14020,-122.93323,39.49982,1938,14030,-122.93335,39.49985,1936,14040,-122.93345,39.49993,1937,14050,-122.93353,39.50005,1938,14060,-122.93357,39.50015,1939,14070,-122.9336,39.50027,1939,14080,-122.93358,39.5004,1938,14090,-122.93355,39.50053,1937,14100,-122.93348,39.50067,1937,14110,-122.93338,39.50078,1937,14120,-122.93327,39.50088,1939,14130,-122.93312,39.50098,1941,14140,-122.933,39.50105,1941,14150,-122.93283,39.50113,1940,14160,-122.93265,39.50118,1941,14170,-122.9325,39.50122,1941,14180,-122.9323,39.50123,1940,14190,-122.9321,39.50122,1940,14200,-122.93195,39.50118,1943,14210,-122.93185,39.5011,1945,14220,-122.93183,39.50103,1945,14230,-122.93185,39.50095,1946,14240,-122.93193,39.5009,1949,14250,-122.93203,39.50088,1951,14260,-122.93217,39.50092,1952,14270,-122.93223,39.50102,1954,14280,-122.93227,39.50113,1956,14290,-122.93223,39.50128,1957,14300,-122.93213,39.50142,1958,14310,-122.93197,39.50153,1960,14320,-122.93178,39.50158,1961,14330,-122.93162,39.5016,1962,14340,-122.93143,39.50158,1964,14350,-122.9313,39.50155,1964,14360,-122.93117,39.50148,1964,14370,-122.93107,39.5014,1965,14380,-122.93105,39.5013,1967,14390,-122.9311,39.50122,1969,14400,-122.93118,39.50118,1970,14410,-122.9313,39.50118,1973,14420,-122.93138,39.50125,1975,14430,-122.93145,39.50137,1976,14440,-122.93145,39.5015,1977,14450,-122.9314,39.50165,1979,14460,-122.9313,39.50177,1981,14470,-122.93113,39.50188,1981,14480,-122.93113,39.50188,1981,14490,-122.93093,39.50193,1983,14500,-122.93078,39.50193,1984,14510,-122.93062,39.5019,1987,14520,-122.9305,39.50183,1988,14530,-122.93043,39.50177,1989,14540,-122.93042,39.50168,1989,14550,-122.93047,39.5016,1989,14560,-122.93057,39.50157,1991,14570,-122.93067,39.50158,1993,14580,-122.93077,39.50163,1994,14590,-122.93085,39.50173,1995,14600,-122.93088,39.50185,1995,14610,-122.93087,39.502,1997,14620,-122.9308,39.50213,2000,14630,-122.93067,39.50225,2001,14640,-122.93048,39.50232,2001,14650,-122.9303,39.50232,2002,14660,-122.93015,39.50228,2002,14670,-122.9301,39.50217,2002,14680,-122.93012,39.50207,2001,14690,-122.93018,39.50203,2004,14700,-122.93028,39.50202,2006,14710,-122.93037,39.50205,2006,14720,-122.93045,39.50215,2005,14730,-122.9305,39.50227,2005,14740,-122.93052,39.5024,2006,14750,-122.93053,39.50255,2006,14760,-122.93057,39.50267,2007,14770,-122.93065,39.50277,2007,14780,-122.93075,39.50282,2010,14790,-122.93082,39.50283,2009,14800,-122.93088,39.5028,2008,14810,-122.93095,39.50275,2005,14820,-122.93097,39.50265,2003,14830,-122.93092,39.50253,2002,14840,-122.93083,39.50245,2001,14850,-122.93072,39.50235,2001,14860,-122.93057,39.5023,2002,14870,-122.93042,39.50228,2003,14880,-122.93022,39.5023,2003,14890,-122.93007,39.50237,2004,14900,-122.92992,39.50245,2003,14910,-122.9298,39.50258,2003,14920,-122.92973,39.5027,2003,14930,-122.92972,39.50283,2004,14940,-122.92975,39.50293,2005,14950,-122.92978,39.50302,2006,14960,-122.92983,39.50308,2006,14970,-122.9299,39.50312,2006,14980,-122.92997,39.50315,2005,14990,-122.93005,39.50315,2003,15000,-122.93013,39.50315,2001,15010,-122.93023,39.50312,2000,15020,-122.93032,39.50305,2000,15030,-122.93037,39.50297,2002,15040,-122.9304,39.50287,2003,15050,-122.9304,39.50278,2004,15060,-122.93037,39.5027,2004,15070,-122.93033,39.50262,2002,15080,-122.93028,39.50252,2000,15090,-122.93023,39.50242,1999,15100,-122.93015,39.50233,1999,15110,-122.93005,39.50225,1999,15120,-122.92993,39.50218,1998,15130,-122.92982,39.50213,1997,15140,-122.92968,39.5021,1993,15150,-122.92953,39.50203,1988,15160,-122.92942,39.50195,1985,15170,-122.92932,39.50185,1985,15180,-122.92927,39.50173,1984,15190,-122.92928,39.50165,1984,15200,-122.92932,39.50158,1982,15210,-122.9294,39.50153,1980,15220,-122.9295,39.5015,1977,15230,-122.92962,39.50148,1976,15240,-122.92973,39.50148,1975,15250,-122.92985,39.5015,1974,15260,-122.92997,39.50153,1973,15270,-122.93008,39.50157,1971,15280,-122.93023,39.50162,1970,15290,-122.93035,39.50167,1971,15300,-122.93047,39.50168,1972,15310,-122.93058,39.5017,1973,15320,-122.93067,39.5017,1973,15330,-122.93077,39.50172,1972,15340,-122.93087,39.5017,1970,15350,-122.93097,39.5017,1969,15360,-122.93107,39.5017,1966,15370,-122.93118,39.5017,1963,15380,-122.93132,39.50172,1961,15390,-122.93147,39.50173,1959,15400,-122.93158,39.50173,1958,15410,-122.9321,39.50158,1953,15420,-122.93253,39.50128,1954,15430,-122.93303,39.50127,1948,15440,-122.9335,39.50163,1948,15450,-122.93335,39.50227,1940,15460,-122.93292,39.50223,1930,15470,-122.93285,39.50215,1929,15480,-122.93282,39.50205,1929,15490,-122.9328,39.50197,1928,15500,-122.93283,39.5019,1927,15510,-122.93287,39.50182,1928,15520,-122.9329,39.50177,1927,15530,-122.93295,39.50172,1925,15540,-122.93303,39.50165,1925,15550,-122.9331,39.5016,1928,15560,-122.93317,39.50155,1930,15570,-122.93322,39.5015,1931,15580,-122.93325,39.50145,1931,15590,-122.93328,39.50138,1931,15600,-122.93333,39.50132,1932,15610,-122.9334,39.50127,1931,15620,-122.9335,39.50123,1933,15630,-122.93358,39.50127,1935,15640,-122.93368,39.50132,1935,15650,-122.93377,39.50142,1934,15660,-122.93383,39.50153,1933,15670,-122.93387,39.50168,1932,15680,-122.93383,39.50185,1932,15690,-122.93373,39.502,1933,15700,-122.93358,39.50212,1935,15710,-122.9334,39.50218,1936,15720,-122.93323,39.5022,1936,15730,-122.93307,39.50217,1936,15740,-122.93297,39.50212,1936,15750,-122.9329,39.50205,1936,15760,-122.9329,39.50198,1938,15770,-122.93295,39.50197,1936,15780,-122.93302,39.50195,1935,15790,-122.9331,39.50197,1934,15800,-122.9332,39.50202,1934,15810,-122.93328,39.50212,1933,15820,-122.93337,39.50222,1932,15830,-122.93342,39.50237,1931,15840,-122.93342,39.50253,1931,15850,-122.93337,39.50268,1932,15860,-122.93327,39.50282,1933,15870,-122.93313,39.50292,1934,15880,-122.93298,39.50298,1934,15890,-122.9328,39.50302,1935,15900,-122.93267,39.50302,1936,15910,-122.93253,39.50297,1936,15920,-122.93243,39.50292,1936,15930,-122.93242,39.50285,1935,15940,-122.93245,39.5028,1934,15950,-122.93252,39.50278,1934,15960,-122.93258,39.50277,1932,15970,-122.9327,39.50277,1929,15980,-122.93282,39.50278,1927,15990,-122.93295,39.5028,1927,16000,-122.93307,39.5028,1927,16010,-122.93317,39.5028,1928,16020,-122.93323,39.50278,1927,16030,-122.9333,39.50277,1925,16040,-122.93335,39.50273,1922,16050,-122.9334,39.50268,1915,16060,-122.93347,39.50262,1908,16070,-122.93353,39.50252,1903,16080,-122.93362,39.50243,1903,16090,-122.93365,39.50237,1905,16100,-122.93367,39.50232,1907,16110,-122.93368,39.50227,1908,16120,-122.93368,39.50223,1905,16130,-122.9337,39.50217,1900,16140,-122.93373,39.5021,1897,16150,-122.93377,39.50202,1899,16160,-122.93378,39.50195,1901,16170,-122.93378,39.5019,1900,16180,-122.93382,39.50183,1899,16190,-122.93383,39.50177,1898,16200,-122.93387,39.5017,1898,16210,-122.9339,39.50163,1896,16220,-122.93393,39.50157,1894,16230,-122.93397,39.5015,1892,16240,-122.93407,39.50115,1873,16250,-122.9341,39.50062,1862,16260,-122.93403,39.5001,1848,16270,-122.93383,39.49948,1839,16280,-122.93358,39.49892,1833,16290,-122.93328,39.49837,1828,16300,-122.93292,39.49788,1815,16310,-122.9326,39.49735,1800,16320,-122.93222,39.4968,1786,16330,-122.93188,39.49625,1775,16340,-122.93157,39.49568,1759,16350,-122.93127,39.49512,1746,16360,-122.93097,39.49458,1731,16370,-122.93072,39.4941,1720,16380,-122.93053,39.49353,1721,16390,-122.93033,39.493,1728,16400,-122.9301,39.49247,1728,16410,-122.93002,39.49192,1709,16420,-122.93,39.49135,1697,16430,-122.92987,39.49075,1687,16440,-122.9297,39.49017,1675,16450,-122.92952,39.4896,1668,16460,-122.9295,39.4891,1669,16470,-122.92942,39.4886,1675,16480,-122.92933,39.48797,1663,16490,-122.92928,39.48737,1663,16500,-122.92922,39.48675,1648,16510,-122.92917,39.48617,1637,16520,-122.92907,39.48562,1624,16530,-122.92898,39.48517,1619,16540,-122.92895,39.48473,1598,16550,-122.92912,39.48413,1595,16560,-122.92912,39.4835,1588,16570,-122.92917,39.48288,1587,16580,-122.92935,39.48238,1588,16590,-122.92967,39.48192,1582,16600,-122.92993,39.4815,1575,16610,-122.9302,39.4811,1572,16620,-122.93047,39.48068,1560,16630,-122.93072,39.4802,1549,16640,-122.93113,39.4798,1541,16650,-122.93157,39.47938,1527,16660,-122.93192,39.47892,1519,16670,-122.93225,39.47847,1523,16680,-122.93258,39.47808,1521,16690,-122.9329,39.47765,1510,16700,-122.93322,39.47722,1500,16710,-122.93363,39.47685,1499,16720,-122.93398,39.47647,1486,16730,-122.93443,39.4761,1475,16740,-122.93483,39.47568,1456,16750,-122.93515,39.47517,1444,16760,-122.93555,39.47477,1439,16770,-122.93597,39.47425,1433,16780,-122.93628,39.4739,1426,16790,-122.9366,39.47355,1426,16800,-122.93688,39.47317,1422,16810,-122.93725,39.47275,1423,16820,-122.93772,39.47232,1428,16830,-122.93812,39.47192,1425,16840,-122.93848,39.4715,1426,16850,-122.93893,39.47112,1428,16860,-122.93928,39.47067,1434,16870,-122.9395,39.47022,1438,16880,-122.93978,39.46978,1441,16890,-122.94,39.46937,1438,16900,-122.94023,39.4689,1432,16910,-122.94053,39.46838,1415,16920,-122.94075,39.46785,1399,16930,-122.94093,39.46727,1383,16940,-122.94118,39.46663,1367,16950,-122.94137,39.466,1354,16960,-122.94152,39.46533,1339,16970,-122.94167,39.46467,1323,16980,-122.94177,39.46402,1308,16990,-122.94182,39.46335,1293,17000,-122.94182,39.46272,1280,17010,-122.94185,39.46208,1266,17020,-122.9419,39.46143,1255,17030,-122.94197,39.46075,1242,17040,-122.94205,39.46008,1234,17050,-122.94217,39.45943,1222,17060,-122.94218,39.45878,1209,17070,-122.94205,39.45812,1200,17080,-122.94192,39.45747,1187,17090,-122.94203,39.4568,1177,17100,-122.94225,39.45618,1165,17110,-122.9425,39.45553,1157,17120,-122.94272,39.45493,1148,17130,-122.94292,39.4543,1133,17140,-122.94312,39.45367,1119,17150,-122.9434,39.45308,1103,17160,-122.94367,39.45247,1087,17170,-122.94385,39.45185,1078,17180,-122.94388,39.45123,1063,17190,-122.94397,39.45062,1050,17200,-122.94408,39.45,1035,17210,-122.9442,39.44938,1025,17220,-122.94438,39.4488,1014,17230,-122.94447,39.44822,1004,17240,-122.94462,39.44762,995,17250,-122.94485,39.4471,992,17260,-122.945,39.44657,980,17270,-122.94523,39.44602,974,17280,-122.9456,39.44557,964,17290,-122.94595,39.44507,955,17300,-122.94635,39.4446,941,17310,-122.94675,39.44413,932,17320,-122.94708,39.4437,922,17330,-122.94752,39.44325,911,17340,-122.94783,39.44278,905,17350,-122.94788,39.4423,897,17360,-122.9476,39.44187,886,17370,-122.94702,39.44158,874,17380,-122.9468,39.44117,867,17390,-122.94737,39.4411,849,17400,-122.94797,39.44112,836,17410,-122.94862,39.44107,822,17420,-122.94877,39.4408,812,17430,-122.948,39.44087,806,17440,-122.94803,39.44145,784,17450,-122.9483,39.44157,777,17460,-122.94843,39.4416,774,17470,-122.94857,39.44163,773,17480,-122.94868,39.44165,771,17490,-122.9488,39.44167,769,17500,-122.9489,39.44167,768,17510,-122.949,39.44163,764,17520,-122.94912,39.4416,759,17530,-122.9492,39.44153,754,17540,-122.94927,39.44143,749,17550,-122.94932,39.44132,743,17560,-122.9493,39.44117,737,17570,-122.94925,39.44103,731,17580,-122.94912,39.44088,727,17590,-122.94897,39.44077,723,17600,-122.94878,39.44067,719,17610,-122.94863,39.44057,717,17620,-122.94843,39.44048,712,17630,-122.94822,39.4404,708,17640,-122.94802,39.44033,704,17650,-122.9478,39.44025,700,17660,-122.9476,39.4402,697,17670,-122.94738,39.44013,693,17680,-122.94717,39.44005,689,17690,-122.94697,39.44,685,17700,-122.94673,39.43993,680,17710,-122.9465,39.43988,676,17720,-122.94627,39.43985,671,17730,-122.94602,39.43982,666,17740,-122.94578,39.43978,661,17750,-122.94555,39.43977,657,17760,-122.94528,39.43975,653,17770,-122.94403,39.43993,627,17780,-122.9434,39.44068,622,17790,-122.94432,39.44108,597,17800,-122.94505,39.44122,580,17810,-122.94555,39.44123,572,17820,-122.94562,39.44123,571,17830,-122.94563,39.44123,571,17840,-122.94562,39.44125,569,17850,-122.94563,39.44125,569,17860,-122.94563,39.44125,569,17870,-122.94565,39.44125,568,17880,-122.94563,39.44125,567,17890,-122.94563,39.44125,566]}}]');

/***/ }),

/***/ 97607:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Point","version":"1.0"},{"id":"point 1","name":"point","position":{"cartographicDegrees":[-111,40,0]},"point":{"color":{"rgba":[255,255,255,255]},"outlineColor":{"rgba":[255,0,0,255]},"outlineWidth":4,"pixelSize":20}}]');

/***/ }),

/***/ 98763:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Point - Time Dynamic","version":"1.0","clock":{"interval":"2023-01-01T00:00:00Z/2023-01-01T00:10:00Z","currentTime":"2023-01-01T00:00:00Z","multiplier":60,"range":"LOOP_STOP","step":"SYSTEM_CLOCK_MULTIPLIER"}},{"id":"point","position":{"epoch":"2023-01-01T00:00:00Z","test":1,"cartographicDegrees":[0,-70,20,150000,100,-80,44,150000,200,-90,18,150000,300,-98,52,150000,400,-70,20,150000]},"point":{"color":{"rgba":[255,255,255,128]},"outlineColor":{"rgba":[255,0,0,128]},"outlineWidth":3,"pixelSize":15}}]');

/***/ }),

/***/ 36205:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Geometries: Polygon","version":"1.0"},{"id":"redPolygon","name":"Red polygon on surface","polygon":{"positions":{"cartographicDegrees":[-115,37,0,-115,32,0,-107,33,0,-102,31,0,-102,35,0]},"material":{"solidColor":{"color":{"rgba":[255,0,0,255]}}}}},{"id":"checkerboardPolygon","name":"Checkerboard polygon on surface","polygon":{"positions":{"cartographicDegrees":[-94,37,0,-95,32,0,-87,33,0]},"material":{"checkerboard":{"evenColor":{"rgba":[255,0,0,255]},"oddColor":{"rgba":[0,128,128,255]}}}}},{"id":"greenPolygon","name":"Green extruded polygon","polygon":{"positions":{"cartographicDegrees":[-108,42,0,-100,42,0,-104,40,0]},"material":{"solidColor":{"color":{"rgba":[0,255,0,255]}}},"extrudedHeight":500000,"closeTop":false,"closeBottom":false}},{"id":"orangePolygon","name":"Orange polygon with per-position heights and outline","polygon":{"positions":{"cartographicDegrees":[-108,25,100000,-100,25,100000,-100,30,100000,-108,30,300000]},"material":{"solidColor":{"color":{"rgba":[255,100,0,100]}}},"extrudedHeight":0,"perPositionHeight":true,"outline":true,"outlineColor":{"rgba":[0,0,0,255]}}},{"id":"bluePolygonWithHoles","name":"Blue polygon with holes","polygon":{"positions":{"cartographicDegrees":[-82,40.8,0,-83,36.5,0,-76,35.6,0,-73.5,43.6,0]},"holes":{"cartographicDegrees":[[-81,40,0,-81,38.2,0,-79,38.2,0,-78,40.8,0],[-77.5,36.7,0,-78.5,37,0,-76.5,39.6,0]]},"material":{"solidColor":{"color":{"rgba":[0,0,255,255]}}}}}]');

/***/ }),

/***/ 17856:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Geometries: Polyline","version":"1.0"},{"id":"redLine","name":"Red line clamped to terain","polyline":{"positions":{"cartographicDegrees":[-75,35,0,-125,35,0]},"material":{"solidColor":{"color":{"rgba":[255,0,0,255]}}},"width":5,"clampToGround":true}},{"id":"blueLine","name":"Glowing blue line on the surface","polyline":{"positions":{"cartographicDegrees":[-75,37,0,-125,37,0]},"material":{"polylineGlow":{"color":{"rgba":[100,149,237,255]},"glowPower":0.2,"taperPower":0.5}},"width":10}},{"id":"orangeLine","name":"Orange line with black outline at height and following the surface","polyline":{"positions":{"cartographicDegrees":[-75,39,250000,-125,39,250000]},"material":{"polylineOutline":{"color":{"rgba":[255,165,0,255]},"outlineColor":{"rgba":[0,0,0,255]},"outlineWidth":2}},"width":5}},{"id":"purpleLine","name":"Purple arrow at height","polyline":{"positions":{"cartographicDegrees":[-75,43,500000,-125,43,500000]},"material":{"polylineArrow":{"color":{"rgba":[148,0,211,255]}}},"arcType":"NONE","width":10}},{"id":"dashedLine","name":"Blue dashed line","polyline":{"positions":{"cartographicDegrees":[-75,45,500000,-125,45,500000]},"material":{"polylineDash":{"color":{"rgba":[0,255,255,255]}}},"width":4}}]');

/***/ }),

/***/ 13861:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Position Definitions","version":"1.0"},{"id":"point1","name":"point in cartographic degrees","position":{"cartographicDegrees":[-111,40,150000]},"point":{"color":{"rgba":[100,0,200,255]},"outlineColor":{"rgba":[200,0,200,255]},"pixelSize":{"number":10}}},{"id":"point2","name":"point in cartesian coordinates","position":{"cartesian":[1216469.9357990976,-4736121.71856379,4081386.8856866374]},"point":{"color":{"rgba":[0,100,200,255]},"outlineColor":{"rgba":[200,0,200,255]},"pixelSize":{"number":10}}},{"id":"point 3","name":"point in cartographic radians","position":{"cartographicRadians":[3.141592653589793,2.356194490192345,150000]},"point":{"color":{"rgba":[10,200,10,255]},"outlineColor":{"rgba":[200,0,200,255]},"pixelSize":{"number":10}}}]');

/***/ }),

/***/ 27264:
/***/ (function(module) {

module.exports = JSON.parse('[{"id":"document","name":"CZML Geometries: Polyline","version":"1.0"},{"id":"redLine","name":"Red line clamped to terain","polyline":{"positions":{"cartographicDegrees":[-75,35,0,-125,35,0]},"material":{"solidColor":{"color":{"rgba":[255,0,0,255]}}},"width":5,"clampToGround":true}}]');

/***/ })

}]);