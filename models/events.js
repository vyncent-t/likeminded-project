const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Events extends Model { }
Events.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    plan_origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plan',
        key: 'plan_id'
      }
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'events'
  }
);
module.exports = Events;











