import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function DoubleDateTimePicker(props) {
	const value = props.value;
	let start = null;
	let end = null;
	if (value) {
		start = value.split('/')[0]
		end = value.split('/')[1]
		start = new dayjs(start);
		end = new dayjs(end);
	}

	const [startDate, setStartDate] = useState(start);
	const [endDate, setEndDate] = useState(end);

	useEffect(() => {
		if (startDate && endDate) {
			const res = `${startDate.toISOString()}/${endDate.toISOString()}`
			props.onChange(res);
		}
	}, [startDate, endDate])

	return (
		<div>
			<DatePicker
				value={startDate}
				onChange={(date) => {
					setStartDate(date);
				}}
				showTime
			/>
			<DatePicker
				value={endDate}
				onChange={(date) => {
					setEndDate(date);
				}}
				showTime
			/>
		</div>
	);
}

export default DoubleDateTimePicker;
