"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[371],{

/***/ 62829:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(93525);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(54306);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rjsf+antd@5.11.2_@ant-design+icons@5.2.4_@rjsf+core@5.11.2_@rjsf+utils@5.11.2_antd@5.8.1_day_6wq474oouybmleb36qsqinxf2u/node_modules/@rjsf/antd/dist/antd.esm.js + 183 modules
var antd_esm = __webpack_require__(2193);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rjsf+validator-ajv8@5.11.2_@rjsf+utils@5.11.2/node_modules/@rjsf/validator-ajv8/dist/validator-ajv8.esm.js
var validator_ajv8_esm = __webpack_require__(88390);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
;// CONCATENATED MODULE: ./src/pages/Home/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Homemodules = ({"container":"container___ulS8A","flex":"flex___Nn3HE","thumbnail_container":"thumbnail_container___VCwbs","form_container":"form_container___YFbSz","opt_container":"opt_container___ik4CT","packet_item":"packet_item___sY3wg","packet_item_keys":"packet_item_keys___iBLHH"});
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(37635);
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Billboard.json
var Billboard_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Billboard.json","title":"Billboard","description":"A billboard, or viewport-aligned image. The billboard is positioned in the scene by the `position` property. A billboard is sometimes called a marker.","type":"object","czmlExamples":["Examples/Billboard.json"],"properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the billboard is shown.","default":true},"image":{"$ref":"Uri.json","description":"The URI of the image displayed on the billboard. For broadest client compatibility, the URI should be accessible via Cross-Origin Resource Sharing (CORS). The URI may also be a <a href=\\"https://developer.mozilla.org/en/data_URIs\\">data URI</a>.","czmlRequiredForDisplay":true},"scale":{"$ref":"Double.json","description":"The scale of the billboard. The scale is multiplied with the pixel size of the billboard\'s `image`. For example, if the scale is 2.0, the billboard will be rendered with twice the number of pixels, in each direction, of the `image`.","default":1},"pixelOffset":{"$ref":"PixelOffset.json","description":"The offset, in viewport pixels, of the billboard origin from the `position`. A pixel offset is the number of pixels up and to the right to place the billboard, relative to the `position`.","default":"[0.0, 0.0]"},"eyeOffset":{"$ref":"EyeOffset.json","description":"The eye offset of the billboard, which is the offset in eye coordinates at which to place the billboard relative to the `position` property. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer\'s right, the Y-axis points up, and the Z-axis points into the screen.","default":"[0.0, 0.0, 0.0]"},"horizontalOrigin":{"$ref":"HorizontalOrigin.json","description":"The horizontal origin of the billboard, which determines whether the billboard image is left-, center-, or right-aligned with the `position`.","default":"CENTER"},"verticalOrigin":{"$ref":"VerticalOrigin.json","description":"The vertical origin of the billboard, which determines whether the billboard image is bottom-, center-, or top-aligned with the `position`.","default":"CENTER"},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the billboard, which indicates if the position is relative to terrain or not.","default":"NONE"},"color":{"$ref":"Color.json","description":"The color of the billboard. This color value is multiplied with the values of the billboard\'s `image` to produce the final color.","default":{"rgba":[255,255,255,255]}},"rotation":{"$ref":"Double.json","description":"The rotation of the billboard, in radians, counter-clockwise from the alignedAxis.","default":0},"alignedAxis":{"$ref":"AlignedAxis.json","description":"The aligned axis is the unit vector, in world coordinates, that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector."},"sizeInMeters":{"$ref":"Boolean.json","description":"Whether this billboard\'s size (`width` and `height`) should be measured in meters, otherwise size is measured in pixels.","default":false},"width":{"$ref":"Double.json","description":"The width of the billboard, in pixels (or meters, if `sizeInMeters` is true). By default, the native width of the image is used."},"height":{"$ref":"Double.json","description":"The height of the billboard, in pixels (or meters, if `sizeInMeters` is true). By default, the native height of the image is used."},"scaleByDistance":{"$ref":"NearFarScalar.json","description":"How the billboard\'s scale should change based on the billboard\'s distance from the camera. This scalar value will be multiplied by `scale`."},"translucencyByDistance":{"$ref":"NearFarScalar.json","description":"How the billboard\'s translucency should change based on the billboard\'s distance from the camera. This scalar value should range from 0 to 1."},"pixelOffsetScaleByDistance":{"$ref":"NearFarScalar.json","description":"How the billboard\'s pixel offset should change based on the billboard\'s distance from the camera. This scalar value will be multiplied by `pixelOffset`."},"imageSubRegion":{"$ref":"BoundingRectangle.json","description":"A sub-region of the image which will be used for the billboard, rather than the entire image, measured in pixels from the bottom-left."},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying the distance from the camera at which this billboard will be displayed."},"disableDepthTestDistance":{"$ref":"Double.json","description":"The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied.","default":0}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Label.json
var Label_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Label.json","title":"Label","description":"A string of text.","type":"object","properties":{"show":{"$ref":"Boolean.json","description":"Whether or not the label is shown.","default":true},"text":{"$ref":"String.json","description":"The text displayed by the label. The newline character (\\\\n) indicates line breaks."},"font":{"$ref":"Font.json","description":"The font to use for the label.","default":"30px sans-serif"},"style":{"$ref":"LabelStyle.json","description":"The style of the label.","default":"FILL"},"scale":{"$ref":"Double.json","description":"The scale of the label. The scale is multiplied with the pixel size of the label\'s text. For example, if the scale is 2.0, the label will be rendered with twice the number of pixels, in each direction, of the text.","default":1},"showBackground":{"$ref":"Boolean.json","description":"Whether or not a background behind the label is shown.","default":false},"backgroundColor":{"$ref":"Color.json","description":"The color of the background behind the label.","default":"[0.165, 0.165, 0.165, 0.8]"},"backgroundPadding":{"$ref":"BackgroundPadding.json","description":"The amount of padding between the text and the label\'s background.","default":"[7, 5]"},"pixelOffset":{"$ref":"PixelOffset.json","description":"The offset, in viewport pixels, of the label origin from the `position`. A pixel offset is the number of pixels up and to the right to place the label, relative to the `position`.","default":"[0.0, 0.0]"},"eyeOffset":{"$ref":"EyeOffset.json","description":"The eye offset of the label, which is the offset in eye coordinates at which to place the label relative to the `position` property. Eye coordinates are a left-handed coordinate system where the X-axis points toward the viewer\'s right, the Y-axis points up, and the Z-axis points into the screen.","default":"[0.0, 0.0, 0.0]"},"horizontalOrigin":{"$ref":"HorizontalOrigin.json","description":"The horizontal origin of the label. It controls whether the label is left-, center-, or right-aligned with the `position`.","default":"CENTER"},"verticalOrigin":{"$ref":"VerticalOrigin.json","description":"The vertical origin of the label. It controls whether the label image is bottom-, center-, or top-aligned with the `position`.","default":"CENTER"},"heightReference":{"$ref":"HeightReference.json","description":"The height reference of the label, which indicates if the position is relative to terrain or not.","default":"NONE"},"fillColor":{"$ref":"Color.json","description":"The fill color of the label.","default":"white"},"outlineColor":{"$ref":"Color.json","description":"The outline color of the label.","default":"black"},"outlineWidth":{"$ref":"Double.json","description":"The outline width of the label.","default":1},"translucencyByDistance":{"$ref":"NearFarScalar.json","description":"How the label\'s translucency should change based on the label\'s distance from the camera. This scalar value should range from 0 to 1."},"pixelOffsetScaleByDistance":{"$ref":"NearFarScalar.json","description":"How the label\'s pixel offset should change based on the label\'s distance from the camera. This scalar value will be multiplied by `pixelOffset`."},"scaleByDistance":{"$ref":"NearFarScalar.json","description":"How the label\'s scale should change based on the label\'s distance from the camera. This scalar value will be multiplied by `scale`."},"distanceDisplayCondition":{"$ref":"DistanceDisplayCondition.json","description":"The display condition specifying the distance from the camera at which this label will be displayed."},"disableDepthTestDistance":{"$ref":"Double.json","description":"The distance from the camera at which to disable the depth test. This can be used to prevent clipping against terrain, for example. When set to zero, the depth test is always applied. When set to Infinity, the depth test is never applied.","default":0}}}');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/Base/Clock.json
var Clock_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://analyticalgraphicsinc.github.io/czml-writer/Schema/Clock.json","title":"Clock","description":"Initial settings for a simulated clock when a document is loaded. The start and stop time are configured using the interval property.","type":"object","czmlExamples":["Examples/Clock.json"],"properties":{"currentTime":{"$ref":"Values/TimeValue.json","description":"The current time, specified in ISO8601 format."},"multiplier":{"description":"The multiplier. When `step` is set to `TICK_DEPENDENT`, this is the number of seconds to advance each tick. When `step` is set to `SYSTEM_CLOCK_DEPENDENT`, this is multiplied by the elapsed system time between ticks. This value is ignored in `SYSTEM_CLOCK` mode.","type":"number","default":1},"range":{"$ref":"Values/ClockRangeValue.json","description":"The behavior when the current time reaches its start or end times.","default":"LOOP_STOP"},"step":{"$ref":"Values/ClockStepValue.json","description":"How the current time advances each tick.","default":"SYSTEM_CLOCK_MULTIPLIER"}}}');
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
  rectangle: Rectangle_namespaceObject
};
var validPacketKeys = Object.keys(BaseJSONSchemaObj.packet.properties);
var validBillboardKeys = Object.keys(BaseJSONSchemaObj.billboard.properties);
var validLabelKeys = Object.keys(BaseJSONSchemaObj.label.properties);
var validPolygonKeys = Object.keys(BaseJSONSchemaObj.polygon.properties);
var validPolylineKeys = Object.keys(BaseJSONSchemaObj.polyline.properties);
var editableKeysInPacketSchema = ["billboard", "label", "polygon", "polyline", "point", "rectangle", "clock", "model"];

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
    "default": ""
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
  'Position.json': {
    type: 'Object',
    properties: {
      cartographicDegrees: {
        type: 'array',
        items: [{
          type: "number",
          description: " X or Longitude"
        }, {
          "type": "number",
          description: " Y or Latitude"
        }, {
          "type": "number",
          description: " Z or Height"
        }],
        additionalItems: false
      },
      "default": {
        cartographicDegrees: [0, 0, 0]
      }
    }
  },
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
          "title": "RGBAF Color"
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

;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumCZMLColors.json
var CesiumCZMLColors_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Colors","version":"1.0"},{"id":"rgba","name":"Rectangle with outline using RGBA Colors","rectangle":{"coordinates":{"wsenDegrees":[-120,40,-110,50]},"fill":true,"material":{"solidColor":{"color":{"rgba":[255,0,0,100]}}},"height":0,"outline":true,"outlineColor":{"rgba":[0,0,0,255]}}},{"id":"rgbaf","name":"Rectangle using RGBAF Colors","rectangle":{"coordinates":{"wsenDegrees":[-100,40,-90,50]},"fill":true,"material":{"solidColor":{"color":{"rgbaf":[1,0,0,0.39]}}},"height":0,"outline":true,"outlineColor":{"rgba":[0,0,0,255]}}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumBillboardAndLabel.json
var CesiumBillboardAndLabel_namespaceObject = JSON.parse('[{"id":"document","name":"Basic CZML billboard and label","version":"1.0"},{"id":"some-unique-id","name":"AGI","description":"<p><a href=\'http://www.agi.com\' target=\'_blank\'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>","billboard":{"image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvUlEQVRYw+2Y22scVRzHP78zM3uZyWY3abKJl6I2VkLAS4qCCFVRURSh9T/QB1EffPFBBBXf9U189EEQ0Qd9sC8WpXgjIlrwgmirhcam1mQT3Sa72ezszDk/H3biGi8tdrf6sl8YznBmzu98z+/yPWcGhhhiiCHOifp7d83r+7f7FzreXGyCRu0lK51c/kLHy6AJqaoBvMy2FRHbjz0ZMLnC2tpaADAxMVHs9rZ8CDdEpPmfE9xcfPUSv1i5I1e9/y0g7PZuddvYdNu86RKN21vkSydFJPk3c/h9eMsnroWYsAyNCEq6tbUVFYsobJNLQ8gpaTvCkwppo7q8vPzF9PT05sA9qKpBdhsA1Ov1YGxszAeCOD5dyjd/vAXiq0E8TPgTpT1fpxScT+ZBsUG89Pasv+vGRa9UfEfkqvbFJBhuE6X2zmOath9HtLLDsJgG/ugblOYPIeKB677vmWKaJqtBoXp40AQrXWItwAvjOJb8L+++4FznwDknMMVPZWL/S4jvOdeJDLKdVoelUP1hIDrYPvXiTK8IvBAg+PXIg66zceC8C+vUb9aznx90rhP9wS0hxt02EKGuL9x3Q+fMh89AMgnJJEkakbpJtlYe1s5ZNO5d2ASc7ujTzlnc5ql7jaQlI1pGk0lcEjlrZ7RZm+67iiu3vLbYXv74lT/ELGT9y72atiZ3hHLkaqR6Vzdr6kfR+ue9h8lm5JpLM2bkipVtDxpcgNeaA5b7lJn8SGHXnS3SuAKQYgOTNKpqsyLMWlPZh0g3IDJ+E+nKeztz0W6OobYJLkTBOQJjzJUDyEETEbhu/okLfdGQXOkvYmvjtb+97zHMK5rZQUMjLsTa6gCEOs1jXYRzAWhoAcKrNkgPtQHUuQKAW3qTdOpuMDmoHcHrrG/rjQUwxak26iqgoBomPy9UvV3Xn+ifYJIIRkLIdNDFBU/8fOqPfEvanPvdQfEqcuq13jiv0HNerryMCXKZXoW29XPJNmvjtnF4qn+CzrQgiXAaIBp64vsAZmz+M3v67XnVf5AX+/tG4ZnJ/Yu4NBNyLXrFKuy+dd3zw4/gyT5zsGVrQIho2Js9jUzlhlXyE8fPm8GFas0rzzay1WY2bOTlSjnEO9p3kcj4+DpqN5xq2amtoMkkaIgQensf/QCX1rXT1bs/X6ht+7sPfg+uAukkuKjbaoi4JRmdPT6QnQQ1R7VTe0KTX+ez+EVObQQQ7H3kiPgj9b8sLCi1g5mHviE32kuj7Sp2LkL05YHuxTZee9q49uXbm76zXYImPnOlpo1xu7KwxzZO+KB4pT3Wn9q/QlBOCSoboEXNikzAR/UzGb32gcEeFlaPlYiKzyIy7tRGODBGi9ppjolrldG0kJH3VDFi/G75BOUEQNFAXCeynXakncadwWX3fDLwE7U2T07j8RxOLwUXoBqCAhoqiqiGCIqzEZIpRBZWVQKETRmZm7LNEw/4o7OHLsqRX/VkxW2mTxm4eUdlbueX2mzXwe8twIWoLJDog+y6viEiGxf9m0Qbx+5A5GHUXqeqgRjxUReABqgGKAGigTp3TESfl/K+1/+Xrzrd+O4ai73VgznETePwEVdH5Ts8+76M7Ptq+PtiiCGGGOLC8RtKLDgkovpfDQAAAABJRU5ErkJggg==","scale":1.5},"label":{"fillColor":{"rgba":[255,255,255,255]},"font":"12pt Lucida Console","horizontalOrigin":"LEFT","pixelOffset":{"cartesian2":[8,0]},"style":"FILL","text":"Title\\nSubTitle","showBackground":true,"backgroundColor":{"rgba":[112,89,57,200]}},"position":{"cartesian":[1216361.4096947117,-4736253.175342511,4081267.4865667094]}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumPoint.json
var CesiumPoint_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Point","version":"1.0"},{"id":"point 1","name":"point","position":{"cartographicDegrees":[-111,40,0]},"point":{"color":{"rgba":[255,255,255,255]},"outlineColor":{"rgba":[255,0,0,255]},"outlineWidth":4,"pixelSize":20}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumPointTimeDynamic.json
var CesiumPointTimeDynamic_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Point - Time Dynamic","version":"1.0","clock":{"interval":"2023-01-01T00:00:00Z/2023-01-01T00:10:00Z","currentTime":"2023-01-01T00:00:00Z","multiplier":60,"range":"LOOP_STOP","step":"SYSTEM_CLOCK_MULTIPLIER"}},{"id":"point","position":{"epoch":"2023-01-01T00:00:00Z","cartographicDegrees":[0,-70,20,150000,100,-80,44,150000,200,-90,18,150000,300,-98,52,150000,400,-70,20,150000]},"point":{"color":{"rgba":[255,255,255,128]},"outlineColor":{"rgba":[255,0,0,128]},"outlineWidth":3,"pixelSize":15}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumPolygon.json
var CesiumPolygon_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Geometries: Polygon","version":"1.0"},{"id":"redPolygon","name":"Red polygon on surface","polygon":{"positions":{"cartographicDegrees":[-115,37,0,-115,32,0,-107,33,0,-102,31,0,-102,35,0]},"material":{"solidColor":{"color":{"rgba":[255,0,0,255]}}}}},{"id":"checkerboardPolygon","name":"Checkerboard polygon on surface","polygon":{"positions":{"cartographicDegrees":[-94,37,0,-95,32,0,-87,33,0]},"material":{"checkerboard":{"evenColor":{"rgba":[255,0,0,255]},"oddColor":{"rgba":[0,128,128,255]}}}}},{"id":"greenPolygon","name":"Green extruded polygon","polygon":{"positions":{"cartographicDegrees":[-108,42,0,-100,42,0,-104,40,0]},"material":{"solidColor":{"color":{"rgba":[0,255,0,255]}}},"extrudedHeight":500000,"closeTop":false,"closeBottom":false}},{"id":"orangePolygon","name":"Orange polygon with per-position heights and outline","polygon":{"positions":{"cartographicDegrees":[-108,25,100000,-100,25,100000,-100,30,100000,-108,30,300000]},"material":{"solidColor":{"color":{"rgba":[255,100,0,100]}}},"extrudedHeight":0,"perPositionHeight":true,"outline":true,"outlineColor":{"rgba":[0,0,0,255]}}},{"id":"bluePolygonWithHoles","name":"Blue polygon with holes","polygon":{"positions":{"cartographicDegrees":[-82,40.8,0,-83,36.5,0,-76,35.6,0,-73.5,43.6,0]},"holes":{"cartographicDegrees":[[-81,40,0,-81,38.2,0,-79,38.2,0,-78,40.8,0],[-77.5,36.7,0,-78.5,37,0,-76.5,39.6,0]]},"material":{"solidColor":{"color":{"rgba":[0,0,255,255]}}}}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumPolyline.json
var CesiumPolyline_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Geometries: Polyline","version":"1.0"},{"id":"redLine","name":"Red line clamped to terain","polyline":{"positions":{"cartographicDegrees":[-75,35,0,-125,35,0]},"material":{"solidColor":{"color":{"rgba":[255,0,0,255]}}},"width":5,"clampToGround":true}},{"id":"blueLine","name":"Glowing blue line on the surface","polyline":{"positions":{"cartographicDegrees":[-75,37,0,-125,37,0]},"material":{"polylineGlow":{"color":{"rgba":[100,149,237,255]},"glowPower":0.2,"taperPower":0.5}},"width":10}},{"id":"orangeLine","name":"Orange line with black outline at height and following the surface","polyline":{"positions":{"cartographicDegrees":[-75,39,250000,-125,39,250000]},"material":{"polylineOutline":{"color":{"rgba":[255,165,0,255]},"outlineColor":{"rgba":[0,0,0,255]},"outlineWidth":2}},"width":5}},{"id":"purpleLine","name":"Purple arrow at height","polyline":{"positions":{"cartographicDegrees":[-75,43,500000,-125,43,500000]},"material":{"polylineArrow":{"color":{"rgba":[148,0,211,255]}}},"arcType":"NONE","width":10}},{"id":"dashedLine","name":"Blue dashed line","polyline":{"positions":{"cartographicDegrees":[-75,45,500000,-125,45,500000]},"material":{"polylineDash":{"color":{"rgba":[0,255,255,255]}}},"width":4}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumRedPolyline.json
var CesiumRedPolyline_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Geometries: Polyline","version":"1.0"},{"id":"redLine","name":"Red line clamped to terain","polyline":{"positions":{"cartographicDegrees":[-75,35,0,-125,35,0]},"material":{"solidColor":{"color":{"rgba":[255,0,0,255]}}},"width":5,"clampToGround":true}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumPolylineDefinitions.json
var CesiumPolylineDefinitions_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Position Definitions","version":"1.0"},{"id":"point1","name":"point in cartographic degrees","position":{"cartographicDegrees":[-111,40,150000]},"point":{"color":{"rgba":[100,0,200,255]},"outlineColor":{"rgba":[200,0,200,255]},"pixelSize":{"number":10}}},{"id":"point2","name":"point in cartesian coordinates","position":{"cartesian":[1216469.9357990976,-4736121.71856379,4081386.8856866374]},"point":{"color":{"rgba":[0,100,200,255]},"outlineColor":{"rgba":[200,0,200,255]},"pixelSize":{"number":10}}},{"id":"point 3","name":"point in cartographic radians","position":{"cartographicRadians":[3.141592653589793,2.356194490192345,150000]},"point":{"color":{"rgba":[10,200,10,255]},"outlineColor":{"rgba":[200,0,200,255]},"pixelSize":{"number":10}}}]');
;// CONCATENATED MODULE: ./CZMLSchemaJSON/testFile/CesiumModel.json
var CesiumModel_namespaceObject = JSON.parse('[{"id":"document","name":"CZML Model","version":"1.0"},{"id":"aircraft model","name":"Cesium Air","position":{"cartographicDegrees":[-77,37,10000]},"model":{"gltf":"http://localhost:8000/car1.glb","scale":2,"minimumPixelSize":128}}]');
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/select/index.js + 53 modules
var es_select = __webpack_require__(5027);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.1_react-dom@18.1.0_react@18.1.0/node_modules/antd/es/button/index.js + 14 modules
var es_button = __webpack_require__(66293);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/pages/Home/index.tsx






















var DEFAULT_KEY = 'billboard';
var czmlDemoKeymap = {
  model: CesiumModel_namespaceObject,
  billboard: CesiumBillboardAndLabel_namespaceObject,
  rectangle: CesiumCZMLColors_namespaceObject,
  point: CesiumPoint_namespaceObject,
  polygon: CesiumPolygon_namespaceObject,
  polyline: CesiumPolyline_namespaceObject,
  polylineRed: CesiumRedPolyline_namespaceObject,
  polylineDef: CesiumPolylineDefinitions_namespaceObject,
  pointTime: CesiumPointTimeDynamic_namespaceObject
};
var uiSchema = {};
var HomePage = function HomePage() {
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
  var _useState17 = (0,react.useState)('billboard'),
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
    var targetJSON = BaseJSONSchemaObj[editKey];
    var jsonStr = JSON.stringify(targetJSON, null, 2);
    // console.log(' jsonStr ', jsonStr)
    jsonStr = jsonStr.replace(/\$ref/g, '#ref');
    var schemaTem = JSON.parse(jsonStr);
    CZML2RJSFAdaptor(schemaTem);
    RJSFAdaptor2(schemaTem);
    console.log(' init ', schemaTem);
    var schema = schemaTem;
    setFormSchema(schema);
  };
  (0,react.useEffect)(function () {
    var viewer = new Viewer/* default */.Z("cesiumContainer", {
      contextOptions: {
        webgl: {
          preserveDrawingBuffer: true,
          alpha: true
        }
      }
    });
    var thumbView = new Viewer/* default */.Z("thumbnailContainer", {
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
    // @ts-ignore
    var czml = JSON.parse(JSON.stringify(czmlDemoKeymap[curDemoName]));
    console.log(' czml ', czml);
    if (viewer) {
      var dataSourcePromise = CzmlDataSource/* default.load */.Z.load(czml);
      viewer.dataSources.add(dataSourcePromise);
      viewer.zoomTo(dataSourcePromise);
    }
    if (thumbView) {
      var _dataSourcePromise2 = CzmlDataSource/* default.load */.Z.load(czml);
      thumbView.dataSources.add(_dataSourcePromise2);
      thumbView.zoomTo(_dataSourcePromise2);
    }
    setViewer(viewer);
    setThumbViewer(thumbView);
    setPacketAry(czml);
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
      setFormData(item[key]);
    });
  };
  var renderPacketSchema = function renderPacketSchema(packet) {
    var packetObj = packet;
    var renderHTML = /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: expandPacket && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: packetObj.map(function (item, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: Homemodules.packet_item,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: Homemodules.packet_item_title,
              onClick: function onClick() {
                expandPacketItem(item);
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: Homemodules.packet_item_title_name,
                children: item.id
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: Homemodules.packet_item_title_type,
                children: item.name
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: Homemodules.packet_item_keys,
                children: item.expand && Object.keys(item).map(function (key, index) {
                  if (editableKeysInPacketSchema.indexOf(key) === -1) {
                    return null;
                  }
                  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: Homemodules.packet_item_key,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      className: Homemodules.packet_item_key_name,
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
      className: Homemodules.flex,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        id: "cesiumContainer"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: Homemodules.form_container,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: Homemodules.opt_container,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            onClick: togglePacket,
            children: "Packet struct toggle"
          }), packetAry && renderPacketSchema(packetAry), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            style: {
              position: 'absolute',
              width: 200,
              right: 0,
              top: 0
            },
            value: curDemoName,
            onChange: function onChange(value) {
              console.log(value);
              setCurDemoName(value);
              // @ts-ignore
              var czml = JSON.parse(JSON.stringify(czmlDemoKeymap[value]));
              console.log(' new czml demo', czml);
              setPacketAry(czml);
              if (cesiumViewer) {
                cesiumViewer.dataSources.removeAll();
                var dataSourcePromise = CzmlDataSource/* default.load */.Z.load(czml);
                cesiumViewer.dataSources.add(dataSourcePromise);
                cesiumViewer.zoomTo(dataSourcePromise);
              }
              if (thumbnailViewer) {
                thumbnailViewer.dataSources.removeAll();
                var _dataSourcePromise3 = CzmlDataSource/* default.load */.Z.load(czml);
                thumbnailViewer.dataSources.add(_dataSourcePromise3);
                thumbnailViewer.zoomTo(_dataSourcePromise3);
              }
            },
            children: Object.keys(czmlDemoKeymap).map(function (key) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                value: key,
                children: key
              }, key);
            })
          })]
        }), formData && /*#__PURE__*/(0,jsx_runtime.jsx)(antd_esm/* default */.ZP, {
          formData: formData,
          onChange: function onChange(e) {
            return setForm(e);
          },
          schema: formSchema,
          validator: validator_ajv8_esm/* default */.ZP,
          uiSchema: uiSchema,
          experimental_defaultFormStateBehavior: {
            // emptyObjectFields: 'populateRequiredDefaults',
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        id: "thumbnailContainer",
        className: Homemodules.thumbnail_container
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          position: "absolute",
          bottom: 0,
          right: '50%',
          height: "200px",
          width: "200px",
          background: "white"
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: function onClick() {
            getThumbnail();
          },
          children: "getThumbnail"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          style: {
            border: "1px solid #666"
          },
          src: thumbnailDataUrl,
          alt: ""
        })]
      })]
    })
  });
};
/* harmony default export */ var Home = (HomePage);

/***/ })

}]);