import React, { Component } from "react";
import Clock from "./presenter";

export default class Container extends Component {
  render() {
    return <Clock {...this.props} />;
  }
}
