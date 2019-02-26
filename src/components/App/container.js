import React, { Component } from "react";
import App from "./presenter";
import Moment from "moment";

export default class Container extends Component {
  state = {
    time: Moment(new Date()).format("hhmmss")
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: Moment(new Date()).format("hhmmss")
      });
    }, 1000);
  }

  render() {
    return <App {...this.state} {...this.props} />;
  }
}
