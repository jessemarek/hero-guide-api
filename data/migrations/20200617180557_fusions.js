
exports.up = function (knex) {
    return knex.schema
        //HERO FUSIONS TABLES
        .createTable('purple', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('purple_1', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('purple_2', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('purple_3', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('purple_4', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('orange', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('orange_1', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
        .createTable('orange_2', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('slot_1', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_2', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_3', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_4', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_5', 128).notNullable().defaultsTo('unknown')
            tbl.string('slot_6', 128).notNullable().defaultsTo('unknown')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('orange_2')
        .dropTableIfExists('orange_1')
        .dropTableIfExists('orange')
        .dropTableIfExists('purple_4')
        .dropTableIfExists('purple_3')
        .dropTableIfExists('purple_2')
        .dropTableIfExists('purple_1')
        .dropTableIfExists('purple')
};
