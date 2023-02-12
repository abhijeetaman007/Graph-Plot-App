import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data1 = [
//   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    // {name: '1',value:'2'},
    // {name: '2',value:'3'},
    // {name: '3',value:'4'}
];

const SimpleLineChart = (props) => {

    // const [data,setData] = useState([])

    // useEffect(()=>{
        // con
    // },[data])
    // setData(props)
    // useEffect(()=>{

    // })   /
    // useEffect(()=>{
        // console.log("We got props")
        // console.log(props)
    //    setData(props.data); 
    // },[])

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


// To be Done: 

// https://codesandbox.io/s/8v85f --> Used for routing 
//                                 -> Use two routes chart,input
// https://recharts.org/en-US/examples --> Using ReChart for plotting graph (graph tab)

//ChatGPT approach to input x and y --> main state and update graph dynamically (inside input tab) 

//Keep Dark blue type of theme. 