import React from "react";
import Clock from "../Clock";

import "./styles.scss";

function Clocks(props) {
  const { time, timeSegment } = props;

  return (
    <div className="clocks">
      {timeSegment[time].map((z, index) => {
        return <Clock key={index} deg={{ h: z[0], m: z[1] }} />;
      })}
    </div>
  );
}

export default Clocks;
