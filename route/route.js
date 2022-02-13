const express = require('express')
const router = express.Router()

// import route families
const root_routes = require('./root/root')
const home_routes = require('./home/home')
const not_found_routes = require('./not_found/not_found')

// register use
router
    .use(root_routes)
    .use(home_routes)
    .use(not_found_routes)

module.exports = router