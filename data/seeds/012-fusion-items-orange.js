
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orange').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('orange').insert([
        {
          hero_id: 1,
          slot_1: 'unknown',
          slot_2: 'aegis',
          slot_3: 'nemean-hide',
          slot_4: 'titanic-axe',
          slot_5: 'demon\'s-skull',
          slot_6: 'cap-of-souls'
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