require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const routes = require('./controllers/api');
const helpers = require('./utils/helpers');

const amplify =  require('aws-amplify').Amplify;

const { Cliques, Clique_Members, Events, User, Plans } = require('./models');
const sequelize = require('./config/connection');
const { static } = require('express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.DB_PORT || 3000;

//const hbs = exphbs.create({ helpers });

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + 'public/views/layouts/'}));
app.set('view engine', 'hbs');
//app.use(express.static(path.join(__dirname, '/public','views','layout')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/public','views','layout')));
// app.use(express.static(path.join(__dirname, '/public','styles')));
app.use(routes);
// // OPTIONAL
app.get("/", (req, res) => {
  res.render('index', {content:'<h1>Good Morning!</h1>'});
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
}).catch(err => {
  console.log(err)
});

amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: 'us-east-1',
    userPoolId:'us-east-1_VYEOQTAu4',
    userPoolWebClientId:'4vhr0obremuf9vd6jd7oksjb91'
  }
});
