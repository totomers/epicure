import React from "react";
import { useParams } from "react-router-dom";
import { SERVER_DEVELOPMENT_URL } from "../../CONFIG";
import { useGetDishQuery } from "../../services/epicure";
import Spinner from "../components/UI/spinner/Spinner";

export default function DishPage() {
  const { _id } = useParams();
  const { data, isLoading, isSuccess } = useGetDishQuery(_id!);
  return (
    <div className="center">
      {isSuccess && (
        <ul>
          <li>{data?.dish.name}</li>
          <li>{data?.dish.ingredients}</li>
          <li>
            <img
              src={data?.dish.url}
              style={{ height: "50px", width: "50px" }}
            ></img>
          </li>
        </ul>
      )}
      {isLoading && <Spinner></Spinner>}
    </div>
  );
}
