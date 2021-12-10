import { combineReducers } from 'redux';
import { authLoginReducer, authSignupReducer } from './auth.reducer';
import { contestReducer } from './contest.reducer';
import detailReducer from './detail.reducer';

export default combineReducers({
  register: authSignupReducer,
  login: authLoginReducer,
  profile: detailReducer,
  contest: contestReducer,
});
