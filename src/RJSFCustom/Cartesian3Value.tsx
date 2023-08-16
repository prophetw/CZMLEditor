import React, { useEffect, useState } from 'react';
import { DatePicker, InputNumber, Button, Modal } from 'antd';
import dayjs from 'dayjs';
import TextArea from 'antd/es/input/TextArea';
// dayjs.locale('zh-cn');
dayjs().locale('zh-cn').format();

function Cartesian3Value(props) {
	// TimeISO/TimeISO for interval

	console.log(' cartesian3Value cop ---- ', props);

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
	if (value && value.length > 0) {
		initValue = []
	}


	if (value && value.length > 0) {
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
	}


	const [enableTimeInput, setEnableTimeInput] = useState(valueVaryTime)
	const [isUseEpoch, setUseEpoch] = useState(!!epoch);
	const [valueAry, setValueAry] = useState<any[] | null>(initValue); // [ item = [], item = [], item = [] ]
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [textareaValue, setTextareaValue] = useState('')

	useEffect(() => {
		let result = null;
		if (valueAry === null) {
		} else {
			result = valueAry.flat()
			if (enableTimeInput && !isUseEpoch) {
				result.map((item, index) => {
					if (index % 4 === 0) {
						result[index] = item.toISOString();
					}
				})
			}
		}
		if(result !== null) {
			const textareaVal = result.join(',')
			setTextareaValue(textareaVal);
		}
		props.onChange(result);
	}, [valueAry])

	const showModal = () => {
		setIsModalOpen(true);
	}

	const handleOk = () => {
		setIsModalOpen(false);
	}

	const handleCancel = () => {
		setIsModalOpen(false);
	}

	const addNewItem = () => {
		const oldAry = valueAry ? valueAry : [];
		if (enableTimeInput) {
			setValueAry([...oldAry, [new dayjs(Date.now()), 0, 0, 0]]);
		} else {
			setValueAry([...oldAry, [0, 0, 0]]);
		}
	}

	const deleteItem = (index: number) => {
		if (valueAry === null) return
		const oldAry = valueAry ? valueAry : [];
		oldAry.splice(index, 1);
		if (oldAry.length === 0) {
			setValueAry(null);
		} else {
			setValueAry([...oldAry]);
		}
	}

	const toggleEpoch = () => {
		if (valueAry === null) return
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
		if (valueAry === null) return
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
		// when large ary will encounter performance issue
		//  
		let min = Number.NEGATIVE_INFINITY;
		let max = Number.POSITIVE_INFINITY;
		let min2 = Number.NEGATIVE_INFINITY;
		let max2 = Number.POSITIVE_INFINITY;
		let title = 'X';
		let title2 = 'Y';
		if (key === 'cartographicDegrees') {
			min = -180;
			max = 180;
			min2 = -90;
			max2 = 90;
			title = 'Lontitude in degrees';
			title2 = 'Latitude in degrees';
		} else if (key === 'cartographicRadians') {
			min = -Math.PI;
			max = Math.PI;
			min2 = -Math.PI / 2;
			max2 = Math.PI / 2;
			title = 'Lontitude in radians';
			title2 = 'Latitude in radians ';
		}
		return (
			<div style={{ maxHeight: 300, overflow: 'auto' }}>
				{ary.map((item, index) => {
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
									deleteItem(index)
								}}>删除</Button>
								<Button onClick={addNewItem}>新增</Button>
							</div>
						</div>
					)
				})}
			</div>
		)

	}

	const getValue = () => {
		if (valueAry === null) return '';
		let str = '';
		valueAry.forEach((item, index) => {
			if (enableTimeInput) {
				if (isUseEpoch) {
					str += `${item[0]} ${item[1]} ${item[2]} ${item[3]}\n`;
				} else {
					str += `${dayjs(item[0]).format('YYYY-MM-DD HH:mm:ss')} ${item[1]} ${item[2]} ${item[3]}\n`;
				}
			} else {
				str += `${item[0]} ${item[1]} ${item[2]}\n`;
			}
		})
		return str;
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
			<Button onClick={(e) => {
				console.log(' batchInput');
				showModal()
			}}>batchInput </Button>
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<TextArea value={textareaValue} />
			</Modal>
			{valueAry !== null && valueAry.length > 0 && ArrayItem(valueAry)}
			{valueAry === null && <Button onClick={addNewItem}>新增</Button>}
		</div>
	);
}

export default Cartesian3Value;
