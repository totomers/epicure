import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
function PageAnimator(props: { children: any }) {
  const { children } = props;
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { y: 800, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 800, opacity: 0 },
  });
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return setIsVisible(false);
  }, []);
  return (
    <div className="container">
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="page">
            {children}
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default PageAnimator;
