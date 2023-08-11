import React from "react";

const ChildContainer = ({ option, onSelect, color }) => {
    const handleButtonClick = () => {
      onSelect(option);
    };
  
    return (
      <div className="child-container" style={{ backgroundColor: color }}>
        <h2>Child Component</h2>
        <button onClick={handleButtonClick}>{option}</button>
      </div>
    );
  };
  export default ChildContainer;