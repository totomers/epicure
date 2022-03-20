import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dropdown.scss";

export interface IDropdownItemGroup {
  title: string;
  items: IDropdownItem[];
}

export interface IDropdownItem {
  label: string;
  value: any;
}

interface IPropsDropdown {
  items?: any[];
  itemGroups?: IDropdownItemGroup[];
}
export default function Dropdown({ items, itemGroups }: IPropsDropdown) {
  console.log(itemGroups);
  const navigator = useNavigate();

  const handleMouseDown = (title: string, _id: string) => {
    navigator(`/${title}/` + _id);
  };
  return (
    <div className="dropdown">
      {itemGroups?.map((g) => (
        <div className="dropdown-item-group">
          <span className="dropdown-title"> {g.title}</span>
          {g.items.map((i: IDropdownItem) => (
            <a
              className="dropdown-item"
              onMouseDown={() => {
                handleMouseDown(g.title, i.value);
              }}
            >
              {i.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
