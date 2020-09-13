
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('quest_2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quest_2').insert([
        {
          trial_name: 'Bloody Arena',
          trial_icon: 'bloody-arena',
          completions: 10,
          awakening_id: 1
        }
      ]);
    });
};
