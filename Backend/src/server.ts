import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import usersRoute from './routes/users'

const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

//Routes
app.use('/users',usersRoute)

//Start the server
const PORT = process.env.PORT || 3333
const BASE_URL = process.env.BASE_URL || 'http://localhost'
app.listen(PORT,()=>{
    console.log(`\x1b[32m[Server listening at\x1b[0m \x1b[33m${PORT}\x1b[32m]\x1b[0m`)
    console.log(`\x1b[36murl: ${BASE_URL}:${PORT}`)
})
