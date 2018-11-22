import { combineReducers } from 'redux';
import squawkReducer from './squawk';
export default combineReducers ({
    squawk: squawkReducer
});
