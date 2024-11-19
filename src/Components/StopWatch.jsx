import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [running, setRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
      if (running) {
        intervalIdRef.current = setInterval(() => {
          setDuration(Date.now() - startTimeRef.current);
          // console.log(Date.now()-startTimeRef.current);
          
        }, 10);
      }
      return()=>{
        clearInterval(intervalIdRef.current);
      }
    },[running]);

  const start = () => {
    setRunning(true);
    startTimeRef.current = Date.now() - duration;
   
  };
  const stop = () => {
    setRunning(false);
  };
  const reStart = () => {
    setDuration(0);
    setRunning(false);
  };
  const timeFormat = () => {
    let hours = Math.floor(duration/(1000 * 60 * 60)%24)
    let minutes = Math.floor(duration/(1000 * 60) % 60)
    let seconds = Math.floor(duration/(1000) % 60)
    let milliSeconds = Math.floor(duration % 1000);
   
    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliSeconds = String(milliSeconds).padStart(3, "0")
    
    
    return `${minutes}:${seconds}:${milliSeconds}`;
  };
  return (
    <div className="stopWatch">
      <div className="display">{timeFormat()}</div>
      <div className="controls">
        <button className="start-btn" onClick={start}>
          Start
        </button>
        <button className="stop-btn" onClick={stop}>
          Stop
        </button>
        <button className="Restart-btn" onClick={reStart}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
