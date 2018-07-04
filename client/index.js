import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <h1 style={{ textAlign: "center" }}>This is working fine.</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
