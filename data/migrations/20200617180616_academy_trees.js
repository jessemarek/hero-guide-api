
exports.up = function (knex) {
    return knex.schema
        //HERO ACADEMY TREES TABLE
        .createTable('academy_trees', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('tree_name', 128).notNullable().unique()
        })
        .createTable('hero_trees', tbl => {
            //Primary Key
            tbl.increments()

            //Foreign Key hero_id => heroes.id
            tbl.integer('hero_id')
                .notNullable()
                .unsigned()
                .references('heroes.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            //Foreign Key tree_id => academy_trees.id
            tbl.integer('tree_id')
                .notNullable()
                .unsigned()
                .references('academy_trees.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('hero_trees')
        .dropTableIfExists('academy_trees')
};
