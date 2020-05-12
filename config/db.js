const { Sequelize } = require('sequelize');

// 导入配置
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database

// 方法 2: 分别传递参数 (其它数据库)
const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  /**
   * 这个define是对表的一些修饰，自动添加的
   * https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-define
   */
  define: {
    timestamps:true,
    paranoid:true
  }
});

/**
 * 这个必须调用这个方法
 */
sequelize.sync()

module.exports = {
  sequelize
}