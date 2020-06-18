
exports.up = function (knex) {
    return knex.schema.createTable('credits', tbl => {
        //PrimaryKey  
        tbl.increments()

        tbl.string('member_key', 64).notNullable().unique()
        tbl.string('member_name', 64).notNullable().unique()
        tbl.string('avatar', 128).notNullable().unique()
        tbl.string('guild', 64).notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('credits')
};
