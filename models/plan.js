const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const EventTable = require('./event');
class PlanTable extends Model { }
PlanTable.init(
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
    // clique_origin_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'cliques',
    //     key: 'clique_id'
    //   }
    // },
    plan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plan_desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plan'
  }
);
PlanTable.belongsTo(EventTable);
module.exports = PlanTable;











