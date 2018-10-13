# vue+vue-Router+webpack(vue-cli)+node+express+mysql实现前后端分离的demo

> 技术栈：vue+vue-Router+webpack(vue-cli)+node+express+mysql

## 功能：
``` bash
# 1.通过node启动前后端
# 2.实现前后端的分离，通过规定api实现前后端的交互
# 3.demo功能简单，连接mysql数据库实现增加、更新、删除、显示数据的基本功能
# 4.没有使用任何UI，只为实现上面三个功能，页面很丑，不喜勿喷！
```

## 开发详情介绍：

# 1.通过vue-cli2.0完成前端功能
    vue init webpack mysqlNode
# 2.前端与后端api的连接
    axios实现前端页面的请求request
    webpack的dev-server中的代理proxy实现跨域，连接后端api
    express帮助后端api提供json格式（res.json()方法），返回response 
# 3.数据库的安装及使用
[安装mysql](https://www.jianshu.com/p/07a9826898c0)
其中步骤三、启动MySQL 时候，如果开启未成功，需要重启电脑在尝试开启
nano ~/.bash_profile 添加PATH
mysql -uroot -h 127.0.0.1 -p

# 4.node.js操作mysql数据库
[node.js操作mysql](https://www.jianshu.com/p/56ee83adca73)
[mysql](https://github.com/mysqljs/mysql)

## 项目的启动
前端：npm run dev
后端：node app.js
数据库：
启动sql: mysql -uroot -h 127.0.0.1 -p
sql命令（创建数据库）：create database learn_practice;
sql命令（进入数据库）：use learn_practice;
sql命令（显示数据表）：show tables;
sql命令（可以时时观察cartoon表）：select * from cartoon;

## demo显示操作
打开页面[http://127.0.0.1:8080](http://127.0.0.1:8080)就可以进行测试了；
打开页面[http://127.0.0.1:7070/api/findAllCartoon](http://127.0.0.1:7070/api/findAllCartoon)可以看到后端返回的json格式