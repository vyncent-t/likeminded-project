const { Model, DataTypes } = require('sequelize');
class Cliques extends Model {}
Cliques.init(
  {
    cliques_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    clique_name: {
      type: DataTypes.STRING, // Why are we using a char here instead of int like plan.
      allowNull: false,
    },
    plans: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    members: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    community_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
);
module.exports = Cliques;











