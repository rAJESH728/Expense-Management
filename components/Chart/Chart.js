import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
  let valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  var sumOfValues= 0;
  for (const iterator of valueArray) {
      sumOfValues += iterator
  }
  console.log(sumOfValues);
  //let maximumValue = Math.max(...valueArray);
  return (
    <div className="chart" >
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          valueSum={sumOfValues}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
