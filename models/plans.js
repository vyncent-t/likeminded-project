const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Plans extends Model { }
Plans.init(
  {
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clique_origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    plan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plan_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plans'
  }
);
module.exports = Plans;











