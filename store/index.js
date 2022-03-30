import { combineReducers } from "redux";

import authReducer from "./reducers/authReducers";
import courseReducer from "./reducers/courseReducer";
import userReducer from "./reducers/userReducer";

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
  user: userReducer,
});
