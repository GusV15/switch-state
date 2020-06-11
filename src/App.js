import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex-centered">
      {/* puedes alternar entre true y false */}
      {/* el objetivo es que el switch maneje su propio estado y 
      no lo lea desde una prop */}
      <Switch on={true} />
    </div>
  );
}
/**
 * El componente Switch es de tipo funcional
 * Que "clase" de cambios deberias realizar para
 * que este componente pueda manejar su propio estado
 * interno?
 */

function Switch(props) {
  // mecanismo para aplicar las clases de on/off
  const btnClassName = [
    "toggle-btn",
    props.on ? "toggle-btn-on" : "toggle-btn-off"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label style={{ display: "block" }}>
        {/* Este es el boton como tal, utilizamos un input tipo checkbox */}
        <input className="toggle-input" type="checkbox" checked={props.on} />

        <span className={btnClassName} />
      </label>
    </div>
  );
}

export default App;
