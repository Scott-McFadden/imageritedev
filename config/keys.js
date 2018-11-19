

console.log('node env: ', process.env.ENVIRONMENT);

if (process.env.ENVIRONMENT === 'production') {
    console.log ('using production');
    module.exports = require('./prodConfig');
    return;
}
if (process.env.ENVIRONMENT === 'staging') {
    console.log ('using staging');
    module.exports = require('./stgConfig');
    return;
}
if (process.env.ENVIRONMENT === 'QA') {
    console.log ('using QA');
    module.exports = require('./qaConfig');
    return;
}

console.log('using dev');
module.exports = require('./devConfig');


