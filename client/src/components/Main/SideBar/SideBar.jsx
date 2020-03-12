import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div
        className="scrollbar-wrapper scrollbar-inner"
        style={{ position: "relative" }}
      >
        <div
          className="scrollbar-inner scroll-content scroll-scrolly_visible"
          style={{
            height: "auto",
            marginBottom: 0,
            marginRight: 0,
            maxHeight: 215
          }}
        >
          {/* Brand */}
          <div className="sidenav-header  d-flex  align-items-center">
            <a className="navbar-brand mx-auto" href="#!">
              <h1>
                LM <i className="ni ni-square-pin"></i>
              </h1>
            </a>
            <div className=" ml-auto ">
              {/* Sidenav toggler */}
              <div
                className="sidenav-toggler d-none d-xl-block active"
                data-action="sidenav-unpin"
                data-target="#sidenav-main"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-inner">
            {/* Collapse */}
            <div
              className="collapse navbar-collapse"
              id="sidenav-collapse-main"
            >
              {/* Nav items */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/app/dashboard">
                    <i className="ni ni-shop text-primary" />
                    <span className="nav-link-text">Dashboards</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#navbar-land"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="navbar-land"
                  >
                    <i className="ni ni-single-copy-04 text-pink" />
                    <span className="nav-link-text">Land</span>
                  </a>

                  <div className="collapse" id="navbar-land">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <NavLink
                          to="/app/create-land"
                          className="nav-link"
                        >
                          <span className="sidenav-mini-icon"> C </span>
                          <span className="sidenav-normal"> Create Land </span>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/app/land" className="nav-link">
                          <span className="sidenav-mini-icon"> L </span>
                          <span className="sidenav-normal"> List Lands </span>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../../pages/forms/validation.html"
                          className="nav-link"
                        >
                          <span className="sidenav-mini-icon"> S </span>
                          <span className="sidenav-normal"> Sold Lands </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../../pages/forms/validation.html"
                          className="nav-link"
                        >
                          <span className="sidenav-mini-icon"> A </span>
                          <span className="sidenav-normal">
                            {" "}
                            Available Lands{" "}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/app/map">
                    <i className="ni ni-ui-04 text-info" />
                    <span className="nav-link-text">Map</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#navbar-forms">
                    <i className="ni ni-single-copy-04 text-pink" />
                    <span className="nav-link-text">Other</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#navbar-tables">
                    <i className="ni ni-align-left-2 text-default" />
                    <span className="nav-link-text">Other</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#navbar-forms"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="navbar-forms"
                  >
                    <i className="ni ni-single-copy-04 text-pink" />
                    <span className="nav-link-text">Forms</span>
                  </a>
                  <div className="collapse" id="navbar-forms">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a
                          href="../../pages/forms/elements.html"
                          className="nav-link"
                        >
                          <span className="sidenav-mini-icon"> E </span>
                          <span className="sidenav-normal"> Elements </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../../pages/forms/components.html"
                          className="nav-link"
                        >
                          <span className="sidenav-mini-icon"> C </span>
                          <span className="sidenav-normal"> Components </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="../../pages/forms/validation.html"
                          className="nav-link"
                        >
                          <span className="sidenav-mini-icon"> V </span>
                          <span className="sidenav-normal"> Validation </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* Divider */}
              <hr className="my-3" />
              {/* Heading */}
              <h6 className="navbar-heading p-0 text-muted">
                <span className="docs-normal">Account</span>
                <span className="docs-mini">A</span>
              </h6>
              {/* Navigation */}
            </div>
          </div>
        </div>
        <div className="scroll-element scroll-x scroll-scrolly_visible">
          <div className="scroll-element_outer">
            <div className="scroll-element_size" />
            <div className="scroll-element_track" />
            <div className="scroll-bar" style={{ width: 0, left: 0 }} />
          </div>
        </div>
        <div className="scroll-element scroll-y scroll-scrolly_visible">
          <div className="scroll-element_outer">
            <div className="scroll-element_size" />
            <div className="scroll-element_track" />
            <div className="scroll-bar" style={{ height: 41, top: 0 }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
