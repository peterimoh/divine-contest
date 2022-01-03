import {
  GET_ALL_CONTESTANTS_FAIL,
  GET_ALL_CONTESTANTS_REQUEST,
  GET_ALL_CONTESTANTS_SUCCESS,
  SEARCH_CONTESTANTS_FAIL,
  SEARCH_CONTESTANTS_REQUEST,
  SEARCH_CONTESTANTS_SUCCESS,
} from '../action/action.types';

const initialState = {
  loading: false,
  searchLoading: false,
  contestants: [],
  error: null,
  searchError: null,
  searchResult: [],
};

export const fetchContestantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTESTANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CONTESTANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contestants: action.payload,
      };
    case GET_ALL_CONTESTANTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const searchContestantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CONTESTANTS_REQUEST:
      return {
        ...state,
        searchLoading: true,
      };
    case SEARCH_CONTESTANTS_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchResult: action.payload,
      };
    case SEARCH_CONTESTANTS_FAIL:
      return {
        ...state,
        searchLoading: false,
        searchError: action.payload,
      };
    default:
      return state;
  }
};
