import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";

interface IPropsListAnimator {
  children: any[];
  className?: string;
}
type ListItem = { delay: number; x: number };

function ListAnimator(props: IPropsListAnimator) {
  const { children, className } = props;

  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, opacity: 0 },
    enter: (item: ListItem) => (next) =>
      next({ x: 0, opacity: 1, delay: item.delay }),
    leave: { x: -100, opacity: 0 },
  });

  useEffect(() => {
    const listItems = Array.from("x".repeat(children.length)).map(
      (item, index) => {
        return { delay: index * (index + 200), x: index * (index - 100) };
      }
    ) as any;
    console.log(listItems);

    setItems(listItems);
  }, []);

  return (
    <div className={className}>
      {transition((style, item, _, index) =>
        item ? <animated.div style={style}>{children[index]}</animated.div> : ""
      )}
    </div>
  );
}

export default ListAnimator;
