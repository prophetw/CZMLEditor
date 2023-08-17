# CZML-Editor
try it on [gh-pages](https://prophetw.github.io/CZMLEditor/#/editor)


### CZML Struct
> [czml packet wiki](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/Packet#packet)
> [czml billboard wiki](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/Billboard)

```typescript
// Packet is the base type for all CZML objects.
interface Packet {
	billboard?: BillBoardSchema;
 	id?: string;
	clock?: ClockSchema;
	position?: PositionSchema;
	label?: LabelSchema;
	polyline?: PolylineSchema;
	polygon?: PolygonSchema;
	point?: PointSchema;
	plane?: PlaneSchema;
	name?: string;
	model?: ModelSchema;
	properties?: unknown;
	orientation?: OrientationSchema;
	...
}
type CZML = Packet[]
```

### Main method
> CZML-JSON-schema => react-jsonschema-form => UI

## [czml-writer](https://github.com/AnalyticalGraphicsInc/czml-writer/tree/main)
> CZML JSON schema describe the data stucture

### [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form)
> [playground](https://rjsf-team.github.io/react-jsonschema-form/)
