
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
          slot_2: 'armor-of-shadows',
          slot_3: 'mystic-dragonscale',
          slot_4: 'titanic-axe',
          slot_5: 'demon\'s-skull',
          slot_6: 'maiden\'s-trinket'
        },
        {
          hero_id: 3,
          slot_1: 'unknown',
          slot_2: 'caduceus',
          slot_3: 'book-of-mysteries',
          slot_4: 'victory\'s-scepter',
          slot_5: 'midnight-dream',
          slot_6: 'chain-pendant'
        },
        {
          hero_id: 4,
          slot_1: 'unknown',
          slot_2: 'book-of-mysteries',
          slot_3: 'thunderbolt',
          slot_4: 'victory\'s-scepter',
          slot_5: 'demonic-visage',
          slot_6: 'frozen-teardrop'
        },
        {
          hero_id: 5,
          slot_1: 'unknown',
          slot_2: 'underworld-saber',
          slot_3: 'blade-of-cataclysm',
          slot_4: 'gaia\'s-cutlass',
          slot_5: 'ironbark-warbow',
          slot_6: 'heavy-ballista'
        },
        {
          hero_id: 6,
          slot_1: 'unknown',
          slot_2: 'caduceus',
          slot_3: 'victory\'s-scepter',
          slot_4: 'thunderbolt',
          slot_5: 'torch-of-destruction',
          slot_6: 'art-of-war'
        }
      ]);
    });
};
