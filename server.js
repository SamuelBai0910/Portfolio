// 引入express框架
const express = require("express");
// 用来处理文件路径
const path = require("path");
// 用于为网站提供图标（会在应用程序中提供一个URL，这个图标文件通常是一个favicon.ico 文件，自动为你的应用程序提供这个图标文件，而无需手动设置路由。）
const favicon = require("serve-favicon");
// 用于记录HTTP请求的详细信息（方法 URL 状态码 响应时间）
const logger = require("morgan");

// 永远把配置代码放在顶部，用的频率高
require("dotenv").config();

// 连接到database
require("./config/database");

// Express 应用的实例化对象 所有的Express功能和中间件都将被添加到这个程序
const app = express();

// 用于设置HTTP请求的日志记录（性能优化，不需要将所有详细信息都记录到日志中）
app.use(logger("dev"));
// 用于解析传入的请求体，将其转换为json格式
app.use(express.json());

// 设置favicon.ico文件 在builder文件夹下
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
// 设置静态文件夹（目录） 在build文件夹下
app.use(express.static(path.join(__dirname, "build")));

// 设置程序后端路由 不能和前端一样 port要大写
const port = process.env.PORT || 5001;

// 在这里（通配符路由之前）添加API路由

// 单页应用（SPA），所有页面的路由都在前端处理，而Express仅提供API。在这种情况下，你可能希望所有非AJAX请求（刷新页面）都指向你的单页应用的入口页面，例如 index.html。
// 可以看到我们发送的是HTML文件，sendFile，它是SPA入口文件，/*就是所有路由
// 在单页应用（SPA）中，通常会使用前端路由来管理页面的导航和展示。当用户在浏览器地址栏中手动输入一个路径（例如 http://localhost:3000/about），如果这个路径在前端路由中没有对应的路由规则，因为会匹配到/*，浏览器不会进行页面的重新加载或跳转，目的是保证前端路由的性能，不会因为用户手动输入一个不存在的路由而重新加载。
// 这种方法就是使用了HTMPL5 history API
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 让app监听后端路由，并打印到控制台
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
// 在前端更新内容后，一定要npm run build才能同步到后端。
