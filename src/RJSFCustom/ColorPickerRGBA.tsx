import React, { useEffect, useState } from 'react';
import {ColorPicker} from 'antd';
import type { Color, ColorPickerProps} from 'antd/es/color-picker';
import dayjs from 'dayjs';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function ColorPickerRGBA(props) {
	// TimeISO/TimeISO for interval

	// const formContext = props.formContext;
	// const { formData } = formContext;

	// RGBA   0~255

	// RGBAF  0~1 

	const value = props.value;
	console.log(' RGBA 0~255 ', props, value);
	const targetValue = `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${value[3]/255})`

	const [color, setColor] = useState<ColorPickerProps['value']>(targetValue);

	useEffect(() => {
		// props.onChange(result);
		// color.toHexString // "#000000"
		// color.toHsb // { h: 0, s: 0, b: 0 }
		// color.toRgb // { r: 0, g: 0, b: 0, a: 0 }
		if(typeof color === 'string') return	
		if(!color) return
		console.log(color);
		const rgba = color.toRgb()
		const result = [rgba.r, rgba.g, rgba.b, Math.floor(rgba.a*255)]
		props.onChange(result)
	}, [color])



	const RGBAFToRGBA = (rgbaf: [number, number, number, number]) => {
		const r = Math.floor(rgbaf[0] * 255);
		const g = Math.floor(rgbaf[1] * 255);
		const b = Math.floor(rgbaf[2] * 255);
		const a = Math.floor(rgbaf[3] * 255);
		return [r, g, b, a];
	}

	const RGBAToRGBAF = (rgba: [number, number, number, number]) => {
		const r = rgba[0] / 255;
		const g = rgba[1] / 255;
		const b = rgba[2] / 255;
		const a = rgba[3] / 255;
		return [r, g, b, a];
	}

	return (
		<div>
			<ColorPicker
				value={color}
				onChange={setColor}
			/>
		</div>
	);
}

export default ColorPickerRGBA;
