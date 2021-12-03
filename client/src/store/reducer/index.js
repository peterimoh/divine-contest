import { combineReducers } from 'redux';
import { authLoginReducer, authSignupReducer } from './auth.reducer';


export default combineReducers({
    register: authSignupReducer,
    login: authLoginReducer,
});