import React from "react";

const Circle = ({ cell }) => {
  let color = "#182C61";
  if (cell === 1) {
    color = "#99e600";
  } else if (cell === 2) {
    color = "#ff99ff";
  }

  var style = {
    backgroundColor: color
  };

  return <div className="circle" style={style} />;
};

export default Circle;