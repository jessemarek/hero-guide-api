
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orange_1').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('orange_1').insert([
        {
          hero_id: 1,
          slot_1: 'unknown',
          slot_2: 'renegade\'s-armor',
          slot_3: 'atlantean-battleaxe',
          slot_4: 'commander\'s-blade',
          slot_5: 'armor-of-shadows',
          slot_6: 'mystic-dragonscale'
        },
        {
          hero_id: 2,
          slot_1: 'unknown',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 3,
          slot_1: 'unknown',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 4,
          slot_1: 'unknown',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 5,
          slot_1: 'unknown',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 6,
          slot_1: 'unknown',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        }
      ]);
    });
};
