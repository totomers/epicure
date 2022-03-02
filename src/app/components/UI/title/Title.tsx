import { ReactChild } from "react";
import "./Title.scss";

interface IPropsTitle {
  children: ReactChild;
}

function Title(props: IPropsTitle) {
  return (
    <div className="title-bar Text-Style-9">
      <h1>{props.children}</h1>
    </div>
  );
}

export default Title;
