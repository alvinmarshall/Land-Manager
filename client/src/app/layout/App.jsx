import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "../../components/Main/Main";
import { configureStore } from "../store/configStore";
import { setAuthUserStateAction } from "../../components/Login/reducer/authActions";
import jwt_decode from "jwt-decode";

const App = () => {
  const store = configureStore();
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && Object.keys(token).length > 0) {
    const decode = jwt_decode(token, {});
    store.dispatch(setAuthUserStateAction(decode));
  }

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </Provider>
  );
};

export default App;
