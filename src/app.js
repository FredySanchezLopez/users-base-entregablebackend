const express = require('express')

const app = express()
const db = require('./utils/database')
const port = require('../config').api.port

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch((err) => console.log(err))

app.use(express.json())

app.get('/',  (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})