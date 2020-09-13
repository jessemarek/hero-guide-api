
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forge_bonus').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('forge_bonus').insert([
        {
          stat: 'm-attack',
          bonus: 'm-pierce',
          value: 30,
          awakening_id: 1
        },
        {
          stat: 'm-armor',
          bonus: 'max-health',
          value: 900,
          awakening_id: 1
        },
        {
          stat: 'p-armor',
          bonus: 'm-attack',
          value: 150,
          awakening_id: 1
        }
      ]);
    });
};
