import React, { useEffect } from "react";
import LandCard from "./LandCard";
import { useSelector, useDispatch } from "react-redux";
import { loadLandsAction } from "./reducer/landAction";

const Land = () => {
  const dispatch = useDispatch();
  const lands = useSelector(state => state.land.lands);

  useEffect(() => {
    dispatch(loadLandsAction());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row card-wrapper">
        {lands &&
          lands.map((data, index) => <LandCard key={index} data={data} />)}
      </div>
    </div>
  );
};

export default React.memo(Land);
