import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { restaurants } from "../../_mock-data.ts/restaurants";
import Button from "../components/UI/button/Button";
import Card from "../components/UI/card/Card";
import ListItem from "../components/UI/list-item/ListItem";
import { List } from "../components/UI/list/List";
import PageAnimator from "../utils/PageAnimator";
function RestaurantsPage() {
  return (
    <PageAnimator>
      <div className="full center">
        <List>
          {restaurants.map((r) => (
            <ListItem url={r.url} title={r.name}></ListItem>
          ))}
        </List>
      </div>
    </PageAnimator>
  );
}

export default RestaurantsPage;
