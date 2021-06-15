// import models
const Cliques = require('./Cliques');
const Community = require('./Community');
const Plans = require('./Plans');
const Events = require('./Events');
const User = require('./User');

//this will all be setup as hasMany and hasOne

// User hasMany Cliques (through Community)
User.hasMany(Cliques, {
  through: {
    model: Community,
    unique: false
  },
  as: 'User_on_Community'
});





module.exports = {
  User,
  Cliques,
  Community,
  Plans,
  Events,
};
