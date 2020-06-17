
exports.up = function (knex) {
    return knex.schema
        //HERO INFO TABLE
        .createTable('heroes', tbl => {
            //Primary Key
            tbl.increments()

            //Hero Info columns
            tbl.string('name', 64).notNullable().unique().index()
            tbl.string('title', 128).notNullable()
            tbl.string('quote', 256).notNullable()
            tbl.string('position', 64).notNullable()
            tbl.string('role', 128).notNullable()
            tbl.text('description').notNullable()
            tbl.string('first_appeared', 64).notNullable()
            tbl.integer('card_type').notNullable().unsigned()
            tbl.string('chest_type', 64).notNullable()
            tbl.string('available_in', 64).notNullable()
        })
        .createTable('base_stat_growth', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id').notNullable().unsigned().references('heroes.id')

            //Base Stat Growth columns
            tbl.integer('health').notNullable().unsigned()
            tbl.integer('p_attack').notNullable().unsigned()
            tbl.integer('m_attack').notNullable().unsigned()
            tbl.integer('p_armor').notNullable().unsigned()
            tbl.integer('m_armor').notNullable().unsigned()
        })
        .createTable('max_stat_growth', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id').notNullable().unsigned().references('heroes.id')

            //Max Stat Growth columns
            tbl.integer('health').notNullable().unsigned()
            tbl.integer('p_attack').notNullable().unsigned()
            tbl.integer('m_attack').notNullable().unsigned()
            tbl.integer('p_armor').notNullable().unsigned()
            tbl.integer('m_armor').notNullable().unsigned()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('max_stat_growth')
        .dropTableIfExists('base_stat_growth')
        .dropTableIfExists('heroes')
};
