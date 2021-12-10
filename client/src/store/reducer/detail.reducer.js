import { GET_PROFILE, PROFILE, PROFILE_FAIL } from '../action/action.types';

const initialState = {
  detail: {},
  isLoading: false,
  isError: '',
  isSuccess: false,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case PROFILE:
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
        isSuccess: false,
      };
    default:
      return state;
  }
};


export default detailReducer;