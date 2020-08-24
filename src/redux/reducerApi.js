import { SUCCESS, ERROR } from "./constans";

const initialState = {};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      const data = action.playload;
      return data;
    case ERROR:
      return state;
    default:
      return state;
  }
};
export default myReducer;
