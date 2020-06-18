
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('awakening_quests').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('awakening_quests').insert([
        {
          hero_id: 1,
          awakened: true
        },
        {
          hero_id: 2,
          awakened: false
        },
        /* {
          hero_id: 3,
          awakened: false
        },
        {
          hero_id: 4,
          awakened: true
        },
        {
          hero_id: 5,
          awakened: true
        },
        {
          hero_id: 6,
          awakened: false
        } */
      ]);
    });
};
