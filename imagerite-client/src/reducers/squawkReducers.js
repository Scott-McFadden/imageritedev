import {
    INVALIDATE_SQUAWK,
    ADD_SQUAWK,
    UPDATE_SQUAWK,
    DELETE_SQUAWK,
    GET_SQUAWK,
    SEARCH_FOR_ONE_SQUAWK,
    SEARCH_FOR_MANY_SQUAWK,
    SELECT_SQUAWK,
    LOAD_SQUAWKS,
    FETCH_SQUAWKS_BEGIN,
    FETCH_SQUAWKS_SUCCESS,
    FETCH_SQUAWKS_FAIL

} from '../types/SquawkTypes';

import {debugLog} from "../services/GeneralServices";


export default function ( state = {} , action)
{
    switch (action.type) {
        case INVALIDATE_SQUAWK: {
            debugLog("INVALIDATE_SQUAWK called");
            return state;
        }
        case ADD_SQUAWK: {
            debugLog("ADD_SQUAWK called");

            return state;
        }

        case UPDATE_SQUAWK: {
            debugLog("UPDATE_SQUAWK called");
            return state;
        }
        case DELETE_SQUAWK: {
            debugLog("DELETE_SQUAWK called");
            return state;
        }
        case GET_SQUAWK: {
            debugLog("GET_SQUAWK called");
            return state;
        }
        case SEARCH_FOR_ONE_SQUAWK: {
            debugLog("SEARCH_FOR_ONE_SQUAWK called");
            return state;
        }
        case SEARCH_FOR_MANY_SQUAWK: {
            debugLog("SEARCH_FOR_MANY_SQUAWK called");
            return state;
        }
        case SELECT_SQUAWK: {
            debugLog("SELECT_SQUAWK called");
            return {
                ...state,
                current_Squawk: action.payload
            };
        }
        case FETCH_SQUAWKS_FAIL: {
            debugLog("FETCH_SQUAWKS_FAIL called");
            return {
                ...state,
                squawkItems: [],
                squawkLoading: false,
                squawError: action.payload.error,
                currentSquawk: state.currentSquawk || {}
            }

        }
        case FETCH_SQUAWKS_SUCCESS: {
            debugLog("FETCH_SQUAWKS_SUCCESS called");
            return {
                ...state,
                squawkItems: action.payload,
                squawkLoading: false,
                squawError: null
            }


        }
        case FETCH_SQUAWKS_BEGIN: {
            debugLog("FETCH_SQUAWKS_BEGIN called");
            return {
                ...state,
                squawkItems: [],
                squawkLoading: true,
                squawError: null
            }

        }

        case LOAD_SQUAWKS: {
            debugLog('LOAD_SQUAWKS called');
            break;
        }

        default:{

            return state;
        }


    }
}

