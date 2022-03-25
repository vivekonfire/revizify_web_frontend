import { combineReducers } from "redux";

import authReducer from "./reducers/authReducers";

export default combineReducers({
  auth: authReducer,
});
