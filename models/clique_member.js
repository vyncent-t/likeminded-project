const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const CliqueTable = require('./clique');
const UserTable = require('./user');
class Clique_MembersTable extends Model { }
Clique_MembersTable.init(
  {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    clique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references: {
      //   model: 'clique',
      //   key: 'id'
      // }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'clique_member'
  }
);

Clique_MembersTable.belongsTo(UserTable);
Clique_MembersTable.belongsTo(CliqueTable);
module.exports = Clique_MembersTable;











