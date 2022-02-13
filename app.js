const express = require('express')
const app = express()
const route = require('./route/route')

const PATH = require('path')
const PORT = process.env.PORT || 3000

app
  .use(express.static(PATH.join(__dirname, 'public')))
  .set('views', PATH.join(__dirname, 'view'))
  .set('view engine', 'ejs')
  .use(route)
  .listen(PORT)