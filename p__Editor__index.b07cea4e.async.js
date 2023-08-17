"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[131],{

/***/ 67027:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Editor; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(25359);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49811);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(93525);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(57213);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(54306);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rjsf+antd@5.11.2_@ant-design+icons@5.2.4_@rjsf+core@5.11.2_@rjsf+utils@5.11.2_antd@5.8.1_day_6wq474oouybmleb36qsqinxf2u/node_modules/@rjsf/antd/dist/antd.esm.js + 85 modules
var antd_esm = __webpack_require__(39748);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var esm_toConsumableArray = __webpack_require__(74758);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.35.0_react-dom@18.1.0_react@18.1.0/node_modules/rc-util/es/React/render.js
var render = __webpack_require__(80149);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/config-provider/index.js + 6 modules
var config_provider = __webpack_require__(7569);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.4_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js
var CheckCircleFilled = __webpack_require__(53142);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.4_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
var CloseCircleFilled = __webpack_require__(34475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.4_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js
var ExclamationCircleFilled = __webpack_require__(54128);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.4_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js
var InfoCircleFilled = __webpack_require__(90053);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.4_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
var LoadingOutlined = __webpack_require__(35926);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var esm_slicedToArray = __webpack_require__(47028);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(17576);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var esm_objectSpread2 = __webpack_require__(49919);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(19103);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.1.0_react@18.1.0/node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(81848);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(58216);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.35.0_react-dom@18.1.0_react@18.1.0/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(93846);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-notification@5.0.5_react-dom@18.1.0_react@18.1.0/node_modules/rc-notification/es/Notice.js






var Notify = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    className = props.className,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 4.5 : _props$duration,
    eventKey = props.eventKey,
    content = props.content,
    closable = props.closable,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? 'x' : _props$closeIcon,
    divProps = props.props,
    onClick = props.onClick,
    onNoticeClose = props.onNoticeClose,
    times = props.times;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,esm_slicedToArray/* default */.Z)(_React$useState, 2),
    hovering = _React$useState2[0],
    setHovering = _React$useState2[1];
  // ======================== Close =========================
  var onInternalClose = function onInternalClose() {
    onNoticeClose(eventKey);
  };
  var onCloseKeyDown = function onCloseKeyDown(e) {
    if (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === KeyCode/* default.ENTER */.Z.ENTER) {
      onInternalClose();
    }
  };
  // ======================== Effect ========================
  react.useEffect(function () {
    if (!hovering && duration > 0) {
      var timeout = setTimeout(function () {
        onInternalClose();
      }, duration * 1000);
      return function () {
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, hovering, times]);
  // ======================== Render ========================
  var noticePrefixCls = "".concat(prefixCls, "-notice");
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, divProps, {
    ref: ref,
    className: classnames_default()(noticePrefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(noticePrefixCls, "-closable"), closable)),
    style: style,
    onMouseEnter: function onMouseEnter() {
      setHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      setHovering(false);
    },
    onClick: onClick
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(noticePrefixCls, "-content")
  }, content), closable && /*#__PURE__*/react.createElement("a", {
    tabIndex: 0,
    className: "".concat(noticePrefixCls, "-close"),
    onKeyDown: onCloseKeyDown,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onInternalClose();
    }
  }, closeIcon));
});
/* harmony default export */ var Notice = (Notify);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-notification@5.0.5_react-dom@18.1.0_react@18.1.0/node_modules/rc-notification/es/Notifications.js









// ant-notification ant-notification-topRight
var Notifications = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-notification' : _props$prefixCls,
    container = props.container,
    motion = props.motion,
    maxCount = props.maxCount,
    className = props.className,
    style = props.style,
    onAllRemoved = props.onAllRemoved;
  var _React$useState = react.useState([]),
    _React$useState2 = (0,esm_slicedToArray/* default */.Z)(_React$useState, 2),
    configList = _React$useState2[0],
    setConfigList = _React$useState2[1];
  // ======================== Close =========================
  var onNoticeClose = function onNoticeClose(key) {
    var _config$onClose;
    // Trigger close event
    var config = configList.find(function (item) {
      return item.key === key;
    });
    config === null || config === void 0 ? void 0 : (_config$onClose = config.onClose) === null || _config$onClose === void 0 ? void 0 : _config$onClose.call(config);
    setConfigList(function (list) {
      return list.filter(function (item) {
        return item.key !== key;
      });
    });
  };
  // ========================= Refs =========================
  react.useImperativeHandle(ref, function () {
    return {
      open: function open(config) {
        setConfigList(function (list) {
          var clone = (0,esm_toConsumableArray/* default */.Z)(list);
          // Replace if exist
          var index = clone.findIndex(function (item) {
            return item.key === config.key;
          });
          var innerConfig = (0,esm_objectSpread2/* default */.Z)({}, config);
          if (index >= 0) {
            var _list$index;
            innerConfig.times = (((_list$index = list[index]) === null || _list$index === void 0 ? void 0 : _list$index.times) || 0) + 1;
            clone[index] = innerConfig;
          } else {
            innerConfig.times = 0;
            clone.push(innerConfig);
          }
          if (maxCount > 0 && clone.length > maxCount) {
            clone = clone.slice(-maxCount);
          }
          return clone;
        });
      },
      close: function close(key) {
        onNoticeClose(key);
      },
      destroy: function destroy() {
        setConfigList([]);
      }
    };
  });
  // ====================== Placements ======================
  var _React$useState3 = react.useState({}),
    _React$useState4 = (0,esm_slicedToArray/* default */.Z)(_React$useState3, 2),
    placements = _React$useState4[0],
    setPlacements = _React$useState4[1];
  react.useEffect(function () {
    var nextPlacements = {};
    configList.forEach(function (config) {
      var _config$placement = config.placement,
        placement = _config$placement === void 0 ? 'topRight' : _config$placement;
      if (placement) {
        nextPlacements[placement] = nextPlacements[placement] || [];
        nextPlacements[placement].push(config);
      }
    });
    // Fill exist placements to avoid empty list causing remove without motion
    Object.keys(placements).forEach(function (placement) {
      nextPlacements[placement] = nextPlacements[placement] || [];
    });
    setPlacements(nextPlacements);
  }, [configList]);
  // Clean up container if all notices fade out
  var onAllNoticeRemoved = function onAllNoticeRemoved(placement) {
    setPlacements(function (originPlacements) {
      var clone = (0,esm_objectSpread2/* default */.Z)({}, originPlacements);
      var list = clone[placement] || [];
      if (!list.length) {
        delete clone[placement];
      }
      return clone;
    });
  };
  // Effect tell that placements is empty now
  var emptyRef = react.useRef(false);
  react.useEffect(function () {
    if (Object.keys(placements).length > 0) {
      emptyRef.current = true;
    } else if (emptyRef.current) {
      // Trigger only when from exist to empty
      onAllRemoved === null || onAllRemoved === void 0 ? void 0 : onAllRemoved();
      emptyRef.current = false;
    }
  }, [placements]);
  // ======================== Render ========================
  if (!container) {
    return null;
  }
  var placementList = Object.keys(placements);
  return /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(react.Fragment, null, placementList.map(function (placement) {
    var placementConfigList = placements[placement];
    var keys = placementConfigList.map(function (config) {
      return {
        config: config,
        key: config.key
      };
    });
    var placementMotion = typeof motion === 'function' ? motion(placement) : motion;
    return /*#__PURE__*/react.createElement(es/* CSSMotionList */.V4, (0,esm_extends/* default */.Z)({
      key: placement,
      className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(placement), className === null || className === void 0 ? void 0 : className(placement)),
      style: style === null || style === void 0 ? void 0 : style(placement),
      keys: keys,
      motionAppear: true
    }, placementMotion, {
      onAllRemoved: function onAllRemoved() {
        onAllNoticeRemoved(placement);
      }
    }), function (_ref, nodeRef) {
      var config = _ref.config,
        motionClassName = _ref.className,
        motionStyle = _ref.style;
      var key = config.key,
        times = config.times;
      var configClassName = config.className,
        configStyle = config.style;
      return /*#__PURE__*/react.createElement(Notice, (0,esm_extends/* default */.Z)({}, config, {
        ref: nodeRef,
        prefixCls: prefixCls,
        className: classnames_default()(motionClassName, configClassName),
        style: (0,esm_objectSpread2/* default */.Z)((0,esm_objectSpread2/* default */.Z)({}, motionStyle), configStyle),
        times: times,
        key: key,
        eventKey: key,
        onNoticeClose: onNoticeClose
      }));
    });
  })), container);
});
if (false) {}
/* harmony default export */ var es_Notifications = (Notifications);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-notification@5.0.5_react-dom@18.1.0_react@18.1.0/node_modules/rc-notification/es/useNotification.js



var _excluded = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"];


var defaultGetContainer = function defaultGetContainer() {
  return document.body;
};
var uniqueKey = 0;
function mergeConfig() {
  var clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        if (val !== undefined) {
          clone[key] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification() {
  var rootConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _rootConfig$getContai = rootConfig.getContainer,
    getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai,
    motion = rootConfig.motion,
    prefixCls = rootConfig.prefixCls,
    maxCount = rootConfig.maxCount,
    className = rootConfig.className,
    style = rootConfig.style,
    onAllRemoved = rootConfig.onAllRemoved,
    shareConfig = (0,objectWithoutProperties/* default */.Z)(rootConfig, _excluded);
  var _React$useState = react.useState(),
    _React$useState2 = (0,esm_slicedToArray/* default */.Z)(_React$useState, 2),
    container = _React$useState2[0],
    setContainer = _React$useState2[1];
  var notificationsRef = react.useRef();
  var contextHolder = /*#__PURE__*/react.createElement(es_Notifications, {
    container: container,
    ref: notificationsRef,
    prefixCls: prefixCls,
    motion: motion,
    maxCount: maxCount,
    className: className,
    style: style,
    onAllRemoved: onAllRemoved
  });
  var _React$useState3 = react.useState([]),
    _React$useState4 = (0,esm_slicedToArray/* default */.Z)(_React$useState3, 2),
    taskQueue = _React$useState4[0],
    setTaskQueue = _React$useState4[1];
  // ========================= Refs =========================
  var api = react.useMemo(function () {
    return {
      open: function open(config) {
        var mergedConfig = mergeConfig(shareConfig, config);
        if (mergedConfig.key === null || mergedConfig.key === undefined) {
          mergedConfig.key = "rc-notification-".concat(uniqueKey);
          uniqueKey += 1;
        }
        setTaskQueue(function (queue) {
          return [].concat((0,esm_toConsumableArray/* default */.Z)(queue), [{
            type: 'open',
            config: mergedConfig
          }]);
        });
      },
      close: function close(key) {
        setTaskQueue(function (queue) {
          return [].concat((0,esm_toConsumableArray/* default */.Z)(queue), [{
            type: 'close',
            key: key
          }]);
        });
      },
      destroy: function destroy() {
        setTaskQueue(function (queue) {
          return [].concat((0,esm_toConsumableArray/* default */.Z)(queue), [{
            type: 'destroy'
          }]);
        });
      }
    };
  }, []);
  // ======================= Container ======================
  // React 18 should all in effect that we will check container in each render
  // Which means getContainer should be stable.
  react.useEffect(function () {
    setContainer(getContainer());
  });
  // ======================== Effect ========================
  react.useEffect(function () {
    // Flush task when node ready
    if (notificationsRef.current && taskQueue.length) {
      taskQueue.forEach(function (task) {
        switch (task.type) {
          case 'open':
            notificationsRef.current.open(task.config);
            break;
          case 'close':
            notificationsRef.current.close(task.key);
            break;
          case 'destroy':
            notificationsRef.current.destroy();
            break;
        }
      });
      // React 17 will mix order of effect & setState in async
      // - open: setState[0]
      // - effect[0]
      // - open: setState[1]
      // - effect setState([]) * here will clean up [0, 1] in React 17
      setTaskQueue(function (oriQueue) {
        return oriQueue.filter(function (task) {
          return !taskQueue.includes(task);
        });
      });
    }
  }, [taskQueue]);
  // ======================== Return ========================
  return [api, contextHolder];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-notification@5.0.5_react-dom@18.1.0_react@18.1.0/node_modules/rc-notification/es/index.js



// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(2081);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.16.1_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/cssinjs/es/index.js + 30 modules
var cssinjs_es = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/style/index.js
var style = __webpack_require__(90105);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(91106);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(23878);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/message/style/index.js



const genMessageStyle = token => {
  const {
    componentCls,
    iconCls,
    boxShadow,
    colorText,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    contentPadding,
    contentBg
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const messageMoveIn = new cssinjs_es/* Keyframes */.E4('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0
    },
    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1
    }
  });
  const messageMoveOut = new cssinjs_es/* Keyframes */.E4('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  const noticeStyle = {
    padding: paddingXS,
    textAlign: 'center',
    [`${componentCls}-custom-content > ${iconCls}`]: {
      verticalAlign: 'text-bottom',
      marginInlineEnd: marginXS,
      fontSize: fontSizeLG
    },
    [`${noticeCls}-content`]: {
      display: 'inline-block',
      padding: contentPadding,
      background: contentBg,
      borderRadius: borderRadiusLG,
      boxShadow,
      pointerEvents: 'all'
    },
    [`${componentCls}-success > ${iconCls}`]: {
      color: colorSuccess
    },
    [`${componentCls}-error > ${iconCls}`]: {
      color: colorError
    },
    [`${componentCls}-warning > ${iconCls}`]: {
      color: colorWarning
    },
    [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
      color: colorInfo
    }
  };
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      color: colorText,
      position: 'fixed',
      top: marginXS,
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup,
      [`${componentCls}-move-up`]: {
        animationFillMode: 'forwards'
      },
      [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
        animationName: messageMoveIn,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-move-up-leave`]: {
        animationName: messageMoveOut,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
        animationPlayState: 'running'
      },
      '&-rtl': {
        direction: 'rtl',
        span: {
          direction: 'rtl'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [componentCls]: {
      [noticeCls]: Object.assign({}, noticeStyle)
    }
  },
  // ============================= Pure =============================
  {
    [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
      padding: 0,
      textAlign: 'start'
    })
  }];
};
// ============================== Export ==============================
/* harmony default export */ var message_style = ((0,genComponentStyleHook/* default */.Z)('Message', token => {
  // Gen-style functions here
  const combinedToken = (0,statistic/* merge */.TS)(token, {
    height: 150
  });
  return [genMessageStyle(combinedToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 10,
  contentBg: token.colorBgElevated,
  contentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
}), {
  clientOnly: true
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/message/PurePanel.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const TypeIcon = {
  info: /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.Z, null),
  success: /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null),
  error: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null),
  warning: /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.Z, null),
  loading: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)
};
const PureContent = _ref => {
  let {
    prefixCls,
    type,
    icon,
    children
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
  }, icon || TypeIcon[type], /*#__PURE__*/react.createElement("span", null, children));
};
/** @private Internal Component. Do not use in your production. */
const PurePanel = props => {
  const {
      prefixCls: staticPrefixCls,
      className,
      type,
      icon,
      content
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "type", "icon", "content"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = message_style(prefixCls);
  return /*#__PURE__*/react.createElement(Notice, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    className: classnames_default()(className, hashId, `${prefixCls}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /*#__PURE__*/react.createElement(PureContent, {
      prefixCls: prefixCls,
      type: type,
      icon: icon
    }, content)
  }));
};
/* harmony default export */ var message_PurePanel = (PurePanel);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.4_react-dom@18.1.0_react@18.1.0/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(29884);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/message/util.js
function getMotion(prefixCls, transitionName) {
  return {
    motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
  };
}
/** Wrap message open with promise like function */
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/message/useMessage.js
var useMessage_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const Holder = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    top,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    duration = DEFAULT_DURATION,
    rtl,
    transitionName,
    onAllRemoved
  } = props;
  const {
    getPrefixCls,
    getPopupContainer,
    message
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = message_style(prefixCls);
  // =============================== Style ===============================
  const getStyle = () => ({
    left: '50%',
    transform: 'translateX(-50%)',
    top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
  });
  const getClassName = () => classnames_default()(hashId, {
    [`${prefixCls}-rtl`]: rtl
  });
  // ============================== Motion ===============================
  const getNotificationMotion = () => getMotion(prefixCls, transitionName);
  // ============================ Close Icon =============================
  const mergedCloseIcon = /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-close-x`
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: `${prefixCls}-close-icon`
  }));
  // ============================== Origin ===============================
  const [api, holder] = useNotification({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: false,
    closeIcon: mergedCloseIcon,
    duration,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved
  });
  // ================================ Ref ================================
  react.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    hashId,
    message
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = react.useRef(null);
  // ================================ API ================================
  const wrapAPI = react.useMemo(() => {
    // Wrap with notification content
    // >>> close
    const close = key => {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    // >>> Open
    const open = config => {
      if (!holderRef.current) {
         false ? 0 : void 0;
        const fakeResult = () => {};
        fakeResult.then = () => {};
        return fakeResult;
      }
      const {
        open: originOpen,
        prefixCls,
        hashId,
        message
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          content,
          icon,
          type,
          key,
          className,
          style,
          onClose
        } = config,
        restConfig = useMessage_rest(config, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let mergedKey = key;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }
      return wrapPromiseFn(resolve => {
        originOpen(Object.assign(Object.assign({}, restConfig), {
          key: mergedKey,
          content: /*#__PURE__*/react.createElement(PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content),
          placement: 'top',
          className: classnames_default()(type && `${noticePrefixCls}-${type}`, hashId, className, message === null || message === void 0 ? void 0 : message.className),
          style: Object.assign(Object.assign({}, message === null || message === void 0 ? void 0 : message.style), style),
          onClose: () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            resolve();
          }
        }));
        // Return close function
        return () => {
          close(mergedKey);
        };
      });
    };
    // >>> destroy
    const destroy = key => {
      var _a;
      if (key !== undefined) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(type => {
      const typeOpen = (jointContent, duration, onClose) => {
        let config;
        if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        // Params
        let mergedDuration;
        let mergedOnClose;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        const mergedConfig = Object.assign(Object.assign({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type
        });
        return open(mergedConfig);
      };
      clone[type] = typeOpen;
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/react.createElement(Holder, Object.assign({
    key: "message-holder"
  }, messageConfig, {
    ref: holderRef
  }))];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/message/index.js
'use client';








let message = null;
let act = callback => callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
  const {
    prefixCls: globalPrefixCls,
    getContainer: globalGetContainer,
    duration,
    rtl,
    maxCount,
    top
  } = defaultGlobalConfig;
  const mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : (0,config_provider/* globalConfig */.w6)().getPrefixCls('message');
  const mergedContainer = (globalGetContainer === null || globalGetContainer === void 0 ? void 0 : globalGetContainer()) || document.body;
  return {
    prefixCls: mergedPrefixCls,
    container: mergedContainer,
    duration,
    rtl,
    maxCount,
    top
  };
}
const GlobalHolder = /*#__PURE__*/react.forwardRef((_, ref) => {
  const initializeMessageConfig = () => {
    const {
      prefixCls,
      container,
      maxCount,
      duration,
      rtl,
      top
    } = getGlobalContext();
    return {
      prefixCls,
      getContainer: () => container,
      maxCount,
      duration,
      rtl,
      top
    };
  };
  const [messageConfig, setMessageConfig] = react.useState(initializeMessageConfig);
  const [api, holder] = useInternalMessage(messageConfig);
  const global = (0,config_provider/* globalConfig */.w6)();
  const rootPrefixCls = global.getRootPrefixCls();
  const rootIconPrefixCls = global.getIconPrefixCls();
  const theme = global.getTheme();
  const sync = () => {
    setMessageConfig(initializeMessageConfig);
  };
  react.useEffect(sync, []);
  react.useImperativeHandle(ref, () => {
    const instance = Object.assign({}, api);
    Object.keys(instance).forEach(method => {
      instance[method] = function () {
        sync();
        return api[method].apply(api, arguments);
      };
    });
    return {
      instance,
      sync
    };
  });
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls,
    theme: theme
  }, holder);
});
function flushNotice() {
  if (!message) {
    const holderFragment = document.createDocumentFragment();
    const newMessage = {
      fragment: holderFragment
    };
    message = newMessage;
    // Delay render to avoid sync issue
    act(() => {
      (0,render/* render */.s)( /*#__PURE__*/react.createElement(GlobalHolder, {
        ref: node => {
          const {
            instance,
            sync
          } = node || {};
          // React 18 test env will throw if call immediately in ref
          Promise.resolve().then(() => {
            if (!newMessage.instance && instance) {
              newMessage.instance = instance;
              newMessage.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!message.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(task => {
    const {
      type,
      skipped
    } = task;
    // Only `skipped` when user call notice but cancel it immediately
    // and instance not ready
    if (!skipped) {
      switch (type) {
        case 'open':
          {
            act(() => {
              const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
            break;
          }
        case 'destroy':
          act(() => {
            message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
          });
          break;
        // Other type open
        default:
          {
            act(() => {
              var _message$instance;
              const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0,esm_toConsumableArray/* default */.Z)(task.args));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
          }
      }
    }
  });
  // Clean up
  taskQueue = [];
}
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setMessageGlobalConfig(config) {
  defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(() => {
    var _a;
    (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
  });
}
function message_open(config) {
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type: 'open',
      config,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function typeOpen(type, args) {
  // Warning if exist theme
  if (false) {}
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type,
      args,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function destroy(key) {
  taskQueue.push({
    type: 'destroy',
    key
  });
  flushNotice();
}
const methods = ['success', 'info', 'warning', 'error', 'loading'];
const baseStaticMethods = {
  open: message_open,
  destroy,
  config: setMessageGlobalConfig,
  useMessage: useMessage,
  _InternalPanelDoNotUseOrYouWillBeFired: message_PurePanel
};
const staticMethods = baseStaticMethods;
methods.forEach(type => {
  staticMethods[type] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return typeOpen(type, args);
  };
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = () => {};
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actWrapper = (/* unused pure expression or super */ null && (noop));
if (false) {}
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actDestroy = (/* unused pure expression or super */ null && (noop));
if (false) {}
/* harmony default export */ var es_message = (staticMethods);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(25539);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/dropdown/index.js + 9 modules
var dropdown = __webpack_require__(10513);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/select/index.js + 53 modules
var es_select = __webpack_require__(5027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rjsf+validator-ajv8@5.11.2_@rjsf+utils@5.11.2/node_modules/@rjsf/validator-ajv8/dist/validator-ajv8.esm.js
var validator_ajv8_esm = __webpack_require__(88390);
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
;// CONCATENATED MODULE: ./src/utils/CZMLTemplate.ts
var billboardTemplate = {
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvUlEQVRYw+2Y22scVRzHP78zM3uZyWY3abKJl6I2VkLAS4qCCFVRURSh9T/QB1EffPFBBBXf9U189EEQ0Qd9sC8WpXgjIlrwgmirhcam1mQT3Sa72ezszDk/H3biGi8tdrf6sl8YznBmzu98z+/yPWcGhhhiiCHOifp7d83r+7f7FzreXGyCRu0lK51c/kLHy6AJqaoBvMy2FRHbjz0ZMLnC2tpaADAxMVHs9rZ8CDdEpPmfE9xcfPUSv1i5I1e9/y0g7PZuddvYdNu86RKN21vkSydFJPk3c/h9eMsnroWYsAyNCEq6tbUVFYsobJNLQ8gpaTvCkwppo7q8vPzF9PT05sA9qKpBdhsA1Ov1YGxszAeCOD5dyjd/vAXiq0E8TPgTpT1fpxScT+ZBsUG89Pasv+vGRa9UfEfkqvbFJBhuE6X2zmOath9HtLLDsJgG/ugblOYPIeKB677vmWKaJqtBoXp40AQrXWItwAvjOJb8L+++4FznwDknMMVPZWL/S4jvOdeJDLKdVoelUP1hIDrYPvXiTK8IvBAg+PXIg66zceC8C+vUb9aznx90rhP9wS0hxt02EKGuL9x3Q+fMh89AMgnJJEkakbpJtlYe1s5ZNO5d2ASc7ujTzlnc5ql7jaQlI1pGk0lcEjlrZ7RZm+67iiu3vLbYXv74lT/ELGT9y72atiZ3hHLkaqR6Vzdr6kfR+ue9h8lm5JpLM2bkipVtDxpcgNeaA5b7lJn8SGHXnS3SuAKQYgOTNKpqsyLMWlPZh0g3IDJ+E+nKeztz0W6OobYJLkTBOQJjzJUDyEETEbhu/okLfdGQXOkvYmvjtb+97zHMK5rZQUMjLsTa6gCEOs1jXYRzAWhoAcKrNkgPtQHUuQKAW3qTdOpuMDmoHcHrrG/rjQUwxak26iqgoBomPy9UvV3Xn+ifYJIIRkLIdNDFBU/8fOqPfEvanPvdQfEqcuq13jiv0HNerryMCXKZXoW29XPJNmvjtnF4qn+CzrQgiXAaIBp64vsAZmz+M3v67XnVf5AX+/tG4ZnJ/Yu4NBNyLXrFKuy+dd3zw4/gyT5zsGVrQIho2Js9jUzlhlXyE8fPm8GFas0rzzay1WY2bOTlSjnEO9p3kcj4+DpqN5xq2amtoMkkaIgQensf/QCX1rXT1bs/X6ht+7sPfg+uAukkuKjbaoi4JRmdPT6QnQQ1R7VTe0KTX+ez+EVObQQQ7H3kiPgj9b8sLCi1g5mHviE32kuj7Sp2LkL05YHuxTZee9q49uXbm76zXYImPnOlpo1xu7KwxzZO+KB4pT3Wn9q/QlBOCSoboEXNikzAR/UzGb32gcEeFlaPlYiKzyIy7tRGODBGi9ppjolrldG0kJH3VDFi/G75BOUEQNFAXCeynXakncadwWX3fDLwE7U2T07j8RxOLwUXoBqCAhoqiqiGCIqzEZIpRBZWVQKETRmZm7LNEw/4o7OHLsqRX/VkxW2mTxm4eUdlbueX2mzXwe8twIWoLJDog+y6viEiGxf9m0Qbx+5A5GHUXqeqgRjxUReABqgGKAGigTp3TESfl/K+1/+Xrzrd+O4ai73VgznETePwEVdH5Ts8+76M7Ptq+PtiiCGGGOLC8RtKLDgkovpfDQAAAABJRU5ErkJggg==",
  "scale": 1.5
};
var clockTemplate = {
  "currentTime": "2021-01-01T00:00:00Z",
  "multiplier": 20,
  "range": "LOOP_STOP",
  "step": "SYSTEM_CLOCK_MULTIPLIER"
};
var labelTemplate = {
  "text": "这个是文字"
};
// packet[1].label = labelTemplate[0]
// packet[1].billboard = billboardTemplate[0]

var polylineTemplate = {
  "positions": [-75.59777, 40.03883, 0, -75.59776, 40.03883, 0]
};
var pointTemplate = {
  "color": {
    "rgba": [255, 255, 255, 255]
  },
  "outlineColor": {
    "rgba": [255, 0, 0, 255]
  },
  "outlineWidth": 4,
  "pixelSize": 20
};
var modelTemplate = {
  "uri": "/car1.glb",
  "minimumPixelSize": 128,
  "maximumScale": 20000
};
var ALL_TEMPLATE = Object.freeze({
  EMPTY_PACKET_ARY: [{
    id: 'document',
    name: 'CZML Geometries: Polygon',
    version: '1.0'
  }, {
    id: 'packet1',
    name: 'packet title',
    position: {
      cartographicDegrees: [121, 31, 22]
    }
    // billboard: {
    // 	"image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvUlEQVRYw+2Y22scVRzHP78zM3uZyWY3abKJl6I2VkLAS4qCCFVRURSh9T/QB1EffPFBBBXf9U189EEQ0Qd9sC8WpXgjIlrwgmirhcam1mQT3Sa72ezszDk/H3biGi8tdrf6sl8YznBmzu98z+/yPWcGhhhiiCHOifp7d83r+7f7FzreXGyCRu0lK51c/kLHy6AJqaoBvMy2FRHbjz0ZMLnC2tpaADAxMVHs9rZ8CDdEpPmfE9xcfPUSv1i5I1e9/y0g7PZuddvYdNu86RKN21vkSydFJPk3c/h9eMsnroWYsAyNCEq6tbUVFYsobJNLQ8gpaTvCkwppo7q8vPzF9PT05sA9qKpBdhsA1Ov1YGxszAeCOD5dyjd/vAXiq0E8TPgTpT1fpxScT+ZBsUG89Pasv+vGRa9UfEfkqvbFJBhuE6X2zmOath9HtLLDsJgG/ugblOYPIeKB677vmWKaJqtBoXp40AQrXWItwAvjOJb8L+++4FznwDknMMVPZWL/S4jvOdeJDLKdVoelUP1hIDrYPvXiTK8IvBAg+PXIg66zceC8C+vUb9aznx90rhP9wS0hxt02EKGuL9x3Q+fMh89AMgnJJEkakbpJtlYe1s5ZNO5d2ASc7ujTzlnc5ql7jaQlI1pGk0lcEjlrZ7RZm+67iiu3vLbYXv74lT/ELGT9y72atiZ3hHLkaqR6Vzdr6kfR+ue9h8lm5JpLM2bkipVtDxpcgNeaA5b7lJn8SGHXnS3SuAKQYgOTNKpqsyLMWlPZh0g3IDJ+E+nKeztz0W6OobYJLkTBOQJjzJUDyEETEbhu/okLfdGQXOkvYmvjtb+97zHMK5rZQUMjLsTa6gCEOs1jXYRzAWhoAcKrNkgPtQHUuQKAW3qTdOpuMDmoHcHrrG/rjQUwxak26iqgoBomPy9UvV3Xn+ifYJIIRkLIdNDFBU/8fOqPfEvanPvdQfEqcuq13jiv0HNerryMCXKZXoW29XPJNmvjtnF4qn+CzrQgiXAaIBp64vsAZmz+M3v67XnVf5AX+/tG4ZnJ/Yu4NBNyLXrFKuy+dd3zw4/gyT5zsGVrQIho2Js9jUzlhlXyE8fPm8GFas0rzzay1WY2bOTlSjnEO9p3kcj4+DpqN5xq2amtoMkkaIgQensf/QCX1rXT1bs/X6ht+7sPfg+uAukkuKjbaoi4JRmdPT6QnQQ1R7VTe0KTX+ez+EVObQQQ7H3kiPgj9b8sLCi1g5mHviE32kuj7Sp2LkL05YHuxTZee9q49uXbm76zXYImPnOlpo1xu7KwxzZO+KB4pT3Wn9q/QlBOCSoboEXNikzAR/UzGb32gcEeFlaPlYiKzyIy7tRGODBGi9ppjolrldG0kJH3VDFi/G75BOUEQNFAXCeynXakncadwWX3fDLwE7U2T07j8RxOLwUXoBqCAhoqiqiGCIqzEZIpRBZWVQKETRmZm7LNEw/4o7OHLsqRX/VkxW2mTxm4eUdlbueX2mzXwe8twIWoLJDog+y6viEiGxf9m0Qbx+5A5GHUXqeqgRjxUReABqgGKAGigTp3TESfl/K+1/+Xrzrd+O4ai73VgznETePwEVdH5Ts8+76M7Ptq+PtiiCGGGOLC8RtKLDgkovpfDQAAAABJRU5ErkJggg==",
    // 	"scale": 1.5
    // }
  }],

  EMPTY_PACKET: {
    id: 'packet1',
    name: 'packet title',
    position: {
      cartographicDegrees: [121, 31, 22]
    }
  },
  model: modelTemplate,
  label: labelTemplate,
  billboard: billboardTemplate,
  polyline: polylineTemplate,
  clock: clockTemplate,
  point: pointTemplate
});

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
var ALL_DEFAULT_TEMPLATE = ALL_TEMPLATE;
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
  var _useState21 = (0,react.useState)(null),
    _useState22 = slicedToArray_default()(_useState21, 2),
    curSelectPacket = _useState22[0],
    setCurSelectPacket = _useState22[1];
  var locatePacket = function locatePacket() {
    if (cesiumViewer) {
      var dataSources = cesiumViewer.dataSources._dataSources[0];
      console.log(' locate ');
      if (dataSources) {
        cesiumViewer.zoomTo(dataSources);
      }
    }
  };
  var addPacketNode = function addPacketNode(nodeName) {
    // TODO: packetAry may be null 

    console.log(' hall ');
    if (curSelectPacket) {
      if (curSelectPacket === packetAry[0]) {
        var targetPacket = packetAry[1];
        targetPacket[nodeName] = ALL_DEFAULT_TEMPLATE[nodeName];
      } else {
        if (curSelectPacket[nodeName]) {
          es_message.error('该操作会覆盖该节点 可以 ctrl+z 撤销');
        }
        curSelectPacket[nodeName] = ALL_DEFAULT_TEMPLATE[nodeName];
      }
    } else {
      if (packetAry) {
        var _targetPacket = packetAry[1];
        if (_targetPacket[nodeName]) {
          es_message.error('该操作会覆盖该节点 可以 ctrl+z 撤销');
        }
        _targetPacket[nodeName] = ALL_DEFAULT_TEMPLATE[nodeName];
      } else {
        // TODO: better never go this 
        var newPacketAry = objectSpread2_default()({}, ALL_DEFAULT_TEMPLATE['EMPTY_PACKET_ARY']);
        newPacketAry[1][nodeName] = ALL_DEFAULT_TEMPLATE[nodeName];
        setPacketAry(objectSpread2_default()({}, newPacketAry));
      }
    }

    // update UI 
    setPacketAry(toConsumableArray_default()(packetAry));
    locatePacket();
  };
  var PacketNodeList = [{
    key: 'billboard',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick() {
        addPacketNode('billboard');
      },
      children: "\u56FE\u7247"
    }) // this is the show name in the form
  }, {
    key: 'label',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick() {
        addPacketNode('label');
      },
      children: "\u6587\u5B57"
    }) // this is the show name in the form
  }, {
    key: 'model',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick() {
        addPacketNode('model');
      },
      children: "gltf\u6A21\u578B"
    }) // this is the show name in the form
  }, {
    key: 'point',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick() {
        addPacketNode('point');
      },
      children: "\u70B9"
    }) // this is the show name in the form
  }, {
    key: 'polyline',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: function onClick() {
        addPacketNode('polyline');
      },
      children: "\u7EBF"
    }) // this is the show name in the form
  }];

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
  var unloadCZML = function unloadCZML() {
    if (cesiumViewer) {
      cesiumViewer.dataSources.removeAll();
    }
    if (thumbnailViewer) {
      thumbnailViewer.dataSources.removeAll();
    }
    var emptyPacketAry = JSON.parse(JSON.stringify(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET_ARY));
    setPacketAry(emptyPacketAry);
    setFormData(null);
  };
  var loadCZML = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(czml) {
      var viewer,
        thumbViewer,
        viewer1,
        viewer2,
        dataSourcePromise,
        path,
        _dataSourcePromise2,
        _args = arguments;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            viewer = _args.length > 1 && _args[1] !== undefined ? _args[1] : undefined;
            thumbViewer = _args.length > 2 && _args[2] !== undefined ? _args[2] : undefined;
            // @ts-ignore
            // const czml = JSON.parse(JSON.stringify(czmlDemoKeymap[curDemoName]));
            console.log(' czml ', czml, viewer, thumbViewer);
            unloadCZML();
            viewer1 = viewer || cesiumViewer;
            viewer2 = thumbViewer || thumbnailViewer;
            if (!viewer1) {
              _context.next = 16;
              break;
            }
            _context.next = 9;
            return CzmlDataSource/* default.load */.Z.load(czml);
          case 9:
            dataSourcePromise = _context.sent;
            _context.next = 12;
            return viewer1.dataSources.add(dataSourcePromise);
          case 12:
            path = viewer1.dataSources._dataSources[0].entities.getById('path');
            console.log(' path ', path);
            viewer1.zoomTo(dataSourcePromise);
            if (path) {
              viewer1.trackedEntity = path;
            }
          case 16:
            if (!viewer2) {
              _context.next = 23;
              break;
            }
            _context.next = 19;
            return CzmlDataSource/* default.load */.Z.load(czml);
          case 19:
            _dataSourcePromise2 = _context.sent;
            _context.next = 22;
            return viewer2.dataSources.add(_dataSourcePromise2);
          case 22:
            viewer2.zoomTo(_dataSourcePromise2);
          case 23:
            // list need this 
            setPacketAry(czml);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadCZML(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var getPacketInfoFromServer = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Promise.resolve(null));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function getPacketInfoFromServer() {
        return _ref2.apply(this, arguments);
      };
    }();
    var init = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        var packetFromServer, curPacketAry, clonePakcet, viewer, thumbView;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getPacketInfoFromServer();
            case 2:
              packetFromServer = _context3.sent;
              curPacketAry = packetFromServer;
              if (packetFromServer === null) {
                // 初始化 一个空的 packet
                clonePakcet = JSON.parse(JSON.stringify(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET_ARY));
                curPacketAry = clonePakcet;
              }
              setPacketAry(curPacketAry);
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
              if (!curPacketAry) {
                _context3.next = 13;
                break;
              }
              _context3.next = 13;
              return loadCZML(curPacketAry, viewer, thumbView);
            case 13:
              console.log(' viewer ', viewer);
              setViewer(viewer);
              setThumbViewer(thumbView);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function init() {
        return _ref3.apply(this, arguments);
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
  var addPacket = function addPacket() {
    if (packetAry) {
      packetAry.push(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET);
      setPacketAry(toConsumableArray_default()(packetAry));
    } else {
      var clonePakcet = JSON.parse(JSON.stringify(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET_ARY));
      clonePakcet.push(ALL_DEFAULT_TEMPLATE.EMPTY_PACKET);
      setPacketAry(clonePakcet);
    }
  };
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
  var expandPacketItem = function expandPacketItem(item) {
    console.log(' haha ');
    item.expand = !item.expand;
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
  var exportJSON = function exportJSON() {
    console.log(' packetAry === ', JSON.stringify(packetAry, null, 2));
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
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
          menu: {
            items: PacketNodeList
          },
          trigger: ['click'],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            children: "\u65B0\u589E\u8282\u70B9"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: function onClick() {
            console.log(' ');
          },
          children: "\u5220\u9664"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          children: "\u5BFC\u5165"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: exportJSON,
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