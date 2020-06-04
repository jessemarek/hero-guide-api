const express = require('express')
const cors = require('cors')

const heroesRouter = require('../routes/heroesRouter')
const creditsRouter = require('../routes/creditsRouter')

const server = express()

server.use(cors())
server.use(express.json())

server.use('/api/heroes', heroesRouter)
server.use('/api/credits', creditsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: "API up and running!" })
})

module.exports = server