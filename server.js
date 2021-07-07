require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const routes = require('./controllers/api');
const helpers = require('./utils/helpers');
const cliquesRepo = require('./models/clique');
const plansRepo = require('./models/plan');
const eventTable = require('./models/event');


const amplify = require('aws-amplify').Amplify;

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
    .then( data => {
      res.render('clique', {cliques: data});})
);

app.get('/plans',(req,res) =>{
  plansRepo.findAll({include: eventTable})
  .then((data)=> {
    res.render('plans', {plans: data, eventName: data[0].dataValues.event.event_name});})
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
    userPoolId: 'us-east-1_VYEOQTAu4',
    userPoolWebClientId: '4vhr0obremuf9vd6jd7oksjb91'
  }
});
