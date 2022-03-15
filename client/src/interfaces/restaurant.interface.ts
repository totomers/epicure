import { IChef } from "./chef.interface";

export interface IRestaurant {
  url: string;
  _id: string;
  name: string;
  chef: IChef;
  url2x?: string;
  url3x?: string;
}
