const router = require('express').Router()

//Database connection
const Credits = require('./credits-model')

router.get('/', (req, res) => {
    Credits.find()
        .then(members => {
            if (members) {
                res.status(200).json(members)
            }
            else {
                res.status(404).json({ message: 'No members found' })
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router