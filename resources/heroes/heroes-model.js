const db = require('../../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById
}

async function add(hero) {
    try {
        const [id] = await db('heroes').insert(hero, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }
}

function find() {
    return db('heroes')
}

function findBy(filter) {
    return db('heroes').where(filter).orderBy('id')
}

function findById(id) {
    return db('heroes').where({ id }).first()
}