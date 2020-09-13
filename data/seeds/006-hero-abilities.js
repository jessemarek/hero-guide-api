
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('abilities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('abilities').insert([
        {
          name: 'Dragon Strike',
          description: 'Unleash a dragon spirit that knocks back enemies in its path and deal massive Physical Damage',
          attributes: 'none',
          hero_id: 1
        },
        {
          name: 'Uppercut',
          description: 'Cleave a nearby enemy, dealing Physical Damage as well as Lifting and Stunning them',
          attributes: 'none',
          hero_id: 1
        },
        {
          name: 'Parry',
          description: 'Whenever Elric takes Damage, if he is not currently using an ability, he will Parry the attack, reducing the amount of Damage he takes. He will then immediately counterattack',
          attributes: 'none',
          hero_id: 1
        },
        {
          name: 'Knight\'s Oath',
          description: 'Take an oath of loyalty and increase Health',
          attributes: 'none',
          hero_id: 1
        },
        {
          name: 'Engraved Blade',
          description: 'A runic incription appears on Elric\'s sword in one of three colors, bringing and additional effect to all of his abilities. Green grants additional Damage based on the enemy\'s Max Health, Red grants a Lifesteal effect and Yellow reduces enemy Energy',
          attributes: 'none',
          hero_id: 1
        },
      ]);
    });
};
