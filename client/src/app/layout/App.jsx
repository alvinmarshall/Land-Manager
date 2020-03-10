import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import Main from "../../components/Main/Main";
import { configureStore } from "../store/configStore";
import { setAuthUserStateAction } from "../../components/Login/reducer/authActions";
import jwt_decode from "jwt-decode";
import { setTokenHeader } from "../../config";

const App = () => {
  const store = configureStore();
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && Object.keys(token).length > 0) {
    setTokenHeader(token);
    const decode = jwt_decode(token, {});
    store.dispatch(setAuthUserStateAction(decode));
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
