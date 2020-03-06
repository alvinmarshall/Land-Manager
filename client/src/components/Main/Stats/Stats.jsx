import React from "react";

const Stats = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-md-6">
        <div className="card card-stats">
          {/* Card body */}
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">
                  Total traffic
                </h5>
                <span className="h2 font-weight-bold mb-0">350,897</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                  <i className="ni ni-active-40" />
                </div>
              </div>
            </div>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2">
                <i className="fa fa-arrow-up" /> 3.48%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card card-stats">
          {/* Card body */}
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">
                  New users
                </h5>
                <span className="h2 font-weight-bold mb-0">2,356</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                  <i className="ni ni-chart-pie-35" />
                </div>
              </div>
            </div>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2">
                <i className="fa fa-arrow-up" /> 3.48%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card card-stats">
          {/* Card body */}
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">
                  Sales
                </h5>
                <span className="h2 font-weight-bold mb-0">924</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                  <i className="ni ni-money-coins" />
                </div>
              </div>
            </div>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2">
                <i className="fa fa-arrow-up" /> 3.48%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card card-stats">
          {/* Card body */}
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title text-uppercase text-muted mb-0">
                  Performance
                </h5>
                <span className="h2 font-weight-bold mb-0">49,65%</span>
              </div>
              <div className="col-auto">
                <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                  <i className="ni ni-chart-bar-32" />
                </div>
              </div>
            </div>
            <p className="mt-3 mb-0 text-sm">
              <span className="text-success mr-2">
                <i className="fa fa-arrow-up" /> 3.48%
              </span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
