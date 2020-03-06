import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancer = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducer/rootReducer", () => {
        const newReducer = require("../reducer/rootReducer").default;
        store.replaceReducer(newReducer);
      });
    }
  }
  return store;
};
