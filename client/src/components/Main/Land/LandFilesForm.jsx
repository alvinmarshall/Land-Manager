import React from "react";

const LandFilesForm = () => {
  return (
    <form>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="/dist/img/theme/team-1.jpg" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Allottee Profile Image</h4>
            <p className="card-text">Upload allottee image file</p>
            <p className="card-text">
              <small className="text-muted">
                <button className="btn btn-primary">Upload</button>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/dist/img/theme/team-4.jpg" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Plot Allocation Copy</h4>
            <p className="card-text">Upload plot allocation form copy file</p>
            <p className="card-text">
              <small className="text-muted">
                <button className="btn btn-primary">Upload</button>
              </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="/dist/img/theme/team-2.jpg" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Other Files</h4>
            <p className="card-text">Other files can be uploaded here</p>
            <p className="card-text">
              <small className="text-muted">
                <button className="btn btn-primary">Upload</button>
              </small>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LandFilesForm;
