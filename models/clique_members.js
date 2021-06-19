const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Clique_Members extends Model { }
Clique_Members.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    clique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cliques',
        key: 'clique_id'
      }
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











