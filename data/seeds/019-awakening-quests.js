
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('awakening_quests').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('awakening_quests').insert([
        {
          hero_id: 1,
          awakened: true,
          quote: 'My blade never betrays me!',
          sig_item: 'dragon-spaulders'
        },
        {
          hero_id: 2,
          awakened: false,
          quote: 'none',
          sig_item: 'none'
        },
        {
          hero_id: 3,
          awakened: false,
          quote: 'none',
          sig_item: 'none'
        },
        {
          hero_id: 4,
          awakened: true,
          quote: 'none',
          sig_item: 'none'
        },
        {
          hero_id: 5,
          awakened: true,
          quote: 'none',
          sig_item: 'none'
        },
        {
          hero_id: 6,
          awakened: false,
          quote: 'none',
          sig_item: 'none'
        }
      ]);
    });
};
