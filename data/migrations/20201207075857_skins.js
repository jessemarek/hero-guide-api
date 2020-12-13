exports.up = function (knex) {
  return (
    knex.schema
      // HERO SKINS TABLE
      .createTable("skins", (tbl) => {
        // Primary Key
        tbl.increments();

        tbl.string("skin_name", 64);
        tbl.string("ability", 64);
        tbl.string("details", 128);

        //Foreign Key hero_id => heroes.id
        tbl
          .integer("hero_id")
          .notNullable()
          .unsigned()
          .references("heroes.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("skins");
};
