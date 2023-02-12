import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Nav from "./components/Nav";
import SimpleLineChart from './components/Graph'
import Input from './components/Input'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const data1 = [
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

export default App;
