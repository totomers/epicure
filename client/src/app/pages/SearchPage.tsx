import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "../components/search/SearchList";
import Marginer from "../components/UI/marginer/Marginer";
import Title from "../components/UI/title/Title";

export default function SearchPage() {
  let { name } = useParams();
  console.log("name from path params:", name);

  return (
    <>
      <Marginer height={40}></Marginer>
      <Title>Search Results Found</Title>
      {name && <SearchList name={name}></SearchList>}
    </>
  );
}
