import { combineReducers } from "redux";

import authReducer from "./reducers/authReducers";
import courseReducer from "./reducers/courseReducer";

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
});
