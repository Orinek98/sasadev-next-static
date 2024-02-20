const express = require('express')
const cors = require('cors')
const roomsRouter = require('./routes/rooms.js')
const ordersRouter = require('./routes/orders.js')
const usersRouter = require('./routes/users.js')
const sendRouter = require('./routes/send.js')
const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use('/rooms', roomsRouter)

app.use('/orders', ordersRouter)

app.use('/users', usersRouter)

app.use('/send', sendRouter)

app.listen(3000, () => console.log('listen on 3000'))