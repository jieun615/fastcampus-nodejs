const Sequelize = require('sequelize');
require('dotenv').config();

const dbConfig = {
    HOST: process.env.INDEX_HOST,
    USER: process.env.INDEX_USER,
    PASSWORD: process.env.INDEX_PASSWORD,
    PORT: process.env.INDEX_PORT,
    DB: 'postgres',
    dialect: 'postgres'
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user.model')(sequelize, Sequelize);
module.exports = db;