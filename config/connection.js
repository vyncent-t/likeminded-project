require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'likeminded',
  'root',
  '', {
  host: 'localhost',
  dialect: 'mysql',
}
)

module.exports = sequelize;