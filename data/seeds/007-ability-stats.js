
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ability_stats').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ability_stats').insert([
        {
          stat_details: '(+ 10 Damage per Ability Point)',
          ability_id: 1
        },
        {
          stat_details: 'Level 100: Deals a base of 1030 Damage',
          ability_id: 1
        },
        {
          stat_details: 'Knock-back Success Rate increases with ability level enemies under level 100 will be knocked back every time',
          ability_id: 1
        },
        {
          stat_details: '(+ 16 Damage per Ability Point)',
          ability_id: 2
        },
        {
          stat_details: 'Level 100: Deals a base of 1600 Damage',
          ability_id: 2
        },
        {
          stat_details: 'Lift Success Rate increases with ability level enemies below level 100 will be Lifted every time',
          ability_id: 2
        },
        {
          stat_details: '(Base 280 + 14 Damage per Ability Point)',
          ability_id: 3
        },
        {
          stat_details: 'Level 80: Deals a base of 1400 Damage',
          ability_id: 3
        },
        {
          stat_details: '(Base 2000 + 50 Health per Ability Point)',
          ability_id: 4
        },
        {
          stat_details: 'Level 60: Passive: Increase Health by 5000',
          ability_id: 4
        },
        {
          stat_details: '(Green: Base 12.3% + 0.3% and 3660 + 60 Damage per Ability Point)',
          ability_id: 5
        },
        {
          stat_details: '(Red: Base 305 + 5 Lifesteal per Ability Point)',
          ability_id: 5
        },
        {
          stat_details: '(Yellow: Base 152.5 + 2.5 Energy per Ability Point)',
          ability_id: 5
        },
        {
          stat_details: 'Level 40: Green: Increases Damage by 30% of target\'s Max Health',
          ability_id: 5
        },
        {
          stat_details: 'Deals a max of 6000 Damage',
          ability_id: 5
        },
        {
          stat_details: 'Red: Increases Lifesteal by 500',
          ability_id: 5
        },
        {
          stat_details: 'Yellow: Reduces target\'s Energy by 250',
          ability_id: 5
        },
      ]);
    });
};
