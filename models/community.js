const { Model, DataTypes } = require('sequelize');
class Community extends Model {}
Community.init(
  {
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
  }
);
module.exports = Community;











