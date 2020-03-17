import React from "react";
import { withRouter } from "react-router-dom";

const LandCard = ({ data, history }) => {
  const handleCreateLandNavigation = () => {
    history.push("/app/create-land", { currentLand: data });
  };

  const handlePlotMapNavigate = () => {
    history.push("/app/map", { currentLand: [data] });
  };
  return (
    <div className="col-lg-4">
      <div className="card">
        {/* Card header */}
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-8">
              {/* Title */}
              <h5 className="h3 mb-0">Land - {data.name}</h5>
            </div>
            <div className="col-4 text-right">
              <button
                type="button"
                className="btn btn-sm btn-neutral"
                onClick={handleCreateLandNavigation}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        {/* Card image */}
        {/* List group */}
        {/* Card body */}
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Location: {data.location}</li>
            <li className="list-group-item">Type: {data.type}</li>
            <li className="list-group-item">Town: {data.town}</li>
          </ul>

          <button className="btn btn-primary" onClick={handlePlotMapNavigate}>
            Plot on map
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LandCard);
