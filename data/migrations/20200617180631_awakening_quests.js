
exports.up = function (knex) {
    return knex.schema
        //HERO AWAKENING QUEST TABLES
        .createTable('awakening_quests', tbl => {
            //Primary Key
            tbl.increments()

            tbl.boolean('awakened').defaultTo(false)
            tbl.string('quote', 128)
            tbl.string('sig_item', 128)

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('quest_1', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('chapter', 128)
            //sig fragment item
            tbl.string('fragment', 64)
            //recipe items
            tbl.string('item_1', 64)
            tbl.string('item_2', 64)
            tbl.string('item_3', 64)

            //Foreign Key awakening_id => awakening_quests.id
            tbl.integer('awakening_id')
                .notNullable()
                .unsigned()
                .references('awakening_quests.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('quest_2', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('trial_name', 64)
            tbl.string('trial_icon', 128)
            tbl.integer('completions').unsigned()

            //Foreign Key awakening_id => awakening_quests.id
            tbl.integer('awakening_id')
                .notNullable()
                .unsigned()
                .references('awakening_quests.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('quest_3', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('chapter', 128)
            tbl.string('requirement', 256)

            //Foreign Key awakening_id => awakening_quests.id
            tbl.integer('awakening_id')
                .notNullable()
                .unsigned()
                .references('awakening_quests.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('sig_stats', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('stat', 64)
            tbl.integer('value').unsigned()
            tbl.integer('enchant').unsigned()

            //Foreign Key awakening_id => awakening_quests.id
            tbl.integer('awakening_id')
                .notNullable()
                .unsigned()
                .references('awakening_quests.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('forge_bonus', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('stat', 64)
            tbl.string('bonus', 64)
            tbl.integer('value').unsigned()

            //Foreign Key awakening_id => awakening_quests.id
            tbl.integer('awakening_id')
                .notNullable()
                .unsigned()
                .references('awakening_quests.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('forge_bonus')
        .dropTableIfExists('sig_stats')
        .dropTableIfExists('quest_3')
        .dropTableIfExists('quest_2')
        .dropTableIfExists('quest_1')
        .dropTableIfExists('awakening_quests')
};
