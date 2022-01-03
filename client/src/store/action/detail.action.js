import axios from "axios";
import { GET_PROFILE, PROFILE, PROFILE_FAIL, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PAYPAL_EMAIL_FAIL, UPDATE_PAYPAL_EMAIL_REQUEST, UPDATE_PAYPAL_EMAIL_SUCCESS, UPLOAD_DP, UPLOAD_DP_FAIL, UPLOAD_DP_SUCCESS } from "./action.types";

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


export const updatePaypalAction = (id, formData) => (dispatch) => {
  dispatch({ type: UPDATE_PAYPAL_EMAIL_REQUEST });
  axios
    .post(`/api/auth/paypal/${id}`, formData)
    .then((res) => {
      dispatch({ type: UPDATE_PAYPAL_EMAIL_SUCCESS, payload: res.data }); //dispatching the action
    })
    .catch((err) =>
      dispatch({
        type: UPDATE_PAYPAL_EMAIL_FAIL,
        payload: err.response.data,
      })
    );
}

export const updatePasswordAction = (id, formData) => (dispatch) => {
  dispatch({type: UPDATE_PASSWORD_REQUEST});
  axios
    .post(`/api/auth/update-password/${id}`, formData)
    .then((res) => {
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: res.data }); 
    })
    .catch((err) =>
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: err.response.data,
      })
    );
}