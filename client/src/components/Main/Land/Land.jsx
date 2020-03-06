import React from "react";
import LandCard from "./LandCard";
import { useSelector } from "react-redux";

const Land = () => {
  const lands = useSelector(state => state.land.lands);

  return (
    <div className="container-fluid">
      <div className="row card-wrapper">
        {lands &&
          lands.map((data, index) => <LandCard key={index} data={data} />)}
      </div>
    </div>
  );
};

export default Land;
