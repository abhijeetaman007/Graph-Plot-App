import React, { useEffect, useState } from "react";

const Input = (props) => {
  const [coordinates, setCoordinates] = useState([...props.data
  ]);

  const handleChange = (index, event) => {
    const values = [...coordinates];
    if (event.target.name === "x") {
      values[index].x = event.target.value;
    } else {
      values[index].y = event.target.value;
    }
    setCoordinates(values);
    console.log(coordinates)
  };

  const handleAddClick = () => {
    setCoordinates([...coordinates, { x: "", y: "" }]);
    console.log(coordinates)
  };

  const handleRemoveClick = (index) => {
    const values = [...coordinates];
    values.splice(index, 1);
    setCoordinates(values);
    console.log(coordinates)
  };
  
  const handleReset = () =>{
      setCoordinates([])
  }

  useEffect(()=>{
    props.onInputChange(coordinates)
  },[coordinates])

  return (
    <div className="Input-Wrapper">
      {coordinates.map((coordinate, index) => (
        <div key={index}>
          <input
            type="text"
            name="x"
            value={coordinate.x}
            onChange={(event) => handleChange(index, event)}
          />
          <input
            type="text"
            name="y"
            value={coordinate.y}
            onChange={(event) => handleChange(index, event)}
          />
          <button onClick={() => handleRemoveClick(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddClick}>Add Coordinates</button>
      <button onClick={handleReset}>Reset Coordinates</button>
      
    </div>
  );
};

export default Input;
