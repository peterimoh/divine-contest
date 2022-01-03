import {
  ADD_CONTESTANT_FAIL,
  ADD_CONTESTANT_REQUEST,
  ADD_CONTESTANT_SUCCESS,
  GET_CONTEST_FAIL,
  GET_CONTEST_REQUEST,
  GET_CONTEST_SUCCESS,
} from '../action/action.types';

const initialState = {
  contestList: [],
  contestListLoading: false,
  contestListError: null,
  contestListSuccess: false,
  contestantLoading: false,
  contestantSuccess: false,
  contestantMsg: null,
  contestantError: null,
};

export const contestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTEST_REQUEST:
      return {
        contestListLoading: true,
        contestListError: null,
        contestListSuccess: false,
      };

    case GET_CONTEST_SUCCESS:
      return {
        contestListLoading: false,
        contestListError: null,
        contestListSuccess: true,
        contestList: action.payload,
      };

    case GET_CONTEST_FAIL:
      return {
        contestListLoading: false,
        contestListError: action.payload,
        contestListSuccess: false,
      };

    default:
      return state;
  }
};

export const addContestantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTESTANT_REQUEST:
      return {
        contestantLoading: true,
      };
    case ADD_CONTESTANT_SUCCESS:
      return {
        contestantLoading: false,
        contestantSuccess: true,
        contestantMsg: action.payload,
      };
    case ADD_CONTESTANT_FAIL:
      return {
        ...state,
        contestantLoading: false,
        contestantSuccess: false,
        contestantMsg: null,
        contestantError: action.payload,
      };
    default:
      return state;
  }
};
