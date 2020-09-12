
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
          slot_1: 'gaia\'s-cutlass',
          slot_2: 'zealot-battleplate',
          slot_3: 'demonic-visage',
          slot_4: 'dark-wizard\'s-figurine',
          slot_5: 'whisperwind-bow',
          slot_6: 'light-battleaxe'
        },
        {
          hero_id: 3,
          slot_1: 'thunderbolt',
          slot_2: 'sword-of-olympus',
          slot_3: 'midnight-dream',
          slot_4: 'dark-wizard\'s-figurine',
          slot_5: 'shuriken',
          slot_6: 'grand-staff'
        },
        {
          hero_id: 4,
          slot_1: 'angel\'s-wings',
          slot_2: 'torch-of-destruction',
          slot_3: 'midnight-dream',
          slot_4: 'chain-pendant',
          slot_5: 'healing-stone',
          slot_6: 'adamantite-scimitar'
        },
        {
          hero_id: 5,
          slot_1: 'titanic-axe',
          slot_2: 'poseidon\'s-trident',
          slot_3: 'blade-of-chaos',
          slot_4: 'goblin\'s-scimitar',
          slot_5: 'whisperwind-bow',
          slot_6: 'eye-of-death'
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
