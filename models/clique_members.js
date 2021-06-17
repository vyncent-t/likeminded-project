const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Clique_Members extends Model { }
Clique_Members.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'clique_members'
  }
);
module.exports = Clique_Members;











