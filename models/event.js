const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EventTable extends Model { }
EventTable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event'
  }
);

module.exports = EventTable;











