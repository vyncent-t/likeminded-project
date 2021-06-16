const { Model, DataTypes } = require('sequelize');
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
    },
    plan_origin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }
);
module.exports = Events;











