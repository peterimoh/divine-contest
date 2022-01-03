import { combineReducers } from 'redux';
import { authLoginReducer, authSignupReducer } from './auth.reducer';
import { addContestantReducer, contestReducer } from './contest.reducer';
import { fetchContestantsReducer, searchContestantsReducer } from './contestant.reducer';
import {detailReducer, updatePasswordReducer, updatePaypalReducer} from './detail.reducer';

export default combineReducers({
  register: authSignupReducer,
  login: authLoginReducer,
  profile: detailReducer,
  contest: contestReducer,
  contestant: addContestantReducer,
  paypal: updatePaypalReducer,
  updatePswd: updatePasswordReducer,
  fetchContestants: fetchContestantsReducer,
  searchContestant: searchContestantsReducer
});
