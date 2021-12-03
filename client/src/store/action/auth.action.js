import axios from 'axios';
import jwt from 'jwt-decode';
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from './action.types';
import setAuthToken from '../../utils/setAuthToken';

//registration action
export const registerUser = (userObj) => (dispatch) => {
    console.log(userObj);
  dispatch({ type: SIGNUP_START });
  axios
    .post('/api/auth/create', userObj)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data }); //dispatching the action
    }) 
    .catch((err) =>
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data,
      })
    );
};

//login action (get token)
export const loginUser = (userObj) => (dispatch) => {
dispatch({ type: LOGIN_START });
  axios
    .post('/api/auth/login', userObj)
    .then((res) => { 
      //saving to local storage
        const { token } = res.data
      localStorage.setItem('jwtToken', token);
      setAuthToken(token); //set token to auth header
        const decoded = jwt(token);
        dispatch({ type: SET_CURRENT_USER, payload: decoded });
        // dispatch
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data });
    }); //dispatching the action
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch({ type: LOGOUT_SUCCESS });
};