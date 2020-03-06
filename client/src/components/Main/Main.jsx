import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import Login from "../../view/Login/Login";
import NavBar from "./Nav/NavBar";
import Header from "./Header/Header";
import ModalManager from "../modal/ModalManager";

const Main = () => {
  const PageContent = props => (
    <div>
      <SideBar />
      <div className="main-content" id="panel">
        {/* Topnav */}
        <NavBar />
        {/* Header */}
        <Header {...props} />
        {/* Header */}
        {/* Page content */}
        <Content />
      </div>
    </div>
  );
  return (
    <div>
      <ModalManager />
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/app" render={props => <PageContent {...props} />} />
      </div>
    </div>
  );
};

export default Main;
