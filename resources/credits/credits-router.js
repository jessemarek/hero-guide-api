const router = require('express').Router()

const Credits = require('../../data/creditsData')

router.get('/', (req, res) => {
    res.status(200).json(Credits)
})

module.exports = router