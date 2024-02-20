const express = require('express')
const ordersController = require('../controller/ordersController')
const ordersRouter = express.Router()

ordersRouter
    .route("/")
    .get(ordersController.getAllOrders)
    .post(ordersController.createNewOrder)

ordersRouter.get(('/calendar'), ordersController.getCalendar)

ordersRouter
    .route('/:id')
    .get(ordersController.getOrdersById)
    .delete(ordersController.deleteOrdersById)

    
ordersRouter.get('/:checkInReq/:checkOutReq', ordersController.getSeasonPrice)

module.exports = ordersRouter