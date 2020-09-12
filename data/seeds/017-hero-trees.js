
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('hero_trees').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hero_trees').insert([
        {
          hero_id: 1,
          tree_id: 6
        },
        {
          hero_id: 1,
          tree_id: 15
        },
        {
          hero_id: 2,
          tree_id: 30
        },
        {
          hero_id: 2,
          tree_id: 18
        },
        {
          hero_id: 3,
          tree_id: 22
        },
        {
          hero_id: 3,
          tree_id: 14
        },
        {
          hero_id: 4,
          tree_id: 22
        },
        {
          hero_id: 4,
          tree_id: 13
        },
        {
          hero_id: 5,
          tree_id: 3
        },
        {
          hero_id: 5,
          tree_id: 16
        },
        {
          hero_id: 6,
          tree_id: 22
        },
        {
          hero_id: 6,
          tree_id: 13
        }
      ]);
    });
};
