import { SAVE_SQUAWK, DELETE_SQUAWK, UPDATE_SQUAWK } from './types';

export function saveSquawk(squawk) {
    return {
        type: SAVE_SQUAWK,
        payload: squawk
    };
}

export function updateSquawk(squawk) {
    return {
        type: UPDATE_SQUAWK,
        payload: squawk;
    }
}

export function deleteSquawk(squawk) {
    return {
        type: DELETE_SQUAWK,
        payload: squawk
    };
}
