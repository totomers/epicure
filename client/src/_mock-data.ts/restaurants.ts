import { IRestaurant } from "../interfaces/restaurant.interface";
import { imageBaseRestaurantUrl } from "./util";

const r1: IRestaurant = {
  name: "Claro",
  url: `${imageBaseRestaurantUrl}/claro.png`,
  chef: "Ran Shmueli",
};
const r2: IRestaurant = {
  name: "Lumina",
  url: `${imageBaseRestaurantUrl}/lumina.png`,
  chef: "Meir Adoni",
};
const r3: IRestaurant = {
  name: "Tiger Lilly",
  url: `${imageBaseRestaurantUrl}/tiger-lili.png`,
  chef: "Yanir Green",
};

export const restaurants: IRestaurant[] = [r1, r2, r3, r2];

export const r4: IRestaurant = {
  name: "Onza",
  url: `${imageBaseRestaurantUrl}/onza.png`,
  chef: "Yossi Shitrit",
};
export const r5: IRestaurant = {
  name: "Kitchen Market",
  url: `${imageBaseRestaurantUrl}/kitchenMarket.png`,
  chef: "Yossi Shitrit",
};
export const r6: IRestaurant = {
  name: "Mashya",
  url: `${imageBaseRestaurantUrl}/mashya.png`,
  chef: "Yossi Shitrit",
};
