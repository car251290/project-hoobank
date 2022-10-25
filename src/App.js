import React,{useEffect, useState,useContext,useRef} from 'react';
import {ThemeContext} from './Components/ThemedButton';
import Toolbar from './Components/Toolbar';
import './App.css';

const App = () => {
  const [add,Setadd] =useState(0);
  const [isOnline,setIsOnline]=useState(null);
  const timerStop = useRef(0);

  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  const ThemeContext = React.createContext(themes.light);
 
  const startHandler = () => {
    if (timerStop.current) { return; }
    timerStop.current = setInterval(() => Setadd(c => c+1), 1000);
  };
  const Stophandler = () => {
    clearInterval(timerStop.current);
    timerStop.current = 0;
  }

  useEffect(()=> {
    document.title = `You clicked ${add} times`;

  })
  
  useEffect(() => {
    return()=> clearInterval(timerStop.current);

  },[])

  useEffect(()=>{
    function handleStatusChange(status){
      setIsOnline(status.isOnline);
    }
  },[add]);

 
  return (
    <div className="App">
     <p1>Hello you can click {add}</p1>
     <button onClick={()=> Setadd(add+1)}>+</button>
     <button onClick={()=> Setadd(add-1)}>-</button>
     <button onClick={()=> startHandler()}>Start</button>
     <button onClick={()=> Stophandler()}>Stop</button>
     <div>
      <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
    </div>
   
    </div>
   
   
  );
}


export default App;
