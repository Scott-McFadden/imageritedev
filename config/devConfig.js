// dev.js - don't commit this
module.exports =
    {

        authProviders: [
            {
                name: 'Google',
                secretKey:'VH-hU2cr6S5C02D-oddvuvdV',
                client_id: "905994347416-hpi7e1o60edcjkccarou8vffoi6hk742.apps.googleusercontent.com",
                project_id: "sailing1-221323",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://www.googleapis.com/oauth2/v3/token",
                redirect_uris: ["http://localhost:5000/callbackgoogle"],
                javascript_origins: ["http://localhost:5000"]
            },
            {
                name: 'linkedIn'
            },
            {
                name: 'facebook'
            },
            {
                name: 'microsoft'
            }
        ],
        mongo: {
            URI: 'mongodb://localhost/squawk',
            user: 'none',
            password: 'none'
        },
        stripe: {
            stripePublishableKey: 'pk_test_ksHrRjHp0C8EYzcC5lInR8wC',
            stripeSecretKey: 'sk_test_c9xJfLmyR1HRcBNDw8DwKRiw',
        },

        sendGrid: {
            key: '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'
        },

        environment: process.env.ENVIRONMENT || 'dev',
        cookieKey: 'ThisIsSqwackkujhgdgxcgfvewraatgrewrythtrtartwrtyuioplkjhgfdxcvbnmjhgfdrty76543',


        baseServerURL: 'http://localhost:5000',
        baseClientURL: 'http://localhost:3000',

        contact: {
            adminEmail:  'dp1mcfadden@gmail.com',
            adminPhone: '615-839-9497',
            adminUrl: '/admin'
        },

        morganLoggerMode: 'dev'

    };
