import { useEffect, useState } from 'react';

function Timer() {
    // let [milliseconds, setMilliseconds] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer = null;
        if(isRunning){
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }else{
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);


    useEffect(() => {
        if(seconds === 60){
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
        }
    }, [seconds]);


    const start = () => {
       setIsRunning(true);
    }
    const stop = () => {
       setIsRunning(false);
    }
    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    }


  return (
    <div>
      <p> {minutes<10 ? "0"+minutes : minutes} : {seconds < 10 ? "0"+ seconds : seconds} </p>
        {
            isRunning ? <button onClick={stop}>stop</button> :
            <button onClick={start} >start</button>

        }
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Timer