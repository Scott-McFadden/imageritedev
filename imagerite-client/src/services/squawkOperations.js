import axios from 'axios';
import {debugLog,handleErrors } from "./GeneralServices";
import  {keys} from "../config/keys";
//const keys = require('../config/keys');


export function getSquawks()
{
    console.log('env', process.env);
    console.log('server', keys.baseServerURL);
    return axios.get(keys.baseServerURL + '/squawks/current' )
        .then(handleErrors);
}

export function addSquawkOp(item) {
    debugLog("squawkOperations.addSquawkOp: ", item);
    return axios.post(keys.baseServerURL + '/squawk', item )
        .then(handleErrors);
}

export function updateSquawkOp(key, item) {
    debugLog("squawkOperations.updateSquawkOp: ", item);
    return axios.put(keys.baseServerURL + '/squawk/' + key, item)
        .then(handleErrors);
}

export function deleteSquawkOp(key) {
    debugLog("squawkOperations.deleteSquawkOp: ", key);
    return axios.delete(keys.baseServerURL + '/squawk/' + key)
        .then(handleErrors);
}
