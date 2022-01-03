import axios from 'axios';
import {
  ADD_CONTESTANT_FAIL,
  ADD_CONTESTANT_REQUEST,
  ADD_CONTESTANT_SUCCESS,
  GET_CONTEST_FAIL,
  GET_CONTEST_REQUEST,
  GET_CONTEST_SUCCESS,
} from './action.types';

export const contestAction = () => async (dispatch) => {
  dispatch({ type: GET_CONTEST_REQUEST });
  try {
    const { data } = await axios.get(`/api/auth/getcontest/`);
    dispatch({
      type: GET_CONTEST_SUCCESS,
      payload: data.msg,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_CONTEST_FAIL });
  }
};

export const addContestant = (contestObj) => async (dispatch) => {
  console.log(contestObj)
  dispatch({ type: ADD_CONTESTANT_REQUEST });
  axios
    .post('/api/auth/addContestant/', contestObj)
    .then((res) => {
      dispatch({ type: ADD_CONTESTANT_SUCCESS, payload: res.data }); //dispatching the action
    })
    .catch((err) =>
      dispatch({
        type: ADD_CONTESTANT_FAIL,
        payload: err.response.data,
      })
    );
};
