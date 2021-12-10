import axios from 'axios';
import {
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
      dispatch({type: GET_CONTEST_FAIL})
  }
};