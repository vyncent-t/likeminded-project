const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const { Cliques, Clique_Members, Events, User, Plans } = require('./models');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'secret password',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//Cognito pool configure

import Amplify, { Auth } from 'aws-amplify';

// WORKING ON COGNITO CONFIGURATION
// Amplify.configure({
//     Auth: {

//         // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//         identityPoolId: 'us-east-1_nFxTBLqi8',

//         // REQUIRED - Amazon Cognito Region
//         region: 'XX-XXXX-X',

//         // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
//         // Required only if it's different from Amazon Cognito Region
//         identityPoolRegion: 'XX-XXXX-X',

//         // OPTIONAL - Amazon Cognito User Pool ID
//         userPoolId: 'XX-XXXX-X_abcd1234',

//         // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',

//         // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
//         mandatorySignIn: false,

//         // OPTIONAL - Configuration for cookie storage
//         // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
//         cookieStorage: {
//         // REQUIRED - Cookie domain (only required if cookieStorage is provided)
//             domain: '.yourdomain.com',
//         // OPTIONAL - Cookie path
//             path: '/',
//         // OPTIONAL - Cookie expiration in days
//             expires: 365,
//         // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
//             sameSite: "strict" | "lax",
//         // OPTIONAL - Cookie secure flag
//         // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
//             secure: true
//         },

//         // OPTIONAL - customized storage object
//         storage: MyStorage,

//         // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
//         authenticationFlowType: 'USER_PASSWORD_AUTH',

//         // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
//         clientMetadata: { myCustomKey: 'myCustomValue' },

//          // OPTIONAL - Hosted UI configuration
//         oauth: {
//             domain: 'your_cognito_domain',
//             scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
//             redirectSignIn: 'http://localhost:3000/',
//             redirectSignOut: 'http://localhost:3000/',
//             responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
//         }
//     }
// });

// // You can get the current config object
// const currentConfig = Auth.configure();