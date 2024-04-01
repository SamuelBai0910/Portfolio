const mongoose = require("mongoose");
// process.env.DATABASE_URL是一个环境变量，用来储存数据库的连接字符串，包括数据库的地址 端口 名称等信息
mongoose.connect(process.env.DATABASE_URL);
// 通过mongoose.connection获取到了数据库连接的对象，赋值给db
const db = mongoose.connection;
// 监听数据库连接成功的事件
db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
