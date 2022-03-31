import { combineReducers } from "redux";

import authReducer from "./reducers/authReducers";
import courseReducer from "./reducers/courseReducer";
import userReducer from "./reducers/userReducer";
import cardReducer from "./reducers/cardReducer";

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
  user: userReducer,
  card: cardReducer,
});
