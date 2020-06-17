const db = require('../../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById
}

async function add(member) {
    try {
        const [id] = await db('credits').insert(member, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }
}

function find() {
    return db('credits')
}

function findBy(filter) {
    return db('credits').where(filter).orderBy('id')
}

function findById(id) {
    return db('credits').where({ id }).first()
}