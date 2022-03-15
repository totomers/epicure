import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { restaurants } from "../../_mock-data.ts/restaurants";
import Button from "../components/UI/button/Button";
import Card from "../components/UI/card/Card";
import ListItem from "../components/UI/list-item/ListItem";
import { List } from "../components/UI/list/List";
import PageAnimator from "../utils/PageAnimator";
import { useGetAllRestaurantsQuery } from "../../services/epicure";
import { SERVER_DEVELOPMENT_URL } from "../../CONFIG";
function RestaurantsPage() {
  const { data, error, isLoading } = useGetAllRestaurantsQuery(null);
  console.log(data);
  const restaurants = data?.restaurants;
  return (
    <PageAnimator>
      <div className="full center">
        {data && (
          <List>
            {restaurants?.map((r) => (
              <ListItem
                url={SERVER_DEVELOPMENT_URL + r.url}
                title={r.name}
                key={r._id}
              ></ListItem>
            ))}
          </List>
        )}
      </div>
    </PageAnimator>
  );
}

export default RestaurantsPage;
