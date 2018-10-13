const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./node_mysql/api.js')

// body-parser中间件post请求的请求体进行解析
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api', router)


const PORT = process.env.port || 7070;
app.listen(PORT);
console.log(`listening on port ${PORT}`)