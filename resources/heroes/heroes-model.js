const db = require('../../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findHero,
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

//returns a list of all heroes with basic info needed for the hero menus
async function find() {
    try {
        const heroes = await db('heroes as h')
            .join('awakening_quests as aq', 'aq.hero_id', 'h.id')
            .select('h.name', 'h.position', 'h.first_appeared', 'h.available_in', 'aq.awakened')

        return heroes.map(h => h.awakened ? { ...h, awakened: true } : { ...h, awakened: false })
    }
    catch (error) {
        throw error
    }
}

//returns a detailed object with all relevant info needed for a specific hero's guide
function findBy(filter) {
    return Promise.all([

        getHeroInfo(filter),
        getFusionItems(filter),
        getKeyItems(filter),
        getHeroTrees(filter),
        getAwakeningQuest(filter)
    ])
        .then(data => {
            return {
                hero_info: data[0],
                fusion_items: data[1],
                key_items: data[2],
                academy_trees: data[3],
                awakening: data[4]
            }
        })
        .catch(error => error)
}

function findHero(name) {
    return db('heroes').where(name).select('id').first()
}

function findById(id) {
    return db('heroes').where({ id }).first()
}

//UPDATE

//DELETE

//Helper functions to gather all data for a specific Hero Guide

/*********************************** HERO INFO ************************************/
async function getHeroInfo(filter) {
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

        const medallions = await db('heroes as h')
            .where('h.name', filter.name)
            .join('hero_medallions as hm', 'hm.hero_id', 'h.id')
            .join('medallions as m', 'hm.medallion_id', 'm.id')
            .select('m.name')

        heroInfo.stat_growth = [baseStats, maxStats]
        heroInfo.medallions = medallions.map(m => m.name)

        return heroInfo
    }
    catch (error) {
        throw error
    }
}

/*********************************** FUSION ITEMS ************************************/
async function getFusionItems(filter) {
    try {
        const purple = Object.values(await getFusionColor('purple', filter))
        const purple1 = Object.values(await getFusionColor('purple_1', filter))
        const purple2 = Object.values(await getFusionColor('purple_2', filter))
        const purple3 = Object.values(await getFusionColor('purple_3', filter))
        const purple4 = Object.values(await getFusionColor('purple_4', filter))
        const orange = Object.values(await getFusionColor('orange', filter))
        const orange1 = Object.values(await getFusionColor('orange_1', filter))
        const orange2 = Object.values(await getFusionColor('orange_2', filter))

        return {
            purple,
            purple1,
            purple2,
            purple3,
            purple4,
            orange,
            orange1,
            orange2
        }
    }
    catch (error) {
        throw error
    }
}

function getFusionColor(fusion, filter) {
    return db('heroes as h')
        .where(filter)
        .join(`${fusion} as f`, 'f.hero_id', 'h.id')
        .select('f.slot_1', 'f.slot_2', 'f.slot_3', 'f.slot_4', 'f.slot_5', 'f.slot_6')
        .first()
}

/************************************** KEY ITEMS ***************************************/
function getKeyItems(filter) {
    return db('heroes as h')
        .where(filter)
        .join('key_items as ki', 'ki.hero_id', 'h.id')
        .select('ki.item', 'ki.quantity')
}

/************************************ ACADEMY TREES *************************************/
async function getHeroTrees(filter) {
    const trees = await db('heroes as h')
        .where(filter)
        .join('hero_trees as ht', 'ht.hero_id', 'h.id')
        .join('academy_trees as at', 'at.id', 'ht.tree_id')
        .select('at.tree_name')

    return trees.map(tree => tree["tree_name"])
}

/*********************************** AWAKENING QUEST ************************************/
async function getAwakeningQuest(filter) {
    try {
        const [awakening] = await db('heroes as h')
            .where(filter)
            .join('awakening_quests as aq', 'aq.hero_id', 'h.id')
            .select('aq.awakened')

        awakening.awakened ? awakening.awakened = true : awakening.awakened = false

        return awakening
    }
    catch (error) {
        throw error
    }
}