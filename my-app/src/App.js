import React, { useState } from "react";
import './App.css';
import AddValue from './Component/ButtonAdd/AddValue.js';
import RemoveValue from './Component/ButtonRemove/ButtonRemove.js';
import ToggleVisibilityBtn from "./Component/toggleVisability/toggleVisibility";



function App() {

//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   const decrementCount = () => {
//     if (count > 0) setCount(count - 1);
//     console.log(count)
//   };

//   const incrementCount = () => {
//     setCount(count + 1);
//     console.log(count)
//   };

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);

//  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <AddValue incrementCount={incrementCount}/>

        <RemoveValue decrementCount={decrementCount}/>
      
      <ToggleVisibilityBtn 
      toggleVisibility={toggleVisibility} 
      isVisible={isVisible}
      count={count}
      setCount={setCount}
      />
     
      <button onClick={toggleVisibility}>


        {isVisible ? "Hide number" : "Show number"}
      </button>

      {isVisible && (
        <input
          type="number"
          name="clicks"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
      )} */}
       
      </header>
    </div>
  );
}

export default App;
