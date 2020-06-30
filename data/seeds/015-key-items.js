
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
      ]);
    });
};
