import React from "react";
import { useParams } from "react-router-dom";
import { SERVER_DEVELOPMENT_URL } from "../../CONFIG";
import { useGetRestaurantQuery } from "../../services/epicure";
import Spinner from "../components/UI/spinner/Spinner";

export default function RestaurantPage() {
  const { _id } = useParams();
  const { data, isLoading, isSuccess } = useGetRestaurantQuery(_id!);
  return (
    <div className="center">
      {isSuccess && (
        <ul>
          <li>{data?.restaurant.name}</li>
          <li>
            <img
              src={SERVER_DEVELOPMENT_URL + data?.restaurant.url}
              style={{ height: "50px", width: "50px" }}
            ></img>
          </li>
        </ul>
      )}
      {isLoading && <Spinner></Spinner>}
    </div>
  );
}
