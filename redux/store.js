import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
});

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware())
);
