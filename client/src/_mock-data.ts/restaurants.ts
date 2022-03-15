import { IRestaurant } from "../interfaces/restaurant.interface";
import { imageBaseRestaurantUrl } from "./util";

const r1: IRestaurant = {
  _id: "",
  name: "Claro",
  url: `${imageBaseRestaurantUrl}/claro.png`,
  //@ts-ignore
  chef: "Ran Shmueli",
};
const r2: IRestaurant = {
  _id: "",
  name: "Lumina",
  url: `${imageBaseRestaurantUrl}/lumina.png`,
  //@ts-ignore

  chef: "Meir Adoni",
};
const r3: IRestaurant = {
  _id: "",
  name: "Tiger Lilly",
  url: `${imageBaseRestaurantUrl}/tiger-lili.png`,
  //@ts-ignore

  chef: "Yanir Green",
};

export const restaurants: IRestaurant[] = [r1, r2, r3, r2];

export const r4: IRestaurant = {
  _id: "",
  name: "Onza",
  url: `${imageBaseRestaurantUrl}/onza.png`,
  //@ts-ignore

  chef: "Yossi Shitrit",
};
export const r5: IRestaurant = {
  _id: "",
  name: "Kitchen Market",
  url: `${imageBaseRestaurantUrl}/kitchenMarket.png`,
  //@ts-ignore

  chef: "Yossi Shitrit",
};
export const r6: IRestaurant = {
  _id: "",
  name: "Mashya",
  url: `${imageBaseRestaurantUrl}/mashya.png`,
  //@ts-ignore

  chef: "Yossi Shitrit",
};
