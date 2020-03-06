import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
const LoginForm = ({ onLoginSuccess }) => {
  const { handleSubmit, register, errors } = useForm();

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const handleOnFormSubmit = payload => {
    onLoginSuccess(payload);
  };

  const form = (
    <div className="bg-default">
      {/* Navbar */}
      {/* Main content */}
      <div className="main-content">
        {/* Header */}
        <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div className="container">
            <div className="header-body text-center">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-white">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x={0}
              y={0}
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <div className="container mt--7 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary border-0 mb-0">
                <div className="card-header bg-transparent pb-5">Login</div>
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Sign in with credentials</small>
                  </div>
                  <form onSubmit={handleSubmit(handleOnFormSubmit)}>
                    <div className="form-group mb-3">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83" />
                          </span>
                        </div>
                        <input
                          name="username"
                          className="form-control"
                          ref={e => {
                            register(e, { required: "username invalid" });
                            inputFocus.current = e;
                          }}
                          placeholder="Username"
                          type="text"
                        />
                      </div>
                      <div className="text-danger">
                        {errors.username && errors.username.message}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open" />
                          </span>
                        </div>
                        <input
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          ref={register({ required: "password invalid" })}
                        />
                      </div>
                      <div className="text-danger">
                        {errors.password && errors.password.message}
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary my-4">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-5" id="footer-main">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                © 2020{" "}
                <a href="##" className="font-weight-bold ml-1">
                  Land Management
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return <div> {form}</div>;
};

export default React.memo(LoginForm);
