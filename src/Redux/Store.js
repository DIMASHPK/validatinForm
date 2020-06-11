import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  form: formReducer,
});

export const Store = createStore(reducers, composeWithDevTools());
