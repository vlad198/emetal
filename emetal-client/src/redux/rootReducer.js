import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    user: userReducer,
    router: connectRouter(history),
  });

// const rootReducer = combineReducers({
//   user: userReducer,
// });

export default createRootReducer;
