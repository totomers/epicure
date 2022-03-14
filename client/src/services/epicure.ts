// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRestaurant } from "../interfaces/restaurant.interface";

const baseUrl = "https://localhost:4000/api/";
// Define a service using a base URL and expected endpoints
export const epicureApi = createApi({
  reducerPath: "epicureApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<IRestaurant[], string>({
      query: () => `restuarants/`,
    }),
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRestaurantsQuery } = epicureApi;
