import React from "react";

interface IPropsMarginer {
  height: number;
}

function Marginer(props: IPropsMarginer) {
  return <div style={{ height: props.height, width: "100%" }}></div>;
}

export default Marginer;
