import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FirstValiditionReducer } from "./FirstValidationReducer";
import { SecondValiditionReducer } from "./SecondValidationReducer";

const reducers = combineReducers({
  FirstValiditionReducer,
  SecondValiditionReducer
});

export const Store = createStore(reducers, composeWithDevTools());
