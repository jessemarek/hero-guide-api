
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('hero_medallions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hero_medallions').insert([
        /* {
          hero_id: 1,
          medallion_id: 1
        } */
      ]);
    });
};
