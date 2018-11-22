import { SAVE_SQUAWK, DELETE_SQUAWK, UPDATE_SQUAWK } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case SAVE_SQUAWK:
            return [...state, action.payload];

        case DELETE_SQUAWK:
            return [...state, action.payload];

        case UPDATE_SQUAWK:
            return [...state, action.payload];

        default:
            return state;
    }

}
