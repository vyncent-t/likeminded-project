require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const routes = require('./controllers/api');
const helpers = require('./utils/helpers');
const cliquesRepo = require('./models/cliques');
const plansRepo = require('./models/plans');

const amplify = require('aws-amplify').Amplify;

const { Cliques, Clique_Members, Events, User, Plans } = require('./models');
const sequelize = require('./config/connection');
const { static } = require('express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.DB_PORT || 3000;

//const hbs = exphbs.create({ helpers });

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/views', 'styles')));
app.use(routes);


app.get("/", (req, res) => {
  res.render('welcome');
});
app.get("/signup", (req, res) => {
  res.render('index');
});

app.get("/home", (req, res) => 
  cliquesRepo
    .findAll()
    .then( data => res.render('clique', {cliques: data}))
    // .then(data => {
    //   data.map(item => {
    //     plansRepo.findAll({
    //       where: { clique_origin_id: item.dataValues.clique_id }
    //     });
    //   });
    // })
);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}`));
}).catch(err => {
  console.log(err)
});

amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: 'us-east-1',
    userPoolId: 'us-east-1_VYEOQTAu4',
    userPoolWebClientId: '4vhr0obremuf9vd6jd7oksjb91'
  }
});
