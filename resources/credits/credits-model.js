const db = require('../../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById
}

//CREATE
async function add(member) {
    try {
        const [id] = await db('credits').insert(member, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }
}

//READ
async function find() {
    const memberKeys = await db('credits').select('member_key').orderBy('id')
    const members = await db('credits').select('member_name', 'avatar', 'guild').orderBy('id')
    const memberList = {}

    memberKeys.forEach((key, idx) => memberList[key.member_key] = members[idx])

    return memberList
}

function findBy(filter) {
    return db('credits').where(filter).orderBy('id')
}

function findById(id) {
    return db('credits').where({ id }).first()
}

//UPDATE

//DELETE