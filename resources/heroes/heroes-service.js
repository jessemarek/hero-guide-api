//Database connection
const Heroes = require('./heroes-model')

module.exports = {
    validateHero
}

//Middleware that checks if a hero exists in database
function validateHero(req, res, next) {
    const { hero } = req.params

    Heroes.findHero({ name: hero })
        .then(id => {
            if (id) {
                next()
            }
            else {
                res.status(404).json({ message: `${hero} not found in database` })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
}