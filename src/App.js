import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex-centered">
      {/* puedes alternar entre true y false */}
      {/* el objetivo es que el switch maneje su propio estado y 
      no lo lea desde una prop */}
      <Switch />
    </div>
  );
}
/**
 * El componente Switch es de tipo funcional
 * Que "clase" de cambios deberias realizar para
 * que este componente pueda manejar su propio estado
 * interno?
 */
class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
      btnClassName: "toggle-btn"
    };
  }
  handleClick = e => {
    const btnClassName = [
      "toggle-btn",
      this.state.on ? "toggle-btn-on" : "toggle-btn-off"
    ]
      .filter(Boolean)
      .join(" ");
    this.setState({
      on: !this.state.on,
      btnClassName
    });
  };

  render() {
    return (
      <div>
        <label style={{ display: "block" }}>
          {/* Este es el boton como tal, utilizamos un input tipo checkbox */}
          <input
            className="toggle-input"
            type="checkbox"
            checked={this.state.on}
            onChange={this.handleClick}
          />
          <span className={this.state.btnClassName} />
        </label>
      </div>
    );
  }
}

export default App;
