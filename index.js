require('dotenv').config()

const server = require('./server')

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`\n === Server listening on PORT ${PORT} === \n`)
})