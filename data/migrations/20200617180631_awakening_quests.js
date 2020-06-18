
exports.up = function (knex) {
    return knex.schema
        //HERO AWAKENING QUEST TABLES
        .createTable('awakening_quests', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.boolean('awakened').defaultTo(false)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('awakening_quests')
};
