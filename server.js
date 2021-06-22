require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/api');
const helpers = require('./utils/helpers');

const auth =  require('aws-amplify').Auth;

const { Cliques, Clique_Members, Events, User, Plans } = require('./models');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.DB_PORT || 3000;

const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: 'secret password',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public','views')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
}).catch(err => {
  console.log(err)
});

//Cognito pool configure
auth.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Region
        Region: 'us-east-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        UserPoolId: 'us-east-1_VYEOQTAu4', 

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        ClientId: '4vhr0obremuf9vd6jd7oksjb91',
        
        //  // OPTIONAL - Hosted UI configuration
        // oauth: {
        //     domain: 'likeminded.auth.us-east-1.amazoncognito.com',
        //     scope: ['email', 'openid'],
        //     redirectSignIn: 'http://localhost:3000/login',
        //     redirectSignOut: 'http://localhost:3000/logout',
        //     responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        // }
    }
});