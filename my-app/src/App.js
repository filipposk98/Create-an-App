import React, { useEffect, useContext  } from "react";
import './App.css';
import Button from './Component/Button'
import CountdownAnimation from "./Component/CountdownAnimation";
import SetPomodoro from './Component/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'



function App() {
  
const { 
  pomodoro,
  executing,
  startAnimate,
  children,
  startTimer,
  pauseTimer,
  updateExecute,
  setCurrentTimer,
  SettingsBtn } = useContext(SettingsContext)

  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

return (
    <div className="App">
      <header className="App-header">
        <h1>CountDownTimer</h1>
        <p>Set the Timer!!!</p>
        {pomodoro !== 0?
        
        <>
        <ul className="labels">
          <li>
            <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Long Break" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        <Button title="Settings" _callback={SettingsBtn} />
        <div className="timer-container">
        <div className="time-wrapper">
            <CountdownAnimation
              key={pomodoro} 
              timer={pomodoro} 
              animate={startAnimate}
            >
              {children}
            </CountdownAnimation>
        </div>
      </div>
      <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
       </> : <SetPomodoro />}
      
        
        
       
      </header>
    </div>
  );
}

export default App;



