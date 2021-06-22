// import models
const Cliques = require('./Cliques');
const Clique_Members = require('./Clique_Members');
const Plans = require('./Plans');
const Events = require('./Events');
const User = require('./User');

//this will all be setup as hasMany and hasOne

// User hasMany Cliques (through Community)

User.hasMany(Plans, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});


User.belongsToMany(Cliques, {
  through: {
    model: Clique_Members,
    unique: false
  }
});

Cliques.belongsToMany(User, {
  through: {
    model: Clique_Members,
    unique: false
  }
});

User.hasMany(Cliques, {
  onDelete: 'CASCADE',
  foreignKey: 'author_id'
});

Cliques.belongsTo(User, {
  foreignKey: 'author_id'
});


Plans.hasMany(Events, {
  onDelete: 'CASCADE',
  foreignKey: 'plan_origin_id'
});



Plans.belongsTo(User, {
  foreignKey: 'author_id'
});


Events.belongsTo(Plans, {
  foreignKey: 'plan_origin_id'
});


module.exports = {
  User,
  Cliques,
  Clique_Members,
  Plans,
  Events,
};
