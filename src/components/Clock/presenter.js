import React from "react";
import "./styles.scss";

function Clock(props) {
  const { deg } = props;

  return (
    <div className="clock">
      <div className="clock__center" />
      <div
        className="clock__hour"
        style={{ transform: `rotate(${deg.h}deg)` }}
      />
      <div
        className="clock__minute"
        style={{ transform: `rotate(${deg.m}deg)` }}
      />
    </div>
  );
}

export default Clock;
