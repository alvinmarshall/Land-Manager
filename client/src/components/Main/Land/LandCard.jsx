import React from "react";

const LandCard = ({ data }) => {
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
              <a href="#!" className="btn btn-sm btn-neutral">
                Action
              </a>
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

          <a href="#!" className="btn btn-primary">
            Plot on map
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
