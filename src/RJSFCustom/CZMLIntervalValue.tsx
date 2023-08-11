import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';

function DoubleDateTimePicker(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

	useEffect(()=>{
    if (startDate && endDate) {
			const res = `${startDate.toISOString()}/${endDate.toISOString()}`
			console.log(' res --- ', res);
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
