import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
function AnimatePage(props: { children: any }) {
  const { children } = props;
  const [isEntering, setIsEntering] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsEntering(true);
    }, 1);
  }, []);
  return (
    <div className="container">
      <CSSTransition
        in={isEntering}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <div className="page">{children}</div>
      </CSSTransition>
    </div>
  );
}

export default AnimatePage;
