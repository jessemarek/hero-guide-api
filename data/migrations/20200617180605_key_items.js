
exports.up = function (knex) {
    return knex.schema
        //HERO KEY ITEMS TABLE
        .createTable('key_items', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl.string('item', 128).notNullable().defaultsTo('unknown')
            tbl.integer('quantity').notNullable().unsigned().defaultsTo(0)
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('key_items')
};
