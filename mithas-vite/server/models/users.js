const db = require('../config/dbConnection')

class Users {
    constructor(id, name, surname, email ,phoneNumber, country){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phoneNumber = phoneNumber
        this.country = country
    }

    async save(){
        let d = new Date()
        let dd = d.getDate()
        let mm = d.getMonth()+1
        let yyyy = d.getFullYear()

        let createdAtDate = `${yyyy}-${mm}.${dd}`

        let sql = `
        INSERT INTO USERS(
            id,
            name,
            surname,
            email,
            phoneNumber,
            country,
            timeStamp
        )
        VALUES(
            '${this.id}',
            '${this.name}',
            '${this.surname}',
            '${this.email}',
            '${this.phoneNumber}',
            '${this.country}',
            '${createdAtDate}'
        )
        `;

        const [newUser, _] = await db.execute(sql)

        return newUser
    }

    static getAll() {
        let sql = `
        SELECT *
        FROM USERS`

        return db.execute(sql)
    }

    static getById(id){
        let sql = `
        SELECT *
        FROM USERS
        WHERE id = ${id}`

        return db.execute(sql)
    }

    static getLast(){
        let sql =  `
        SELECT MAX(id) as lastId
        FROM USERS`

        return db.execute(sql)
    }

}

module.exports = Users