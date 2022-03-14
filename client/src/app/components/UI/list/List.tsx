import React from "react";
import ListAnimator from "../../../utils/ListAnimator";

import "./List.scss";

interface IPropsList {
  children: any;
  className?: string;
}
export const List = (props: IPropsList) => {
  const { children, className } = props;
  return (
    <ListAnimator className={`list ${className}`}>{children}</ListAnimator>
  );
};
