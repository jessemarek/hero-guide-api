
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('purple_4').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('purple_4').insert([
        {
          hero_id: 1,
          slot_1: 'zealot-battleplate',
          slot_2: 'cosmic-shield',
          slot_3: 'demonic-visage',
          slot_4: 'azrael\'s-roar',
          slot_5: 'whisperwind-bow',
          slot_6: 'cap-of-souls'
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
