
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('purple_1').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('purple_1').insert([
        {
          hero_id: 1,
          slot_1: 'ice-smasher',
          slot_2: 'destruction',
          slot_3: 'tribal-battleaxe',
          slot_4: 'heavy-club',
          slot_5: 'carnage-mallet',
          slot_6: 'banshee-essence'
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
