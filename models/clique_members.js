const { Model, DataTypes } = require('sequelize');
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
  }
);
module.exports = Clique_Members;











