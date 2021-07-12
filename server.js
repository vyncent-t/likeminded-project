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
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.use('/events/:id', (req, res) => {
  eventTable.findAll({ 
    include: cliquesRepo,
    attributes: ['id', 'event_name', 'event_desc', 'clique.clique_name'], 
    where: { clique_id: req.params.id } })
    .then((data) => {
      res.render('events', { events: data , cliqueName:data[0].dataValues.clique.clique_name});
    });
});

app.use('/plans/:id', (req, res) => {
  plansRepo.findAll({ include: eventTable , attributes: ['id', 'plan_name', 'plan_desc', 'event.event_name'], where: {event_id: req.params.id}})
    .then((data) => {
      console.log('event name');
      console.log(data[0].dataValues.event.event_name);
      res.render('plans', { plans: data, eventName: data[0].dataValues.event.event_name });
    })
});

// app.get("/", (req, res) => {
//   res.render('welcome');
// });
app.get("/signup", (req, res) => {
  res.render('index');
});

app.get("/", (req, res) =>
  cliquesRepo
    .findAll({ attributes: ['id', 'clique_name'] })
    .then(data => {
      console.log(data);
      res.render('clique', { cliques: data });
    })
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
