const db = require('../config/dbConnection')
const Users = require('../models/users')

exports.getAllUsers = async (req, res, next) =>{
    try {
        let [users, _] = await Users.getAll()

        res.status(200).json({users})

    } catch (error) {
        console.log(error)

    }
}

exports.createNewUser = async(req, res, next) =>{
    let { name, surname, email, phoneNumber, country } = req.body

    let [data, _]= await Users.getLast()

    console.log("last id:",data[0].lastId)

    let id = data[0].lastId + 1

    let user = new Users (id, name, surname, email, phoneNumber, country)

    user = await user.save()

    console.log(user)

    res.status(200).json({id})
}

exports.getUserById = async (req, res, next) => {
    try{
        let userId = req.params.id
        let [user, _] = await Users.getById(userId)

        res.status(200).json({user})
    }
    catch (error) {
        console.log(error)
    }
}