import React from "react";
// import "../../src/";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
          <div className="logo">Graph-Plotting-App</div>
           <ul className="nav-links">
              {/* <Link to="/">Home</Link> */}
              <Link to="/">Input-Coordinates</Link>
              <Link to="/graph">Output-Graph</Link>
           </ul>
        </div>
  );

}