import { ReactChild } from "react";
import "./Title.scss";

interface IPropsTitle {
  children: ReactChild;
  align?: "start" | "center" | "end";
  letterSpacing?: number;
  customClass?: string;
}

function Title(props: IPropsTitle) {
  const { children, align, customClass, letterSpacing = 1.25 } = props;
  return (
    <div className={`title-bar Text-Style-9 ${align} ${customClass}`}>
      <h1 style={{ letterSpacing: `${letterSpacing}px` }}>{children}</h1>
    </div>
  );
}

export default Title;
