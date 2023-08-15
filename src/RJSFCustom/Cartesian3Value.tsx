import React, { useEffect, useState } from 'react';
import { DatePicker, InputNumber, Button } from 'antd';
import dayjs from 'dayjs';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function Cartesian3Value(props) {
	// TimeISO/TimeISO for interval

	const formContext = props.formContext;
	const key = props.name;  // the key of this component cartesian  cartographicDegrees cartographicRadians           

	// cartesian x y z 
  // cartographicDegrees lontitude latitude height
	// cartographicRadians lontitude latitude height 


	const { formData } = formContext;
	let epoch = null;
	if (formData) {
		epoch = formData.epoch;
	}

	const value = props.value;
	let valueVaryTime = false;
	if (value && value.length > 0) {
		value.map((item, index) => {
			if (typeof item === 'string') {
				valueVaryTime = true;
			}
		})
	}

	if (!!epoch) {
		valueVaryTime = true;
	}

	let initValue = null;
	if(value && value.length > 0) {
		initValue = []
	}

	if (valueVaryTime) {
		if (!!epoch) {
			// if epoch is set then 
			value.map((item, index) => {
				if (index % 4 === 0) {
					initValue.push([item, value[index + 1], value[index + 2], value[index + 3]]);
				}
			})
		} else {
			value.map((item, index) => {
				if (index % 4 === 0) {
					initValue.push([new dayjs(item), value[index + 1], value[index + 2], value[index + 3]]);
				}
			})
		}
	} else {
		value.map((item, index) => {
			if (index % 3 === 0) {
				initValue.push([value[index], value[index + 1], value[index + 2]]);
			}
		})
	}

	const [enableTimeInput, setEnableTimeInput] = useState(valueVaryTime)
	const [isUseEpoch, setUseEpoch] = useState(!!epoch);
	const [valueAry, setValueAry] = useState(initValue || []); // [ item = [], item = [], item = [] ]

	useEffect(() => {
		const result = valueAry.flat()
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
					if (!isUseEpoch) {
						valueAry[index] = [new dayjs(Date.now()), item[0], item[1], item[2]];
					} else {
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
		let min = Number.NEGATIVE_INFINITY;
		let max = Number.POSITIVE_INFINITY;
		let min2 = Number.NEGATIVE_INFINITY;
		let max2 = Number.POSITIVE_INFINITY;
		let title = 'X';
		let title2 = 'Y';
		if( key === 'cartographicDegrees'){
			min = -180;
			max = 180;
			min2 = -90;
			max2 = 90;
			title = 'Lontitude in degrees';
			title2 = 'Latitude in degrees';
		}else if (key === 'cartographicRadians'){
			min = -Math.PI;
			max = Math.PI;
			min2 = -Math.PI/2;
			max2 = Math.PI/2;
			title = 'Lontitude in radians';
			title2 = 'Latitude in radians ';
		}
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
							title={"second after epoch"}
							onChange={(date) => {
								item[0] = date;
								setValueAry([...valueAry]);
							}}
						/>
					}
					<InputNumber
						value={x}
						min={min}
						max={max}
						title={title}
						onChange={(e) => {
							if (enableTimeInput) {
								item[1] = e;
							} else {
								item[0] = e;
							}
							setValueAry([...valueAry]);
						}}
					/>
					<InputNumber
						value={y}
						min={min2}
						max={max2}
						title={title2}
						onChange={(e) => {
							if (enableTimeInput) {
								item[2] = e;
							} else {
								item[1] = e;
							}
							setValueAry([...valueAry]);
						}}
					/>
					<InputNumber
						value={z}
						title={"Z or Height "}
						onChange={(e) => {
							if (enableTimeInput) {
								item[3] = e;
							} else {
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
			{valueAry.length === 0 && <Button onClick={addNewItem}>新增</Button>}
		</div>
	);
}

export default Cartesian3Value;
