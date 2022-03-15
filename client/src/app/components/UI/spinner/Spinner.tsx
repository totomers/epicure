import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Spinner.scss";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <ClipLoader color={"red"} loading={true} css={"spinner"} size={150} />
    </div>
  );
}
