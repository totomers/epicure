import { IRoute } from "../interfaces/route.interface";

const chefsRoute: IRoute = { label: "Chefs", path: "chefs" };
const restaurantsRoute: IRoute = { label: "Restaurants", path: "restaurants" };

export const routes: IRoute[] = [restaurantsRoute, chefsRoute];
