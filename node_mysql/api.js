const express = require('express')
const router = express.Router()
const cartoon = require('./mysql.js')

router.get('/findAllCartoon', async function (req, res) {
  let result = await cartoon.findAllCartoon()
  res.json({code: 200, msg: 'ok', result: result})
})

router.get('/findCartoonById', async function (req, res) {
  let result = await cartoon.findCartoonById(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/addCartoon', async function (req, res) {
  let result = await cartoon.addCartoon(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/updateCartoon', async function (req, res) {
  let result = await cartoon.updateCartoon(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/deleteCartoon', async function (req, res) {
  let result = await cartoon.deleteCartoon(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})

module.exports = router
