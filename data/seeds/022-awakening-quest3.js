
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('quest_3').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quest_3').insert([
        {
          chapter: 'Chapter 14 - Predator and Prey',
          requirement: 'All heroes must survive (Heroic Difficulty)',
          awakening_id: 1
        }
      ]);
    });
};
