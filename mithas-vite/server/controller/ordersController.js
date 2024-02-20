const db = require('../config/dbConnection')
const Orders = require('../models/orders')
const {format} = require('date-fns')
var $ = require( "jquery" );
var getDaysArray = function(start, end) {
    for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(format(new Date(dt), 'yyyy-MM-dd').toString());
    }
    return arr;
  };

var getMerged = function(obj1, obj2){
    
}

exports.getAllOrders = async (req, res, next) =>{
    try {
        let [orders, _] = await Orders.getAll()

        res.status(200).json({orders})

    } catch (error) {
        console.log(error)

    }
}

exports.createNewOrder = async(req, res, next) =>{
    let {room, checkIn, checkOut, guestNumber, price, userId } = req.body

    let [data, _] = await Orders.getLast()

    console.log("last id:",data[0].lastId)

    let orderId = data[0].lastId + 1


    let order = new Orders (orderId, room, checkIn, checkOut, guestNumber, price, userId)

    order = await order.save()

    console.log(order)

    res.send("Created new order")
}



exports.getOrdersById = async (req, res, next) => {
    try{
        let orderId = req.params.id
        console.log('orderId: ', orderId)
        let [order, _] = await Orders.getById(orderId)

        console.log('order:', order)
        res.status(200).json({order})
    }
    catch (error) {
        console.log(error)
    }
}

exports.deleteOrdersById = async(req, res, next) =>{
    let orderId = req.params.id
    console.log('delete orderId', orderId)
    try {
        Orders.deleteById(orderId)
        res.status(200).json({orderId})
    } catch (error) {
        console.log(error)
    }
    
}

exports.getCalendar = async (req, res, next) =>{

    try {
        let tempCalendar = {}
        let [calendar, _] = await Orders.getCalendar()

        calendar.forEach(order =>{
            let dataRange = getDaysArray(order.checkIn, order.checkOut)
            //  console.log('dataRange: ', dataRange)
            dataRange.forEach(date =>{
                if(!(date in tempCalendar)){
                    // console.log('oooook')
                    tempCalendar[date] = []
                    // console.log("TempCalendar:", tempCalendar)
                }
                // console.log('orderId:', order.orderId,' room:', order.room, 'userId:', order.userId)
                tempCalendar[date].push({orderId: order.orderId, room: order.room, userId: order.userId, guest: order.guestNumber})
            })
        })

        console.log(tempCalendar)

        res.status(200).json({tempCalendar})
    } catch (error) {
        console.log(error)
    }
}

exports.getSeasonPrice = async (req, res, next) => {
    try {
        let checkIn = req.params.checkInReq
        let checkOut = req.params.checkOutReq

        let [season, _] = await Orders.getPrice(checkIn, checkOut)

        res.status(200).json({season})
    }

    catch(error) {
        console.log(error)
    }
}