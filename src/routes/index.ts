var express = require('express')
var router = express.Router()
var cors = require('cors')

// Get home page
router.get('/', function(req, res, next) {
  res.send('hello world')
})

module.exports = router
