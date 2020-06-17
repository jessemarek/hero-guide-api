const db = require('../../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById
}

//CREATE
async function add(hero) {
    try {
        const [id] = await db('heroes').insert(hero, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }
}

//READ
function find() {
    return db('heroes as h')
        .select('h.name', 'h.position', 'h.first_appeared', 'h.available_in')
}

async function findBy(filter) {

    try {
        const [heroInfo] = await db('heroes')
            .where(filter)

        const [baseStats] = await db('heroes as h')
            .where(filter)
            .join('base_stat_growth as bg', 'bg.hero_id', 'h.id')
            .select('bg.health', 'bg.p_attack', 'bg.m_attack', 'bg.p_armor', 'bg.m_armor')

        const [maxStats] = await db('heroes as h')
            .where(filter)
            .join('max_stat_growth as mg', 'mg.hero_id', 'h.id')
            .select('mg.health', 'mg.p_attack', 'mg.m_attack', 'mg.p_armor', 'mg.m_armor')

        heroInfo.stat_growth = [baseStats, maxStats]

        return heroInfo
    }
    catch (error) {
        throw error
    }
}

function findById(id) {
    return db('heroes').where({ id }).first()
}

//UPDATE

//DELETE