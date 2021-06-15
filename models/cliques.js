const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Cliques extends Model {}

Cliques.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
    }
);


module.exports = Cliques;


