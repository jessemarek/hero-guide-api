
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
          slot_1: 'goblin\'s-scimitar',
          slot_2: 'healing-stone',
          slot_3: 'azrael\'s-roar',
          slot_4: 'eye-of-death',
          slot_5: 'doomsday-blade',
          slot_6: 'destruction'
        },
        {
          hero_id: 3,
          slot_1: 'frozen-teardrop',
          slot_2: 'art-of-war',
          slot_3: 'shuriken',
          slot_4: 'scepter-of-time',
          slot_5: 'voodoo-manuscript',
          slot_6: 'lilith-staff'
        },
        {
          hero_id: 4,
          slot_1: 'frozen-teardrop',
          slot_2: 'chain-pendant',
          slot_3: 'shuriken',
          slot_4: 'athena\'s-blessing',
          slot_5: 'voodoo-manuscript',
          slot_6: 'ice-smasher'
        },
        {
          hero_id: 5,
          slot_1: 'heavy-ballista',
          slot_2: 'butterfly-swords',
          slot_3: 'spartan-dagger',
          slot_4: 'light-battleaxe',
          slot_5: 'doomsday-blade',
          slot_6: 'destruction'
        },
        {
          hero_id: 6,
          slot_1: 'frozen-teardrop',
          slot_2: 'chain-pendant',
          slot_3: 'shuriken',
          slot_4: 'athena\'s-blessing',
          slot_5: 'scepter-of-the-abyss',
          slot_6: 'lilith-staff'
        }
      ]);
    });
};
