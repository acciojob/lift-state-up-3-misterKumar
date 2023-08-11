import React, { useState } from 'react';
import "../styles/App.css";
import ChildContainer from './ChildContainer';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      
      <ChildContainer  option="Option 1" onSelect={handleOptionSelect} color="rgb(202,90,29)" />
      <ChildContainer   option="Option 2" onSelect={handleOptionSelect} color="rgb(254,208,0)" />

     
        <div>
          <h3>Selected Option: {selectedOption}</h3>
        </div>
      
    </div>
  );
}

export default App;
