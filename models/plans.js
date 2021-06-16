const { Model, DataTypes } = require('sequelize');
class Plans extends Model {}
Plans.init(
  {
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    clique_origin: {
      type: DataTypes.STRING, // Why are we using a char here instead of int like plan.
      allowNull: false,
    },
    plan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plan_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);
module.exports = Plans;











