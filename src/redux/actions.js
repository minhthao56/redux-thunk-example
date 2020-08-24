import { SUCCESS, ERROR } from "./constans";
import axios from "axios";

export const exampleAction = () => (dispatch) => {
  axios
    .get("https://api.github.com/users/mapbox")
    .then((res) =>
      dispatch({
        type: SUCCESS,
        playload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ERROR,
        playload: err,
      })
    );
};
