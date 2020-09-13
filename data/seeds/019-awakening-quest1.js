
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('quest_1').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quest_1').insert([
        {
          chapter: 'Chapter 13 - Struggle for Survival',
          fragment: 'gold-ore',
          item_1: 'ethereal-cloak',
          item_2: 'mystic-dragonscale',
          item_3: 'destruction',
          awakening_id: 1
        }
      ]);
    });
};
