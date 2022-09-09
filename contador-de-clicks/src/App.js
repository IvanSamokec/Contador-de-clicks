import './App.css';
import clikcer from './images/clicker.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';
import React from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(numClicks + 1);
  }
  
  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='clicker-logo-contenedor'>
        <img className='clicker-logo'
             src={clikcer}
             alt='Logo de clicker'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='Click'
          clickButton={true}
          clickHandler={clickHandler}
        />
        <Boton 
          texto='Reset'
          clickButton={false}
          clickHandler={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
