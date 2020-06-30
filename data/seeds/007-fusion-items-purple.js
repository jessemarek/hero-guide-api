
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('purple').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('purple').insert([
        {
          hero_id: 1,
          slot_1: 'tribal-battleaxe',
          slot_2: 'stealth-cape',
          slot_3: 'clasp-of-life',
          slot_4: 'golden-mallet',
          slot_5: 'luna\'s-boots',
          slot_6: 'emerald-cuirass'
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
