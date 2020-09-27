import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import { connectRouter } from "connected-react-router";
import notificationReducer from "./notification/notificationReducer";

const createRootReducer = (history) =>
  combineReducers({
    user: userReducer,
    notification: notificationReducer,
    router: connectRouter(history),
  });

// const rootReducer = combineReducers({
//   user: userReducer,
// });

export default createRootReducer;
