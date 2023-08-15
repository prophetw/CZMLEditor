import DoubleDateTimePicker from '@/RJSFCustom/CZMLIntervalValue';
import Cartesian3Value from '@/RJSFCustom/Cartesian3Value';
import ColorPickerRGBA from '@/RJSFCustom/ColorPickerRGBA';
import ColorPickerRGBAF from '@/RJSFCustom/ColorPickerRGBAF';
const widgets = { // custom format name => custom widget component 
	double_date_time_picker: DoubleDateTimePicker,
	cartesian3_value: Cartesian3Value,
	cartographicDegree_value: Cartesian3Value,
	cartographicRadians_value: Cartesian3Value,
	color_rgba: ColorPickerRGBA,
	color_rgbaf: ColorPickerRGBAF
}

const CZMLCustomWidgets = widgets;

export {
	CZMLCustomWidgets
}