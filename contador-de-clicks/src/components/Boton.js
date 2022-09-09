import React from "react";
import "../stylesheets/Boton.css";

function Boton({ texto, clickButton, clickHandler }){
  return(
    <button className={ clickButton ? "boton-click" : "boton-reset" } onClick={clickHandler}>
      {texto}
    </button>
  );
}

export default Boton;