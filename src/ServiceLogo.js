import React, { Component } from "react";
import img from "./innovation.svg";
class ServiceLogo extends Component {
  render() {
    return (
      <div>
        <img
          src={img}
          height={this.props.height}
          width={this.props.width}
        ></img>
      </div>
    );
  }
}

export default ServiceLogo;
