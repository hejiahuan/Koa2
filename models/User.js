const { Sequelize, Model } = require('sequelize');
/**
 * 自己写的db
 */
const { sequelize } = require("../config/db")


class User extends Model {

}

User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
}, { sequelize })