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
import Grid from "../components/UI/grid/Grid";
import "./RestaurantsPage.scss";
import Marginer from "../components/UI/marginer/Marginer";

function RestaurantsPage() {
  const [filter, setFilter] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const { data, error, isLoading } = useGetAllRestaurantsQuery(filter);
  console.log(data);

  const restaurants = data?.restaurants;
  // console.log("url", SERVER_DEVELOPMENT_URL + data?.restaurants[7].url);

  return (
    <PageAnimator>
      <div className="full">
        <Marginer height={43} />

        <div className="restaurant-tab-filters">
          <a
            onClick={() => {
              setTabIndex(0);
              setFilter("");
            }}
            className={tabIndex === 0 ? "active-tab" : ""}
          >
            All
          </a>
          <a
            onClick={() => {
              setTabIndex(1);
              setFilter("new");
            }}
            className={tabIndex === 1 ? "active-tab" : ""}
          >
            New
          </a>
          <a
            onClick={() => {
              setTabIndex(2);
              setFilter("popular");
            }}
            className={tabIndex === 2 ? "active-tab" : ""}
          >
            Most Popular
          </a>
          <a
            onClick={() => {
              setTabIndex(3);
              setFilter("open");
            }}
            className={tabIndex === 3 ? "active-tab" : ""}
          >
            Open Now
          </a>
        </div>
        <Marginer height={35} />
        {data && (
          <Grid>
            {restaurants?.map((r) => (
              <Card
                url={r.url}
                title={r.name}
                subtitle={r.chef.name}
                key={r._id}
              ></Card>
            ))}
          </Grid>
        )}
      </div>
    </PageAnimator>
  );
}

export default RestaurantsPage;
