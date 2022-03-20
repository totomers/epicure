import React from "react";
import { useGetAllContentQuery } from "../../../services/epicure";
import Card from "../UI/card/Card";
import Carousel from "../UI/carousel/Carousel";
import Grid from "../UI/grid/Grid";
import Marginer from "../UI/marginer/Marginer";
import Spinner from "../UI/spinner/Spinner";
import Title from "../UI/title/Title";

interface IPropsSearchList {
  name: string;
}

export default function SearchList(props: IPropsSearchList) {
  const { name } = props;
  const { data, isLoading, isSuccess, isUninitialized } =
    useGetAllContentQuery(name);

  console.log(data);

  return (
    <>
      {isSuccess && (
        <div>
          <Marginer height={50}></Marginer>
          {data?.results.restaurants && data?.results.restaurants?.length > 0 && (
            <>
              <Title>Restaurants</Title>
              <Grid>
                {data?.results.restaurants.map((r) => (
                  <Card
                    key={r.name}
                    url={r.url}
                    title={r.name}
                    size={"small"}
                    margin={13.3}
                  ></Card>
                ))}
              </Grid>
            </>
          )}
          <Marginer height={50}></Marginer>
          {data?.results.chefs && data?.results.chefs?.length > 0 && (
            <>
              <Title>Chefs</Title>
              <Grid>
                {data?.results.chefs.map((r) => (
                  <Card
                    key={r.name}
                    url={r.url}
                    title={r.name}
                    size={"small"}
                    margin={13.3}
                  ></Card>
                ))}
              </Grid>
            </>
          )}
          <Marginer height={50}></Marginer>
          {data?.results.dishes && data?.results.dishes?.length > 0 && (
            <>
              <Title>Dishes</Title>
              <Grid>
                {data?.results.dishes.map((r) => (
                  <Card
                    key={r.name}
                    url={r.url}
                    title={r.name}
                    size={"small"}
                    margin={13.3}
                  ></Card>
                ))}
              </Grid>
            </>
          )}
        </div>
      )}
      {!isLoading &&
        !data?.results?.dishes &&
        !data?.results.restaurants &&
        !data?.results.chefs && (
          <div className="section center">0 results found</div>
        )}
      {/* {isUninitialized && <div>Search All Content</div>} */}
      {isLoading && <Spinner></Spinner>}
    </>
  );
}
