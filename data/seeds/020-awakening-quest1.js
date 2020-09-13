
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
        },
        {
          chapter: 'none',
          fragment: 'none',
          item_1: 'none',
          item_2: 'none',
          item_3: 'none',
          awakening_id: 2
        },
        {
          chapter: 'none',
          fragment: 'none',
          item_1: 'none',
          item_2: 'none',
          item_3: 'none',
          awakening_id: 3
        },
        {
          chapter: 'none',
          fragment: 'none',
          item_1: 'none',
          item_2: 'none',
          item_3: 'none',
          awakening_id: 4
        },
        {
          chapter: 'none',
          fragment: 'none',
          item_1: 'none',
          item_2: 'none',
          item_3: 'none',
          awakening_id: 5
        },
        {
          chapter: 'none',
          fragment: 'none',
          item_1: 'none',
          item_2: 'none',
          item_3: 'none',
          awakening_id: 6
        },
      ]);
    });
};
