import React, { useEffect, useState } from 'react';
import {ColorPicker} from 'antd';
import type { Color, ColorPickerProps} from 'antd/es/color-picker';
import dayjs from 'dayjs';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function ColorPickerRGBA(props) {
	// TimeISO/TimeISO for interval

	const value = props.value;
	// console.log(' RGBA 0~255 ', props, value);
	const targetValue = `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${value[3]/255})`

	const [color, setColor] = useState<ColorPickerProps['value']>(targetValue);

	useEffect(() => {
		if(typeof color === 'string') return	
		if(!color) return
		// console.log(color);
		const rgba = color.toRgb()
		const result = [rgba.r, rgba.g, rgba.b, Math.floor(rgba.a*255)]
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

export default ColorPickerRGBA;
