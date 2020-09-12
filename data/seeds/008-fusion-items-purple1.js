
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
          slot_1: 'ice-smasher',
          slot_2: 'grim-slasher',
          slot_3: 'destruction',
          slot_4: 'tribal-battleaxe',
          slot_5: 'ancient-royal-sword',
          slot_6: 'golden-mallet'
        },
        {
          hero_id: 3,
          slot_1: 'tri-spirit-orb',
          slot_2: 'wellspring-water',
          slot_3: 'sage-wand',
          slot_4: 'phantom-jar',
          slot_5: 'crystal-staff',
          slot_6: 'runic-eulogy'
        },
        {
          hero_id: 4,
          slot_1: 'elvish-etude',
          slot_2: 'wellspring-water',
          slot_3: 'sage-wand',
          slot_4: 'stealth-cape',
          slot_5: 'clasp-of-life',
          slot_6: 'luna\'s-boots'
        },
        {
          hero_id: 5,
          slot_1: 'grim-slasher',
          slot_2: 'demolisher',
          slot_3: 'destruction',
          slot_4: 'heavy-club',
          slot_5: 'scorching-spear',
          slot_6: 'banshee-essence'
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
