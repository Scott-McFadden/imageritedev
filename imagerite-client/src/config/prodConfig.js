export function keys () {
    console.log('prod config', process.env.ENVIRONMENT);
    return {

        environment: process.env.ENVIRONMENT || 'dev',
        baseServerURL: 'http://localhost:3015',
        baseClientURL: 'http://localhost:3004'

    };
}
