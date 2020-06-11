import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex-centered">
      <Switch />
    </div>
  );
}

const Switch = () => {
  
  const [on, setOn] = useState(true);
  const [btnClassName, setBtnClassName] = useState("toggle-btn");

  const handleChance = e => {
    const btnClassName = [
      "toggle-btn",
      on ? "toggle-btn-on" : "toggle-btn-off"
    ]
      .filter(Boolean)
      .join(" ");
    // actualiza estados  
    setOn(!on);
    setBtnClassName(btnClassName);
  };

  return (
    <div>
      <label style={{ display: "block" }}>
        {/* Este es el boton como tal, utilizamos un input tipo checkbox */}
        <input
          className="toggle-input"
          type="checkbox"
          checked={on}
          onChange={handleChance}
        />
        <span className={btnClassName} />
      </label>
    </div>
  );
}

export default App;
