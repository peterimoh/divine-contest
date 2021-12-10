import axios from "axios";
import { GET_PROFILE, PROFILE, PROFILE_FAIL, UPLOAD_DP, UPLOAD_DP_FAIL, UPLOAD_DP_SUCCESS } from "./action.types";

export const getUserDetail = (id) => (dispatch) => {
  dispatch({ type: GET_PROFILE });
  axios
    .post(`/api/auth/user/${id}`)
    .then((res) => {
      dispatch({ type: PROFILE, payload: res.data }); //dispatching the action
    })
    .catch((err) =>
      dispatch({
        type: PROFILE_FAIL,
        payload: err.response.data,
      })
    );
};

export const uploadDpAction = (id, formData) => (dispatch) => {
  dispatch({ type: UPLOAD_DP });
  axios
    .post(`/api/auth/upload/${id}`, formData)
    .then((res) => {
      dispatch({ type: UPLOAD_DP_SUCCESS, payload: res.data }); //dispatching the action
    })
    .catch((err) =>
      dispatch({
        type: UPLOAD_DP_FAIL,
        payload: err.response.data,
      })
    );
}