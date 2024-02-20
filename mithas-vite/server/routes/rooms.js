const express = require('express')
const roomsController = require('../controller/roomsController')
const roomsRouter = express.Router()


roomsRouter
    .route("/")
    .get(roomsController.getAllRooms)

// router.get("/",async (req, res) => {

//     try {
//         const dbConnect = await mysql.createConnection({
//             host: "127.0.0.1",
//             database: "mithas_db",
//             user: "root",
//             password: ""
//         })

//         console.log("mysql connected")

//         const query = `
//             SELECT *
//             FROM ROOMS
//         `
//         const values = []
//         const [data] = dbConnect.execute(query, values);

//         console.log("server data: ",data)

//         return res.json({ results: data})
//     }

//     catch (err){
//         console.log(err);
//     }

        
// })

// router.get("/:id", (req, res) => {

// })
roomsRouter.get('/:checkInReq/:checkOutReq', roomsController.getAvaibleRooms)

roomsRouter.get('/:id', roomsController.getRoomById)

module.exports = roomsRouter