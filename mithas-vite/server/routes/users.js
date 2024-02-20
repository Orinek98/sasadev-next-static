const express = require('express')
const usersController = require('../controller/usersController')
const usersRouter = express.Router()

usersRouter
    .route("/")
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)


usersRouter.get('/:id', usersController.getUserById)

module.exports = usersRouter