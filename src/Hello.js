import React, { Component } from "react";
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <h3>Let's learn React</h3>
        <p>{this.props.start}</p>
      </div>
    );
  }
}

export default Hello;
