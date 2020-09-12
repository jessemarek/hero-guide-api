
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
          slot_2: 'hurricane-blade',
          slot_3: 'widowmaker',
          slot_4: 'blade-of-illusion',
          slot_5: 'shadow-slayer',
          slot_6: 'atlantean-battleaxe'
        },
        {
          hero_id: 3,
          slot_1: 'unknown',
          slot_2: 'crescent-staff',
          slot_3: 'pure-jade-chest',
          slot_4: 'lost-epic',
          slot_5: 'transforming-mask',
          slot_6: 'beastly-guardian'
        },
        {
          hero_id: 4,
          slot_1: 'unknown',
          slot_2: 'crescent-staff',
          slot_3: 'pure-jade-chest',
          slot_4: 'lost-epic',
          slot_5: 'transforming-mask',
          slot_6: 'angelic-fan'
        },
        {
          hero_id: 5,
          slot_1: 'unknown',
          slot_2: 'hurricane-blade',
          slot_3: 'widowmaker',
          slot_4: 'blade-of-illusion',
          slot_5: 'shadow-slayer',
          slot_6: 'atlantean-battleaxe'
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
