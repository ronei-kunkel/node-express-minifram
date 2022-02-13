const express = require('express')
const router = express.Router()

// import controllers
const controller = require('../../controller/controller')

// routes and methods for family
router.get('/home',  controller.home.homePage)

module.exports = router
