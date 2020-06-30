
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orange_2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('orange_2').insert([
        {
          hero_id: 1,
          slot_1: 'unknown',
          slot_2: 'master\'s-cap',
          slot_3: 'sphere-of-the-sands',
          slot_4: 'stormrider-armor',
          slot_5: 'shadow-slayer',
          slot_6: 'beastly-guardian'
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
