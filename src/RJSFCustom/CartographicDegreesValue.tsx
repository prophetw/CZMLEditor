import React, { useEffect, useState } from 'react';
import { DatePicker, InputNumber, Button } from 'antd';
import dayjs from 'dayjs';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function CartographicDegreesValue(props) {
	// TimeISO/TimeISO for interval
	console.log(' props----props ', props);
	const value = props.value;
	let valueVaryTime = false;
	if (value && value.length > 0) {
		value.map((item, index) => {
			if (typeof item === 'string') {
				valueVaryTime = true;
			}
		})
	}

	console.log(' ----- isValueVaryTime ---- ', valueVaryTime);
	console.log(' ----- value ---- ', value);

	let initValue = [];

	if (valueVaryTime) {
		value.map((item, index) => {
			if (index % 4 === 0) {
				initValue.push([new dayjs(item), value[index + 1], value[index + 2], value[index + 3]]);
			}
		})
	} else {
		value.map((item, index) => {
			if (index % 3 === 0) {
				initValue.push([value[index], value[index + 1], value[index + 2]]);
			}
		})
	}

	const [enableTimeInput, setEnableTimeInput] = useState(valueVaryTime)
	const [isUseEpoch, setUseEpoch] = useState(false);
	const [valueAry, setValueAry] = useState(initValue || []);

	useEffect(() => {
		const result = valueAry.flat()
		console.log(result);
		if (enableTimeInput && !isUseEpoch) {
			result.map((item, index) => {
				if (index % 4 === 0) {
					result[index] = item.toISOString();
				}
			})
		}
		props.onChange(result);
	}, [valueAry])

	const addNewItem = () => {
		if (enableTimeInput) {
			setValueAry([...valueAry, [new dayjs(Date.now()), 0, 0, 0]]);
		} else {
			setValueAry([...valueAry, [0, 0, 0]]);
		}
	}

	const toggleEpoch = () => {
		let useEpoch = !isUseEpoch;
		valueAry.forEach((item, index) => {
			if (enableTimeInput) {
				if (item.length === 3) {
					valueAry[index] = [0, item[0], item[1], item[2]];
				}
			} else {
				if (item.length === 4) {
					valueAry[index] = [item[1], item[2], item[3]];
				}
			}
		})
		setUseEpoch(useEpoch);
		setValueAry([...valueAry]);
	}

	const toggleTime = () => {
		let endEnableTimeInput = !enableTimeInput;
		valueAry.forEach((item, index) => {
			if (endEnableTimeInput) {
				if (item.length === 3) {
					if(!isUseEpoch){
						valueAry[index] = [new dayjs(Date.now()), item[0], item[1], item[2]];
					}else{
						valueAry[index] = [0, item[0], item[1], item[2]];
					}
				}
			} else {
				if (item.length === 4) {
					valueAry[index] = [item[1], item[2], item[3]];
				}
			}
		})
		setEnableTimeInput(endEnableTimeInput);
		setValueAry([...valueAry]);
	}

	const ArrayItem = (ary) => {
		console.log(' ary ', ary);
		return ary.map((item, index) => {
			let [x, y, z] = item
			let time = null;
			if (enableTimeInput) {
				time = item[0];
				x = item[1];
				y = item[2];
				z = item[3];
			} 
			return (
				<div key={index}>
					{enableTimeInput && !isUseEpoch &&
						<DatePicker
							value={time}
							onChange={(date) => {
								item[0] = date;
								setValueAry([...valueAry]);
							}}
							showTime
						/>
					}
					{enableTimeInput && isUseEpoch &&
						<InputNumber
							value={time}
							onChange={(date) => {
								item[0] = date;
								setValueAry([...valueAry]);
							}}
						/>
					}

					<InputNumber
						value={x}
						placeholder='经度'
						min={-180}
						max={180}
						onChange={(e) => {
							if(enableTimeInput){
								item[1] = e;
							}else{
								item[0] = e;
							}
							setValueAry([...valueAry]);
						}}
					/>
					<InputNumber
						value={y}
						placeholder='纬度'
						min={-90}
						max={90}
						onChange={(e) => {
							if(enableTimeInput){
								item[2] = e;
							}else{
								item[1] = e;
							}
							setValueAry([...valueAry]);
						}}
					/>
					<InputNumber
						value={z}
						onChange={(e) => {
							if(enableTimeInput){
								item[3] = e;
							}else{
								item[2] = e;
							}
							setValueAry([...valueAry]);
						}}
					/>
					<div>
						<Button onClick={() => {
							valueAry.splice(index, 1);
							setValueAry([...valueAry]);
						}}>删除</Button>
						<Button onClick={addNewItem}>新增</Button>
					</div>
				</div>
			)
		})

	}

	return (
		<div>
			<Button onClick={(e) => {
				console.log(e);
				toggleTime()
			}}>开启时间输入 {enableTimeInput ? `true` : 'false'} </Button>
			<Button onClick={(e) => {
				toggleEpoch()
			}}>useEpoch {isUseEpoch ? `true` : 'false'} </Button>
			{ArrayItem(valueAry)}
			{ valueAry.length === 0 && <Button onClick={addNewItem}>新增</Button> }
		</div>
	);
}

export default CartographicDegreesValue;
