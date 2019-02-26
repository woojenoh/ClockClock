import React from "react";
import "./styles.scss";

function Clock() {
  return (
    <div className="clock">
      <div className="clock__center" />
      <div className="clock__hour" />
      <div className="clock__minute" />
    </div>
  );
}

export default Clock;
