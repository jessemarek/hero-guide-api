
exports.up = function (knex) {
    return knex.schema
        //HERO ABILITIES TABLES
        .createTable('abilities', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('name', 128)
            tbl.string('description')
            tbl.string('attributes', 64)

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('ability_stats', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('stat_details')

            //Foreign Key ability_id => abilities.id
            tbl.integer('ability_id')
                .notNullable()
                .unsigned()
                .references('abilities.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('ability_stats')
        .dropTableIfExists('abilities')
};
