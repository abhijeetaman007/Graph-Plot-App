import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleLineChart = (props) => {
  return (
    <LineChart width={1500} height={800} data={props.data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
      {/* <Line type="monotone" dataKey="value" stroke="#82ca9d" /> */}
    </LineChart>
  );
};

export default SimpleLineChart;