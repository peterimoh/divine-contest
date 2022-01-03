import {
  GET_PROFILE,
  PROFILE,
  PROFILE_FAIL,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PAYPAL_EMAIL_FAIL,
  UPDATE_PAYPAL_EMAIL_REQUEST,
  UPDATE_PAYPAL_EMAIL_SUCCESS,
} from '../action/action.types';

const initialState = {
  detail: {},
  isLoading: false,
  isError: '',
  isSuccess: false,
  paypalSuccess: '',
  pswLoading: false,
  pswdMessage: '',
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

const updatePaypalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PAYPAL_EMAIL_REQUEST:
      return { isLoading: true };
    case UPDATE_PAYPAL_EMAIL_SUCCESS:
      return { isLoading: false, paypalSuccess: action.payload };
    case UPDATE_PAYPAL_EMAIL_FAIL:
      return { isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

const updatePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { pswLoading: true };
    case UPDATE_PASSWORD_SUCCESS:
      return { pswLoading: false, pswdMessage: action.payload };
    case UPDATE_PASSWORD_FAIL:
      return { pswLoading: false, isError: action.payload };
    default:
      return state;
  }
};

export { detailReducer, updatePaypalReducer, updatePasswordReducer };
