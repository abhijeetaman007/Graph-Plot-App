import React from "react";
// import "../../src/";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Graph-Plotting-App</div>
           <ul className="nav-links">
              <Link to="/" className="link-wrapper">Input-Data</Link>
              <Link to="/graph" className="link-wrapper">Graph</Link>
           </ul>
        </div>
  );

}