// import models
const Cliques = require('./Cliques');
const Clique_Members = require('./Clique_Members');
const Plans = require('./Plans');
const Events = require('./Events');
const User = require('./User');

//this will all be setup as hasMany and hasOne

// User hasMany Cliques (through Community)
User.hasMany(Cliques, {
  foreignKey: 'clique_id',
  onDelete: 'CASCADE'
});

User.hasMany(Plans, {
  foreignKey: '',
  onDelete: 'CASCADE'
});

User.hasMany(Clique_Members, {
  foreignKey: '',
  onDelete: 'CASCADE'
});

Clique_Members.belongsToMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Clique_Members.belongsToMany(Cliques, {
  foreignKey: 'clique_id',
  onDelete: 'CASCADE'
});

Plans.hasMany(Events, {
  foreignKey: 'plan_origin_id',
  onDelete: 'CASCADE'
});


/*

ALTER TABLE
    `Events` ADD CONSTRAINT `events_plan_origin_id_foreign` FOREIGN KEY(`plan_origin_id`) REFERENCES `Plans`(`plan_id`);
ALTER TABLE
    `Plans` ADD CONSTRAINT `plans_clique_origin_id_foreign` FOREIGN KEY(`clique_origin_id`) REFERENCES `Cliques`(`clique_id`);
ALTER TABLE
    `Plans` ADD CONSTRAINT `plans_author_id_foreign` FOREIGN KEY(`author_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Cliques` ADD CONSTRAINT `cliques_author_id_foreign` FOREIGN KEY(`author_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Events` ADD CONSTRAINT `events_author_id_foreign` FOREIGN KEY(`author_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Clique_members` ADD CONSTRAINT `clique_members_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`user_id`);
ALTER TABLE
    `Clique_members` ADD CONSTRAINT `clique_members_clique_id_foreign` FOREIGN KEY(`clique_id`) REFERENCES `Cliques`(`clique_id`);


    */





module.exports = {
  User,
  Cliques,
  Clique_Members,
  Plans,
  Events,
};
