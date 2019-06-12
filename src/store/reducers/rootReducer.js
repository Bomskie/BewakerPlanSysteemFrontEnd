import authReducer from './authReducer';
import bewakingReducer from './bewakingReducer';
import klantReducer from './klantReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    bewaking: bewakingReducer,
    klant: klantReducer
});

export default rootReducer;