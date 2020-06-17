
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('heroes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {
          name: 'elric',
          title: 'elven knight',
          quote: 'Victory lies ahead!',
          position: 'front',
          role: 'Front Line Tank',
          description: 'Large amount of Health, can use a variety of sword-based skills to inflict major Physical Damage on the enemy',
          first_appeared: 'original-hero',
          card_type: 2,
          chest_type: 'gold',
          available_in: 'campaign'
        },
        {
          name: 'tareth',
          title: 'dragon slayer',
          quote: 'You\'re lucky I\'m on your side... trust me!',
          position: 'front',
          role: 'Front Line Tank',
          description: 'Besides dealing damage, Tareth\'s abilities can increase her Physical Attack rating and can protect teammates',
          first_appeared: 'purchase-hero',
          card_type: 3,
          chest_type: 'diamond',
          available_in: 'hall-of-legends'
        }
      ]);
    });
};
