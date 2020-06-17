const router = require('express').Router()

const Heroes = require('./heroes-model')
const Hero = require('../../data/testHero')
const tareth = require('../../data/tareth')

router.get('/', (req, res) => {
    //res.status(200).json(Heroes)
    Heroes.find().then(heroes => {
        if (heroes.length) {
            res.status(200).json(heroes)
        }
        else {
            res.status(404).json({ message: "No heroes found" })
        }
    })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

router.get('/:hero', (req, res) => {
    //res.status(200).json(Hero)
    const { hero } = req.params
    Heroes.findBy({ name: hero })
        .then(hero => {
            res.status(200).json(hero)
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

//Custom middleware
function validateHero(req, res, next) {
    const { hero } = req.params

    if (hero === 'tareth') {
        res.status(200).json(tareth)
    }
    else if (hero === 'elric') {
        next()
    }
    else {
        res.status(404).json({ errorMessage: `${hero} not found in database` })
    }
}

module.exports = router