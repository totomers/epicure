import { ReactChild } from "react";
import "./Title.scss";

interface IPropsTitle {
  children: ReactChild;
  align?: "start" | "center" | "end";
}

function Title(props: IPropsTitle) {
  const { children, align } = props;
  return (
    <div className={`title-bar Text-Style-9 ${align}`}>
      <h1>{children}</h1>
    </div>
  );
}

export default Title;
