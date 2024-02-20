const db = require('../config/dbConnection')

class Orders {
    constructor(orderId, room, checkIn, checkOut, guestNumber, price, userId){
        this.orderId = orderId
        this.room = room
        this.checkIn = checkIn
        this.checkOut = checkOut
        this.guestNumber = guestNumber
        this.price = price
        this.userId = userId
    }

    async save(){
        let d = new Date()
        let dd = d.getDate()
        let mm = d.getMonth()+1
        let yyyy = d.getFullYear()

        let createdAtDate = `${yyyy}-${mm}.${dd}`

        let sql = `
        INSERT INTO ORDERS(
            orderId,
            room,
            checkIn,
            checkOut,
            guestNumber,
            price,
            userId,
            timeStamp
        )
        VALUES(
            '${this.orderId}',
            '${this.room}',
            '${this.checkIn}',
            '${this.checkOut}',
            '${this.guestNumber}',
            '${this.price}',
            '${this.userId}',
            '${createdAtDate}'
        )
        `;

        const [newOrder, _] = await db.execute(sql)

        return newOrder
    }

    static getAll() {
        let sql = `
        SELECT *
        FROM ORDERS`

        return db.execute(sql)
    }

    static getById(id){
        let sql = `
        SELECT *
        FROM ORDERS
        WHERE orderId = ${id}`

        return db.execute(sql)
    }

    static deleteById(id){
        let sql = `
        DELETE
        FROM Orders
        WHERE orderId = ${id}`

        return db.execute(sql)
    }

    static getLast(){
        let sql =  `
        SELECT MAX(orderId) as lastId
        FROM ORDERS`

        return db.execute(sql)
    }

    static getCalendar(){
        let sql= `
        SELECT *
        FROM ORDERS
        ORDER BY checkIn
        `

        return db.execute(sql)
    }

    static getPrice(checkInReq, checkOutReq){
        let sql = `SELECT *
        FROM SEASON_PRICE 
        WHERE NOT (LAST_DAY < DATE('${checkInReq}') OR FIRST_DAY > DATE('${checkOutReq}'))`

        return db.execute(sql)
    }
}

module.exports = Orders