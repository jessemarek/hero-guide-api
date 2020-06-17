const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

//Middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

//Routers
const heroesRouter = require('../resources/heroes/heroes-router')
const creditsRouter = require('../resources/credits/credits-router')

//Endpoints
server.use('/api/heroes', heroesRouter)
server.use('/api/credits', creditsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ API: "up and running!" })
})

module.exports = server