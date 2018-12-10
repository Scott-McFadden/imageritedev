import {

    SELECT_SQUAWK,
    FETCH_SQUAWKS_BEGIN,
    FETCH_SQUAWKS_SUCCESS,
    SQUAWKS_FAIL,
    ADD_SQUAWK_SUCCESS,
    SQUAWK_OPERATION_PENDING

} from '../types/SquawkTypes';

import {getSquawks, addSquawkOp} from "../services/squawkOperations";
import {debugLog } from "../services/GeneralServices";

export let allSquawks = [];


export const fetchSquawksBegin = () => ({
    type: FETCH_SQUAWKS_BEGIN
});

export const fetchSquawksSuccess = squawks => {
    debugLog("squawks: ", squawks);

    return  ({
        type: FETCH_SQUAWKS_SUCCESS,
        payload: squawks
    });
}

export const squawkFail = error => ({
    type: SQUAWKS_FAIL,
    payload:  error
});


export function getAllSquawks()
{
    return dispatch => {
        dispatch(fetchSquawksBegin());
        return getSquawks()
            .then(data => {
                debugLog("after call:" , data);
                dispatch(fetchSquawksSuccess(data));
                allSquawks = data;
                return;
            })
            .catch(error =>
            {
                console.log(error);
                dispatch(squawkFail(error));
            });
    };
}

export function squawkOpPending(op) {
    return ({
        type: SQUAWK_OPERATION_PENDING,
        payload: op
    });
}

export function addSquawkSuccess(item) {
    return ({
        type: ADD_SQUAWK_SUCCESS,
        payload: item
    });
}




export function addSquawk( item )
{
    return dispatch => {
        dispatch(squawkOpPending('ADD'));
        return addSquawkOp(item)
            .then(data => {
                dispatch(addSquawkSuccess(data));
                allSquawks.push(data);
                dispatch(fetchSquawksSuccess(allSquawks));
            })
            .catch(error => {
                console.log(error);
                dispatch(squawkFail(error));
            });
    }

}


export const selectSquawk = squawk => {
    debugLog("currentsquawk: ", squawk);
    return  ({
        type: SELECT_SQUAWK,
        payload: squawk
    });
};
