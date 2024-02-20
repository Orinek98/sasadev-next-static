const db = require('../config/dbConnection')

class Rooms {
    constructor(){

    }

    // async save(){
    //     let d = new Date()
    //     let dd = d.getDate()
    //     let mm = d.getMonth()+1
    //     let yyyy = d.getFullYear()

    //     let createdAtDate = `${dd}-${mm}.${yyyy}`
    // }

    static getAll() {
        let sql = `
        SELECT *
        FROM ROOMS`

        return db.execute(sql)
    }

    static getById(id){
        let sql = `
        SELECT *
        FROM ROOMS
        WHERE id = ${id}`

        return db.execute(sql)
    }

    static getAvaible(checkInReq, checkOutReq){
        let sql = `SELECT * 
        FROM ROOMS 
        WHERE id NOT IN ( 
            SELECT room FROM ORDERS 
            WHERE NOT (checkOut < DATE('${checkInReq}') 
                        OR checkIn > DATE('${checkOutReq}')))`

        return db.execute(sql)
    }

}

module.exports = Rooms