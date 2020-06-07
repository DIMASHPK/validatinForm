import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FirstValiditionReducer } from "./FirstValidationReducer";
import { SecondValiditionReducer } from "./SecondValidationReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  FirstValiditionReducer,
  SecondValiditionReducer,
  form: formReducer
});

export const Store = createStore(reducers, composeWithDevTools());
