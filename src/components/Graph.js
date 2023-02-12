import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleLineChart = (props) => {
  useEffect(()=>{
    console.log("Sorting")
    // let data = props.data
    props.data.sort((a,b)=>{
      return a.x - b.x;
      // return 1;
      // return Number(a.x) - Number(b.y);
    })
    console.log(props.data)
  },[])
  return (
    <LineChart width={1700} height={800} data={props.data} margin={{ top: 30, right: 30, left: 30, bottom: 5 }}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 10 }} />
      {/* <Line type="monotone" dataKey="value" stroke="#82ca9d" /> */}
    </LineChart>
  );
};

export default SimpleLineChart;