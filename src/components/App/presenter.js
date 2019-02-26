import React from "react";
import Clocks from "../Clocks";

import "./styles.scss";

function App(props) {
  const { time } = props;

  return (
    <div className="App">
      <div className="clock__container">
        <Clocks time={time[0]} />
        <Clocks time={time[1]} />
        <Clocks time={time[2]} />
        <Clocks time={time[3]} />
        <Clocks time={time[4]} />
        <Clocks time={time[5]} />
      </div>
    </div>
  );
}

export default App;
