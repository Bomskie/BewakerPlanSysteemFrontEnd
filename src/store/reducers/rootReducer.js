import authReducer from './authReducer';
import bewakingReducer from './bewakingReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    bewaking: bewakingReducer
});

export default rootReducer;