// import models
const Cliques = require('./clique');
const Clique_Members = require('./clique_member');
const Plans = require('./plan');
const Events = require('./event');
const User = require('./user');

//Setting Relationships of type 1:1
Cliques.hasOne(Events, {
  foreignKey: {
    allowNull: false,
    name: 'clique_id'
  }
});
Events.belongsTo(Cliques);

Events.hasOne(Plans, {
  foreignKey: {
    allowNull: false,
    name: 'event_id'
  }
});
Plans.belongsTo(Events);


module.exports = {
  User,
  Cliques,
  Clique_Members,
  Events,
  Plans,
};
