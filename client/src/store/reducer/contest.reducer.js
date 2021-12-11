import {
  GET_CONTEST_FAIL,
  GET_CONTEST_REQUEST,
  GET_CONTEST_SUCCESS,
} from '../action/action.types';

const initialState = {
  contestList: [],
  contestListLoading: false,
  contestListError: null,
  contestListSuccess: false,
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
