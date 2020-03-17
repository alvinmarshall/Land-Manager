import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import GMap from "./GMap";

const WrapGMap = ({ location, history }) => {
  const { state } = location;
  const [land, setCurrentLand] = useState([]);

  useEffect(() => {
    if (state) {
      const { currentLand } = state;
      setCurrentLand(currentLand);
    }
  }, [state]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="card">
        <div className="card-body">
          <GMap data={land} router={history} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(WrapGMap);
