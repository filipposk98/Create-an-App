import React, { useState } from "react";
import './App.css';
// import AddValue from './Component/ButtonAdd/AddValue.js';
// import RemoveValue from './Component/ButtonRemove/ButtonRemove.js';
// import ToggleVisibilityBtn from "./Component/toggleVisability/toggleVisibility";
// import React, { useEffect, useContext } from 'react'
import Button from './Component/Button'
// import CountdownAnimation from './Components/CountdownAnimation'
import SetPomodoro from './Component/SetPomodoro'
// import { SettingsContext } from './context/SettingsContext'



function App() {
  


return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro</h1>
        <p>Be efficient!!!</p>
        <SetPomodoro/>
        
        
       
      </header>
    </div>
  );
}

export default App;



