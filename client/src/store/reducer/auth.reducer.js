import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../action/action.types';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  data: null,
};

const authLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        loading: false,
      };
    default:
      return state;
  }
};

const authSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        // isAuthenticated: true,
        data: action.payload,
        loading: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { authLoginReducer, authSignupReducer };
