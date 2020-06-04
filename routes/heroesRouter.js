const router = require('express').Router()

const Heroes = require('../data/heroData')
const Hero = require('../data/testHero')

router.get('/', (req, res) => {
    res.status(200).json(Heroes)
})

router.get('/:hero', (req, res) => {
    res.status(200).json(Hero)
})

module.exports = router