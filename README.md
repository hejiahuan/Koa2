#全局安装Koa2脚手架
	npm install -g koa-generator
	然后找个文件夹
	koa2 xxxx就可以创建了

#脚手架创建的东西不能热启动
	安装热启动插件
	npm install nodemon --save，
	然后在package.json中配置

​	这个nodemon node bin/ww

​	这个bin 就是

![](bin就是node_modules中的bin.JPG)

```
"scripts": {
    "start": "node app.js",
    "dev":"nodemon node bin/www"
  }
```
然后可以npm run dev测试

#定义参数的验证
好用的参数都可以去这里找
https://github.com/koajs/koa/wiki#middleware
这个koa2-validation还是比较不错 的
https://github.com/gedennis/koa2-validation
koa2-validation

#定义全局异常
npm install koa-exception --save
koa-exception
https://github.com/qixin1991/koa-exception/blob/master/README_CN.md

#安装mysql库
npm install --save mysql2

其实这个mysql2就可以写sql语句来查询数据库了

这个是我们自己写的数据查询,koa2有框架像Hibernate一样操作数据库

```js
// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});
 
// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
 
// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
```
#seqvuelize (相当于hibernate的orm)
npm install --save sequelize

npm install --save mysql2
https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/core-concepts/getting-started.md
1定义配置文件

```js

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
    logging:true,
    timezone:'+08:00'
  });

  /**
   * 这个必须调用这个方法
   */
  sequelize.sync()

  module.exports={
    sequelize
  }
```

2定义表类

```js
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
```

3在app.js中导入

```js
/**
 *导入Model类 
 */
require("./models/User")
```

