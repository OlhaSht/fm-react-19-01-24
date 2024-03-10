
import React, { useState, useEffect } from 'react';

const FunkStopWatch = () => {
    const[time, setTime] = useState(0);
    const [isRunning, setIsRunning]= useState(false);
    const handlerBtn  = () =>{setIsRunning(!isRunning)}
    useEffect (()=>{
       if(isRunning){
         const idInterval = setInterval(()=>{
            setTime(time=>time+1)
         }, 1000);   
         return ()=>{
            clearInterval(idInterval)
         }
       }
    }, [isRunning]);
    return (
        <div>
            <h2>Stop Watch</h2>
            <h3>{time}</h3>
            <button onClick={handlerBtn}>{isRunning?'Stop':'Start'}</button>
        </div>
    );
}

export default FunkStopWatch;
