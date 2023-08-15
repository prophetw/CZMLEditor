import React, { useEffect, useState } from 'react';
import {ColorPicker} from 'antd';
import type {ColorPickerProps} from 'antd/es/color-picker';
import dayjs from 'dayjs';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function ColorPickerRGBAF(props) {
	// TimeISO/TimeISO for interval

	const value = props.value;
	console.log(' RGBAF 0~1 ', props, value);
	const targetValue = `rgba(${value[0] * 255}, ${value[1] * 255}, ${value[2] * 255}, ${value[3]})`

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
		const result = [rgba.r / 255, rgba.g / 255, rgba.b / 255, rgba.a]
		props.onChange(result)
	}, [color])

	return (
		<div>
			<ColorPicker
				value={color}
				onChange={setColor}
			/>
		</div>
	);
}

export default ColorPickerRGBAF;