export function debugLog (tag, label = '' )   {

    // console.log("debug log:", tag, label, process.env.NODE_ENV.toLowerCase());
    if (( process.env.NODE_ENV.toLowerCase() || 'development') === 'development')
        console.log(tag, label);
};


export function handleErrors(response) {
    if (!(response.statusText==='OK')) {
        debugLog(response);
        throw Error(response.statusText);
    }
    return response.data;
}
