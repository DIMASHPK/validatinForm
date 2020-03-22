import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ValiditionReducer } from "./ValidationReducer";

const reducers = combineReducers({
  ValiditionReducer
});

export const Store = createStore(reducers, composeWithDevTools());
