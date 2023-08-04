const path = require('path')
const fs = require('fs')
const https = require('https')

// README: 
// JSONList and JSONList2 are the list of all the JSON files in the Schema folder and Values folder respectively
// run this code in the console of the above page to get the list of all the JSON files list
/**
 * 
const JSONList = [...document.querySelectorAll('.react-directory-row a.Link--primary')].map(a=>{
    return a.innerText
}).filter(a=>a.endsWith('.json'))

result = JSON.stringify(JSONList)
and then copy the result to the JSONList variable below

 * 
 * 
 * 
 */

const baseUrl = 'https://analyticalgraphicsinc.github.io/czml-writer/Schema/'

// data from https://github.com/AnalyticalGraphicsInc/czml-writer/tree/main/Schema
const JSONList = [
	"AlignedAxis.json","ArcType.json","Articulation.json","Articulations.json","BackgroundPadding.json","Billboard.json","Boolean.json","BoundingRectangle.json","Box.json","BoxDimensions.json","CheckerboardMaterial.json","ClassificationType.json","Clock.json","Color.json","ColorBlendMode.json","CornerType.json","Corridor.json","CustomProperties.json","CustomProperty.json","Cylinder.json","DeletableProperty.json","Direction.json","DirectionList.json","DistanceDisplayCondition.json","Document.json","Double.json","DoubleList.json","Ellipse.json","Ellipsoid.json","EllipsoidRadii.json","EyeOffset.json","Font.json","GridMaterial.json","HeightReference.json","HorizontalOrigin.json","ImageMaterial.json","Integer.json","InterpolatableProperty.json","Label.json","LabelStyle.json","LineCount.json","LineOffset.json","LineThickness.json","Material.json","Model.json","NearFarScalar.json","NodeTransformation.json","NodeTransformations.json","Orientation.json","Packet.json","Path.json","PixelOffset.json","Point.json","Polygon.json","Polyline.json","PolylineArrowMaterial.json","PolylineDashMaterial.json","PolylineGlowMaterial.json","PolylineMaterial.json","PolylineOutlineMaterial.json","PolylineVolume.json","Position.json","PositionList.json","PositionListOfLists.json","Rectangle.json","RectangleCoordinates.json","Repeat.json","Rotation.json","Scale.json","ShadowMode.json","Shape.json","SolidColorMaterial.json","String.json","StripeMaterial.json","StripeOrientation.json","Tileset.json","Translation.json","Uri.json","VerticalOrigin.json","ViewFrom.json","Wall.json",
]

// data from https://github.com/AnalyticalGraphicsInc/czml-writer/tree/main/Schema/Values
const JSONList2 = [
	"ArcTypeValue.json","BooleanValue.json","BoundingRectangleValue.json","Cartesian2ListValue.json","Cartesian2Value.json","Cartesian3ListOfListsValue.json","Cartesian3ListValue.json","Cartesian3Value.json","Cartesian3VelocityValue.json","CartographicDegreesListOfListsValue.json","CartographicDegreesListValue.json","CartographicDegreesValue.json","CartographicRadiansListOfListsValue.json","CartographicRadiansListValue.json","CartographicRadiansValue.json","CartographicRectangleDegreesValue.json","CartographicRectangleRadiansValue.json","ClassificationTypeValue.json","ClockRangeValue.json","ClockStepValue.json","ColorBlendModeValue.json","CornerTypeValue.json","DistanceDisplayConditionValue.json","DoubleListValue.json","DoubleValue.json","FontValue.json","HeightReferenceValue.json","HorizontalOriginValue.json","IntegerValue.json","LabelStyleValue.json","NearFarScalarValue.json","ReferenceListOfListsValue.json","ReferenceListValue.json","ReferenceValue.json","RgbaValue.json","RgbafValue.json","ShadowModeValue.json","SphericalListValue.json","SphericalValue.json","StringValue.json","StripeOrientationValue.json","TimeIntervalCollectionValue.json","TimeValue.json","UnitCartesian3ListValue.json","UnitCartesian3Value.json","UnitQuaternionValue.json","UnitSphericalListValue.json","UnitSphericalValue.json","UriValue.json","VelocityReferenceValue.json","VerticalOriginValue.json"
]


const saveDir = path.resolve('./CZMLSchemaJSON')

const downloadFileFromUrl = (url, fileName) => {
		const file = fs.createWriteStream(fileName)
		const request = https.get(url, function(response) {
				response.pipe(file)
		})
}

const downloadAll = ()=>{
		JSONList.forEach(fileName=>{
				downloadFileFromUrl(baseUrl + fileName, path.resolve(saveDir, fileName))
		})
		JSONList2.forEach(fileName=>{
				downloadFileFromUrl(baseUrl + 'Values/' + fileName, path.resolve(saveDir, 'Values', fileName))
		})
}

// downloadFileFromUrl(baseUrl + 'Values/' + 'Cartesian3ListOfListsValue.json', path.resolve(saveDir, 'Values', 'Cartesian3ListOfListsValue.json'))

downloadAll();