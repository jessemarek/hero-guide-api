const router = require('express').Router()

const Heroes = require('../../data/heroData')
const Hero = require('../../data/testHero')
const tareth = require('../../data/tareth')

router.get('/', (req, res) => {
    res.status(200).json(Heroes)
})

router.get('/:hero', validateHero, (req, res) => {
    res.status(200).json(Hero)
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