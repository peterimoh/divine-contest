import axios from 'axios';
import { GET_ALL_CONTESTANTS_FAIL, GET_ALL_CONTESTANTS_REQUEST, GET_ALL_CONTESTANTS_SUCCESS, SEARCH_CONTESTANTS_FAIL, SEARCH_CONTESTANTS_REQUEST, SEARCH_CONTESTANTS_SUCCESS } from "./action.types";


export const getContestantAction = () => dispatch => {
    dispatch({
        type: GET_ALL_CONTESTANTS_REQUEST
    });
    axios
      .get('/api/auth/getAllContestant')
      .then((res) => {
        dispatch({
          type: GET_ALL_CONTESTANTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ALL_CONTESTANTS_FAIL,
          payload: err.response.data,
        });
      });
}


export const searchContestantAction = (search) => dispatch => {
    dispatch({
      type: SEARCH_CONTESTANTS_REQUEST,
    });
    axios
      .post(`/api/auth/getContestantByuuid/`, {uuid: search})
      .then((res) => {
        dispatch({
          type: SEARCH_CONTESTANTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SEARCH_CONTESTANTS_FAIL,
          payload: err.response.data,
        });
      });
}