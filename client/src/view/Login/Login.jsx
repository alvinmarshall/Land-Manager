import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import { loginAction } from "../../components/Login/reducer/authActions";

const Login = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleAuthenticationDispatch = payload => {
    dispatch(loginAction(payload));
  };
  const handleAuthentication = useCallback(handleAuthenticationDispatch, [
    dispatch
  ]);

  return (
    <div>
      {isAuthenticated ? (
        <Redirect to={{ pathname: "/app/dashboard" }} />
      ) : (
        <LoginForm onLoginSuccess={handleAuthentication} />
      )}
    </div>
  );
};

export default React.memo(Login);
