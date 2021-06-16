const { Model, DataTypes } = require('sequelize');
class Events extends Model {}
Events.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    plan_origin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);
module.exports = Events;











