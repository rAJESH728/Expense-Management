import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let heightFiller = "0%";

  if (props.valueSum > 0) {
    heightFiller = Math.round((props.value / props.valueSum) * 100)+'%';
  }

  return (
    <div className="chart-bar" >
      <div className="chart-bar__inner" >
        <div className="chart-bar__fill" style={{ height: heightFiller }}></div>
      </div>
      <div className="chart-bar__label" >{props.label}</div>
    </div>
  );
};

export default ChartBar;
