
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('key_items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('key_items').insert([
        {
          hero_id: 1,
          item: 'commander\'s-blade',
          quantity: 5
        },
        {
          hero_id: 1,
          item: 'stormrider-armor',
          quantity: 2
        },
        {
          hero_id: 1,
          item: 'kretonian-talisman',
          quantity: 2
        },
        {
          hero_id: 1,
          item: 'bandit\'s-dagger',
          quantity: 2
        },
        {
          hero_id: 1,
          item: 'staff-of-illumination',
          quantity: 2
        },
        {
          hero_id: 1,
          item: 'primordial-stone',
          quantity: 1
        },
        {
          hero_id: 1,
          item: 'champion\'s-cloak',
          quantity: 1
        },
        {
          hero_id: 1,
          item: 'titanic-axe',
          quantity: 3
        },
        {
          hero_id: 1,
          item: 'nemean-hide',
          quantity: 2
        },
        {
          hero_id: 1,
          item: 'mystic-dragonscale',
          quantity: 1
        },
        {
          hero_id: 1,
          item: 'ethereal-cloak',
          quantity: 1
        },
        {
          hero_id: 1,
          item: 'ironbark-warbow',
          quantity: 1
        },
        {
          hero_id: 1,
          item: 'blade-of-chaos',
          quantity: 1
        },
        {
          hero_id: 1,
          item: 'clasp-of-life',
          quantity: 5
        },
        {
          hero_id: 1,
          item: 'healing-stone',
          quantity: 4
        },
        {
          hero_id: 1,
          item: 'stealth-cape',
          quantity: 4
        },
        {
          hero_id: 1,
          item: 'destruction',
          quantity: 2
        },
        {
          hero_id: 1,
          item: 'spartan-dagger',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'commander\'s-blade',
          quantity: 5
        },
        {
          hero_id: 2,
          item: 'bandit\'s-dagger',
          quantity: 4
        },
        {
          hero_id: 2,
          item: 'blade-of-illusion',
          quantity: 3
        },
        {
          hero_id: 2,
          item: 'jupiter\'s-hammer',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'kretonian-talisman',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'staff-of-illumination',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'titanic-axe',
          quantity: 2
        },
        {
          hero_id: 2,
          item: 'ironbark-warbow',
          quantity: 2
        },
        {
          hero_id: 2,
          item: 'mystic-dragonscale',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'nemean-hide',
          quantity: 1
        },

        {
          hero_id: 2,
          item: 'ethereal-cloak',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'blade-of-chaos',
          quantity: 1
        },
        {
          hero_id: 2,
          item: 'healing-stone',
          quantity: 3
        },

        {
          hero_id: 2,
          item: 'destruction',
          quantity: 3
        },
        {
          hero_id: 2,
          item: 'grim-slasher',
          quantity: 3
        },
        {
          hero_id: 2,
          item: 'spartan-dagger',
          quantity: 2
        },
        {
          hero_id: 2,
          item: 'sapphire-bracelet',
          quantity: 2
        },
        {
          hero_id: 2,
          item: 'scepter-of-the-abyss',
          quantity: 1
        },
        {
          hero_id: 3,
          item: 'staff-of-illumination',
          quantity: 5
        },
        {
          hero_id: 3,
          item: 'scepter-of-truth',
          quantity: 4
        },
        {
          hero_id: 3,
          item: 'lost-epic',
          quantity: 3
        },
        {
          hero_id: 3,
          item: 'primordial-stone',
          quantity: 2
        },
        {
          hero_id: 3,
          item: 'oracle\'s-robe',
          quantity: 1
        },
        {
          hero_id: 3,
          item: 'commander\'s-blade',
          quantity: 1
        },
        {
          hero_id: 3,
          item: 'torch-of-destruction',
          quantity: 5
        },
        {
          hero_id: 3,
          item: 'ethereal-cloak',
          quantity: 2
        },
        {
          hero_id: 3,
          item: 'helmet-of-darkness',
          quantity: 1
        },
        {
          hero_id: 3,
          item: 'sage-wand',
          quantity: 8
        },
        {
          hero_id: 3,
          item: 'shuriken',
          quantity: 7
        },
        {
          hero_id: 3,
          item: 'phantom-jar',
          quantity: 5
        },
        {
          hero_id: 3,
          item: 'crystal-staff',
          quantity: 4
        },
        {
          hero_id: 3,
          item: 'scepter-of-the-abyss',
          quantity: 2
        },
        {
          hero_id: 3,
          item: 'natural-remedy',
          quantity: 2
        },
        {
          hero_id: 3,
          item: 'wellspring-water',
          quantity: 2
        },
        {
          hero_id: 3,
          item: 'ghostly-mantle',
          quantity: 1
        },
        {
          hero_id: 3,
          item: 'ancient-rune',
          quantity: 1
        },
        {
          hero_id: 4,
          item: 'scepter-of-truth',
          quantity: 5
        },
        {
          hero_id: 4,
          item: 'lost-epic',
          quantity: 3
        },
        {
          hero_id: 4,
          item: 'staff-of-illumination',
          quantity: 3
        },
        {
          hero_id: 4,
          item: 'primordial-stone',
          quantity: 2
        },
        {
          hero_id: 4,
          item: 'oracle\'s-robe',
          quantity: 1
        },
        {
          hero_id: 4,
          item: 'torch-of-destruction',
          quantity: 5
        },
        {
          hero_id: 4,
          item: 'helmet-of-darkness',
          quantity: 2
        },
        {
          hero_id: 4,
          item: 'ethereal-cloak',
          quantity: 1
        },
        {
          hero_id: 4,
          item: 'sage-wand',
          quantity: 6
        },
        {
          hero_id: 4,
          item: 'shuriken',
          quantity: 4
        },
        {
          hero_id: 4,
          item: 'ghostly-mantle',
          quantity: 4
        },
        {
          hero_id: 4,
          item: 'crystal-staff',
          quantity: 4
        },
        {
          hero_id: 4,
          item: 'natural-remedy',
          quantity: 3
        },
        {
          hero_id: 4,
          item: 'healing-stone',
          quantity: 2
        },
        {
          hero_id: 4,
          item: 'phantom-jar',
          quantity: 2
        },
        {
          hero_id: 4,
          item: 'ancient-rune',
          quantity: 2
        },
        {
          hero_id: 4,
          item: 'scepter-of-the-abyss',
          quantity: 1
        },
        {
          hero_id: 4,
          item: 'wellspring-water',
          quantity: 1
        },
        {
          hero_id: 5,
          item: 'bandit\'s-dagger',
          quantity: 5
        },
        {
          hero_id: 5,
          item: 'blade-of-illusion',
          quantity: 3
        },
        {
          hero_id: 5,
          item: 'commander\'s-blade',
          quantity: 3
        },
        {
          hero_id: 5,
          item: 'kretonian-talisman',
          quantity: 2
        },
        {
          hero_id: 5,
          item: 'jupiter\'s-hammer',
          quantity: 1
        },
        {
          hero_id: 5,
          item: 'ironbark-warbow',
          quantity: 4
        },
        {
          hero_id: 5,
          item: 'blade-of-chaos',
          quantity: 3
        },
        {
          hero_id: 5,
          item: 'titanic-axe',
          quantity: 2
        },
        {
          hero_id: 5,
          item: 'mystic-dragonscale',
          quantity: 1
        },
        {
          hero_id: 5,
          item: 'nemean-hide',
          quantity: 1
        },

        {
          hero_id: 5,
          item: 'ancient-royal-sword',
          quantity: 9
        },
        {
          hero_id: 5,
          item: 'destruction',
          quantity: 7
        },
        {
          hero_id: 5,
          item: 'spartan-dagger',
          quantity: 5
        },

        {
          hero_id: 5,
          item: 'grim-slasher',
          quantity: 3
        },
        {
          hero_id: 5,
          item: 'goblet-of-the-ancients',
          quantity: 1
        },
        {
          hero_id: 5,
          item: 'natural-remedy',
          quantity: 1
        },
        {
          hero_id: 5,
          item: 'stealth-cape',
          quantity: 1
        },
        {
          hero_id: 5,
          item: 'clasp-of-life',
          quantity: 1
        },
      ]);
    });
};
