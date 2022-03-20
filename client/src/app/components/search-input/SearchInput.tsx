import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllContentQuery } from "../../../services/epicure";
import Dropdown, { IDropdownItemGroup } from "../UI/dropdown/Dropdown";
import Input, { IPropsInput } from "../UI/input/Input";

interface IPropsSearchInput extends IPropsInput {}

export default function SearchInput(props: IPropsInput) {
  const {
    iconUrl,
    iconSize,
    iconDirection,
    iconCustomClass,
    className,
    placeHolder,
  } = props;

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const navigator = useNavigate();
  const { data, isLoading } = useGetAllContentQuery(search);
  const handleIconClick = () => {
    if (search.length === 0) return;
    setSearch("");
    // navigator("/search/" + search);
  };

  console.log("search input data", data);

  let transform1;
  let itemGro;
  if (data?.results) {
    transform1 = Object.entries(data?.results); //[[restaurants, [item1,item2,item2]], [dishes,[item1,item2,item2]], ]
    itemGro = transform1.map((x) => {
      const mappedItems = x[1].map((i: { name: string; _id: string }) => {
        return { label: i.name, value: i._id };
      });
      return { title: x[0], items: mappedItems };
    });
    console.log(itemGro);
  }

  return (
    <div
      style={{ position: "relative" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <Input
        iconUrl={iconUrl}
        iconCustomClass={iconCustomClass}
        iconSize={iconSize}
        iconDirection={iconDirection}
        className={className}
        placeHolder={placeHolder}
        onChange={(event: any) => {
          setSearch(event.target.value);
        }}
        value={search}
        onIconClick={handleIconClick}
        onDeleteIconClick={() => {
          setSearch("");
        }}
      ></Input>
      {focused && search.length > 0 && <Dropdown itemGroups={itemGro} />}
    </div>
  );
}
