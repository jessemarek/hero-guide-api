
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('purple_3').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('purple_3').insert([
        {
          hero_id: 1,
          slot_1: 'spartan-dagger',
          slot_2: 'goblin\'s-scimitar',
          slot_3: 'healing-stone',
          slot_4: 'pride\'s-protector',
          slot_5: 'adamantite-scimitar',
          slot_6: 'runic-crystal-ball'
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
