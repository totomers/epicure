import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";

interface IPropsSlideAnimator {
  children: any;
  direction?: "left" | "right" | "up" | "down";
}

export const SlideAnimator = (props: IPropsSlideAnimator) => {
  const [isVisible, setIsVisible] = useState(false);
  const { children, direction = "up" } = props;
  const x = direction === "left" ? 800 : direction === "right" ? -800 : 0;

  const y = direction === "up" ? 800 : direction === "down" ? -800 : 0;

  const transition = useTransition(isVisible, {
    from: { x, y, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x, y, opacity: 0 },
  });
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  });

  return (
    <div className="container">
      {transition((style, item) =>
        item ? <animated.div style={style}>{children}</animated.div> : ""
      )}
    </div>
  );
};
