
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
          slot_2: 'renegade\'s-armor',
          slot_3: 'beastly-guardian',
          slot_4: 'commander\'s-blade',
          slot_5: 'underworld-saber',
          slot_6: 'blade-of-cataclysm'
        },
        {
          hero_id: 3,
          slot_1: 'unknown',
          slot_2: 'priestly-scepter',
          slot_3: 'angelic-fan',
          slot_4: 'staff-of-illumination',
          slot_5: 'jewel-of-helios',
          slot_6: 'victory\'s-scepter'
        },
        {
          hero_id: 4,
          slot_1: 'unknown',
          slot_2: 'priestly-scepter',
          slot_3: 'jewel-of-helios',
          slot_4: 'scepter-of-truth',
          slot_5: 'caduceus',
          slot_6: 'helmet-of-darkness'
        },
        {
          hero_id: 5,
          slot_1: 'unknown',
          slot_2: 'renegade\'s-armor',
          slot_3: 'helira\'s-mask',
          slot_4: 'bandit\'s-dagger',
          slot_5: 'ares\'-spear',
          slot_6: 'blade-of-time'
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
