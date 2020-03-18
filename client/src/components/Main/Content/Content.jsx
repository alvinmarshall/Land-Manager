import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Land from "../Land/Land";
import Profile from "../Profile/Profile";
import WrapGMap from "../Map/WrapGMap";
import LandDetailForm from "../Land/LandDetailForm";

const Content = () => {
  return (
    <div className="container-fluid mt--6">
      <Route path="/app/dashboard" component={Dashboard} />
      <Route path="/app/land" component={Land} />
      <Route path="/app/create-land" component={LandDetailForm} />
      <Route path="/app/profile" component={Profile} />
      <Route path="/app/map" component={WrapGMap} />
    </div>
  );
};

export default Content;
