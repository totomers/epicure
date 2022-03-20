// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRestaurant } from "../interfaces/restaurant.interface";
import { IChef } from "../interfaces/chef.interface";
import { IDish } from "../interfaces/dish.interface";
import { ISearchResults } from "../interfaces/search.interface";

const baseUrl = "http://localhost:4000/api/v1";
// Define a service using a base URL and expected endpoints
export const epicureApi = createApi({
  reducerPath: "epicureApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<{ restaurants: IRestaurant[] }, string>({
      query: (filter) => `restaurants/${filter}`,
    }),
    getPopularRestaurants: builder.query<{ restaurants: IRestaurant[] }, null>({
      query: () => `restaurants/popular`,
    }),
    getRestaurantsOfChef: builder.query<{ restaurants: IRestaurant[] }, string>(
      {
        query: (chefId) => `restaurants/ofChef/${chefId}`,
      }
    ),
    getAllChefs: builder.query<{ chefs: IChef[] }, null>({
      query: () => `chefs/`,
    }),
    getWeeklyChef: builder.query<{ weeklyChef: IChef }, null>({
      query: () => `chefs/weekly`,
    }),
    getAllDishes: builder.query<{ dishes: IDish[] }, null>({
      query: () => `dishes/`,
    }),
    getAllContent: builder.query<{ results: ISearchResults }, string>({
      query: (name) => `search/${name}`,
    }),
    getRestaurant: builder.query<{ restaurant: IRestaurant }, string>({
      query: (_id) => `restaurants/${_id}`,
    }),
    getChef: builder.query<{ chef: IChef }, string>({
      query: (_id) => `chefs/${_id}`,
    }),
    getDish: builder.query<{ dish: IDish }, string>({
      query: (_id) => `dishes/${_id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllRestaurantsQuery,
  useGetPopularRestaurantsQuery,
  useGetAllChefsQuery,
  useGetAllDishesQuery,
  useGetWeeklyChefQuery,
  useGetRestaurantsOfChefQuery,
  useGetAllContentQuery,
  useGetRestaurantQuery,
  useGetChefQuery,
  useGetDishQuery,
} = epicureApi;
