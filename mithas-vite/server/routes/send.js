const express = require('express')
const sendController = require('../controller/sendController')
const sendRouter = express.Router()

sendRouter
    .route('/')
    .post(sendController.requestEmail)

module.exports = sendRouter