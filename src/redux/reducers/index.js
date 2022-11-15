import { combineReducers } from "redux";

import audiosReducer from "./audiosReducer";
import themesReducer from "./themesReducer";

const reducer = combineReducers({
  audiosReducer,
  themesReducer
});

export default reducer;
