var mysql = require('mysql')
var config = require('./default.js')
var pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  port: config.database.port,
  password: config.database.password,
  database: config.database.database
})
// node connect to mysql
let query = function (sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
      } else {
        connection.query(sql, (err, rows) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}
// 创建table-cartoon表
let createTableSql = `create table if not exists cartoon (
  _id int not null auto_increment,
  title text not null,
  doctor text not null,
  country text not null,
  year int not null default 0,
  primary key (_id)
)engine=innoDB default charset=utf8;`
let createTable = function (sql) {
  return query(sql)
}
createTable(createTableSql)

// 添加动漫
let addCartoon = function (values) {
  let addsql = `insert into cartoon (title,doctor,country,year) values ("${values.title}","${values.doctor}","${values.country}",${values.year});`
  return query(addsql, values)
}
// 查询所有动漫
let findAllCartoon = function () {
  let sql = 'select * from cartoon;'
  return query(sql)
}
// 查找动漫详情
let findCartoonById = function (values) {
  let sql = `select * from cartoon where _id=${values._id};`
  return query(sql)
}
// 更改动漫详情
let updateCartoon = function (values) {
  let updatesql = `update cartoon set title="${values.title}",doctor="${values.doctor}",country="${values.country}" where _id=${values._id};`
  return query(updatesql)
}
// 删除动漫
let deleteCartoon = function (values) {
  let deletesql = `delete from cartoon where _id=${values._id};`
  return query(deletesql)
}
module.exports = {
  addCartoon,
  findAllCartoon,
  findCartoonById,
  updateCartoon,
  deleteCartoon
}
