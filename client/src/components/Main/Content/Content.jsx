import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Land from "../Land/Land";
import Profile from "../Profile/Profile";
import CreateLandView from "../../../view/land/CreateLandView";

const Content = () => {
  return (
    <div className="container-fluid mt--6">
      <Route path="/app/dashboard" component={Dashboard} />
      <Route path="/app/land" component={Land} />
      <Route path="/app/create-land" component={CreateLandView} />
      <Route path="/app/profile" component={Profile} />
    </div>
  );
};

export default Content;
