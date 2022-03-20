import React from "react";
import { useParams } from "react-router-dom";
import { SERVER_DEVELOPMENT_URL } from "../../CONFIG";
import { useGetChefQuery } from "../../services/epicure";
import Spinner from "../components/UI/spinner/Spinner";

export default function ChefPage() {
  const { _id } = useParams();
  const { data, isLoading, isSuccess } = useGetChefQuery(_id!);

  return (
    <div className="center">
      {isSuccess && (
        <ul>
          <li>{data?.chef.name}</li>
          <li>{data?.chef.descr}</li>
          <li>
            <img
              src={SERVER_DEVELOPMENT_URL + data?.chef.url}
              style={{ height: "50px", width: "50px" }}
            ></img>
          </li>
        </ul>
      )}
      {isLoading && <Spinner></Spinner>}
    </div>
  );
}
