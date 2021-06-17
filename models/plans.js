const { Model, DataTypes } = require('sequelize');
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
      type: DataTypes.INTEGER
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
  }
);
module.exports = Plans;











