import React from "react";

interface IPropsMarginer {
  height: number;
}

function Marginer(props: IPropsMarginer) {
  return <div style={{ height: props.height }}></div>;
}

export default Marginer;
