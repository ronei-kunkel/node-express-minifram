const express = require('express')
const router = express.Router()

// import controllers
const controller = require('../../controller/controller')

// routes and methods for family
router.use(controller.not_found.notFoundPage)

module.exports = router