import { combineReducers } from "redux";
import CallAip from "./reducerApi";

const myReducer = combineReducers({
  CallAip: CallAip,
});

export default myReducer;
