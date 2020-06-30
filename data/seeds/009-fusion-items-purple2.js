
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('purple_2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('purple_2').insert([
        {
          hero_id: 1,
          slot_1: 'goblet-of-the-ancients',
          slot_2: 'doomsday-blade',
          slot_3: 'heavenly-amulet',
          slot_4: 'elvish-etude',
          slot_5: 'guardian-plate',
          slot_6: 'clasp-of-life'
        },
        {
          hero_id: 2,
          slot_1: '',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 3,
          slot_1: '',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 4,
          slot_1: '',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 5,
          slot_1: '',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        },
        {
          hero_id: 6,
          slot_1: '',
          slot_2: '',
          slot_3: '',
          slot_4: '',
          slot_5: '',
          slot_6: ''
        }
      ]);
    });
};
