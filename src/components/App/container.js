import React, { Component } from "react";
import App from "./presenter";

export default class Container extends Component {
  render() {
    return <App {...this.props} />;
  }
}
