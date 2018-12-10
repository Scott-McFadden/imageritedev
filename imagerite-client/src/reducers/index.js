import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import squawks from './squawkReducers';


export default combineReducers ({
    squawks,
    form: formReducer,
});

// form: formReducer
