import React, { Component } from "react";
import logo from "./logo";
class Logo extends Component {
  render() {
    return <img src={logo} height={this.props.height} width={this}></img>;
  }
}

export default Logo;
