const Sequelize = require('sequelize');

const dbConfig = {
    HOST: process.env.POSTGRES_HOST,
    USER: process.env.POSTGRES_USERNAME,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    PORT: process.env.POSTGRES_PORT,
    DB: process.env.POSTGRES_DATABASE,
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