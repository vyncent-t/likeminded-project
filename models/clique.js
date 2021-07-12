const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class CliqueTable extends Model { }
CliqueTable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // author_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // },
    clique_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'clique'
  }
);

module.exports = CliqueTable;











