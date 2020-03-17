import React from "react";
import LandBasicForm from "./LandBasicForm";
import LeaseForm from "./LeaseForm";
import LandFilesForm from "./LandFilesForm";

const LandDetailForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <nav className="nav nav-tabs" id="myTab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-basic-tab"
              data-toggle="tab"
              href="#nav-basic"
              role="tab"
              aria-controls="nav-basic"
              aria-selected="true"
            >
              Basic Info
            </a>
            <a
              className="nav-item nav-link"
              id="nav-lease-tab"
              data-toggle="tab"
              href="#nav-lease"
              role="tab"
              aria-controls="nav-lease"
              aria-selected="false"
            >
              Lease Info
            </a>
            <a
              className="nav-item nav-link"
              id="nav-files-tab"
              data-toggle="tab"
              href="#nav-files"
              role="tab"
              aria-controls="nav-files"
              aria-selected="false"
            >
              Files
            </a>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-basic"
              role="tabpanel"
              aria-labelledby="nav-basic-tab"
            >
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    {/* Basic info */}
                    <LandBasicForm />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-lease"
              role="tabpanel"
              aria-labelledby="nav-lease-tab"
            >
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    {/* Lease info */}
                    <LeaseForm />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-files"
              role="tabpanel"
              aria-labelledby="nav-files-tab"
            >
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    {/* Files Info */}
                    <LandFilesForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LandDetailForm);
