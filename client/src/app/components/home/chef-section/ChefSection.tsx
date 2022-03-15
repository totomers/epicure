import React, { useEffect } from "react";
import Title from "../../UI/title/Title";
import "./ChefSection.scss";
import ImageWithLabel from "./subcomponents/ImageWithLabel";
import Carousel from "../../UI/carousel/Carousel";
import Card from "../../UI/card/Card";
import Marginer from "../../UI/marginer/Marginer";
import {
  useGetRestaurantsOfChefQuery,
  useGetWeeklyChefQuery,
} from "../../../../services/epicure";
import { ChefRestaurants } from "./subcomponents/ChefRestaurants";
function ChefSection() {
  const { data, isLoading, isSuccess } = useGetWeeklyChefQuery(null);

  const chefsRestaurants = [];

  // const { weeklyChef } = data!;

  const getFirstName = (fullname: string | undefined) => {
    return fullname?.split(" ")[0];
  };

  return (
    <div className="section  chef-section">
      <Title letterSpacing={2} customClass={"chef-section-title"}>
        CHEF OF THE WEEK:
      </Title>
      {isSuccess && (
        <>
          <div className="about-chef-section">
            <ImageWithLabel
              url={data?.weeklyChef.url!}
              label={data?.weeklyChef.name!}
            ></ImageWithLabel>
            <div className="chef-description">{data?.weeklyChef.descr}</div>
          </div>
          <div className="chef-restaurants-section">
            <Title align="start">
              {getFirstName(data?.weeklyChef.name) + "'s restaurants: "}
            </Title>
            <Marginer height={23}></Marginer>
            {/* <Carousel
              customClass="align-left"
              slidesToShow={3}
              slidesToShowMobiles={2}
            >
              {chefsRestaurants.map((r) => (
                <Card
                  key={r.name}
                  url={r.url}
                  title={r.name}
                  size={"small"}
                  margin={13.3}
                ></Card>
              ))}
            </Carousel> */}
            <ChefRestaurants chefId={data?.weeklyChef._id}></ChefRestaurants>
          </div>
        </>
      )}
    </div>
  );
}

export default ChefSection;
