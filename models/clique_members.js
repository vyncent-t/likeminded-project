const { Model, DataTypes } = require('sequelize');
class Clique_Members extends Model {}
Clique_Members.init(
  {
    member_list: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);
module.exports = Clique_Members;











