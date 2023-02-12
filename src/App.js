import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Nav from "./components/Nav";
import SimpleLineChart from './components/Graph'
import Input from './components/Input'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const data1 = [
// //   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
// //   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
// //   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
// //   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
// //   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
// //   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
// //   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    // {name: '1',value:'3'},
    // {name: '2',value:'2'},
    // {name: '3',value:'4'},
    // {name: '4',value:'1'}
    {x:'1',y:'2'},
    {x:'3',y:'4'},
    {x:'2',y:'1'}
];




function App() {

  const [data,setData] = useState([])
  
  const handleInputDataChange = (newData) =>{
      console.log("We got changed Data coordinates")
      console.log(newData)
      setData([...newData]);
  }

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Input data={data} onInputChange={handleInputDataChange}/>} />
        <Route path="/graph" element={<SimpleLineChart data={data}/>} />
      </Routes> 
    </div>
  </Router>
  );
}

   {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <SimpleLineChart/> */}
   

export default App;
