const db = require('../config/dbConnection')
const Rooms = require('../models/rooms')

exports.getAllRooms = async (req, res, next) =>{
    try {
        let [rooms, _] = await Rooms.getAll()

        res.status(200).json({rooms})

    } catch (error) {
        console.log(error)

    }
}

exports.getRoomById = async (req, res, next) => {
    try{
        let roomId = req.params.id
        let [room, _] = await Rooms.getById(roomId)

        res.status(200).json({room})
    }
    catch (error) {
        console.log(error)
    }
}

exports.getAvaibleRooms = async (req, res, next) => {
    try {
        let checkIn = req.params.checkInReq
        let checkOut = req.params.checkOutReq

        let [avaible, _] = await Rooms.getAvaible(checkIn, checkOut)
        console.log("checckIn:",checkIn, " checkOut: ",checkOut,"server Av:",avaible)
        res.status(200).json({avaible})
    }

    catch(error) {
        console.log(error)
    }
}