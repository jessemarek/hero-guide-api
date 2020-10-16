exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ability_stats")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ability_stats").insert([
        {
          stat_details: "(+ 10 Damage per Ability Point)",
          ability_id: 1,
        },
        {
          stat_details: "Level 100: Deals a base of 1030 Damage",
          ability_id: 1,
        },
        {
          stat_details:
            "Knock-back Success Rate increases with ability level enemies under level 100 will be knocked back every time",
          ability_id: 1,
        },
        {
          stat_details: "(+ 16 Damage per Ability Point)",
          ability_id: 2,
        },
        {
          stat_details: "Level 100: Deals a base of 1600 Damage",
          ability_id: 2,
        },
        {
          stat_details:
            "Lift Success Rate increases with ability level enemies below level 100 will be Lifted every time",
          ability_id: 2,
        },
        {
          stat_details: "(Base 280 + 14 Damage per Ability Point)",
          ability_id: 3,
        },
        {
          stat_details: "Level 80: Deals a base of 1400 Damage",
          ability_id: 3,
        },
        {
          stat_details: "(Base 2000 + 50 Health per Ability Point)",
          ability_id: 4,
        },
        {
          stat_details: "Level 60: Passive: Increase Health by 5000",
          ability_id: 4,
        },
        {
          stat_details:
            "(Green: Base 12.3% + 0.3% and 3660 + 60 Damage per Ability Point)",
          ability_id: 5,
        },
        {
          stat_details: "(Red: Base 305 + 5 Lifesteal per Ability Point)",
          ability_id: 5,
        },
        {
          stat_details: "(Yellow: Base 152.5 + 2.5 Energy per Ability Point)",
          ability_id: 5,
        },
        {
          stat_details:
            "Level 40: Green: Increases Damage by 30% of target's Max Health",
          ability_id: 5,
        },
        {
          stat_details: "Deals a max of 6000 Damage",
          ability_id: 5,
        },
        {
          stat_details: "Red: Increases Lifesteal by 500",
          ability_id: 5,
        },
        {
          stat_details: "Yellow: Reduces target's Energy by 250",
          ability_id: 5,
        },
        {
          stat_details:
            "(+ 15 Damage and + 20 Physical Attack per Ability Point)",
          ability_id: 6,
        },
        {
          stat_details: "Level 100: Deals a base of 1500 Damage",
          ability_id: 6,
        },
        {
          stat_details:
            "Physical Attack increases by 2000 when enemy is killed by Ultimate",
          ability_id: 6,
        },
        {
          stat_details:
            "(+ 10 Damage and + 0.06% Movement and Attack Speed per Ability Point)",
          ability_id: 7,
        },
        {
          stat_details: "Level 100: Deals a base of 1000 Damage",
          ability_id: 7,
        },
        {
          stat_details:
            "Every enemy struck increases Movement and Attack Speed by 6%",
          ability_id: 7,
        },
        {
          stat_details:
            "(Base 103 + 5 Health and Base 61 + 3 Lifesteal per Ability Point)",
          ability_id: 8,
        },
        {
          stat_details:
            "Level 80: Restores 503 Health per second for 8 seconds",
          ability_id: 8,
        },
        {
          stat_details: "Lifesteal rating increased by 301",
          ability_id: 8,
        },
        {
          stat_details: "(Base 80 + 2 Physical Armor per Ability Point)",
          ability_id: 9,
        },
        {
          stat_details:
            "Level 60: Aura: All allies' Physical Armor increased by 200",
          ability_id: 9,
        },
        {
          stat_details: "(+ 8 Damage per Ability Point)",
          ability_id: 10,
        },
        {
          stat_details: "Level 100: Deals a base of 800 Damage",
          ability_id: 10,
        },
        {
          stat_details: "(+ 5 Damage per Ability Point)",
          ability_id: 11,
        },
        {
          stat_details: "Level 100: Deals a base of 500 Damage",
          ability_id: 11,
        },
        {
          stat_details: "(Base 200 + 10 Damage per Ability Point)",
          ability_id: 12,
        },
        {
          stat_details: "Level 80: Deals a base of 1000 Damage",
          ability_id: 12,
        },
        {
          stat_details: "(Base 80 + 2 Dodge per Ability Point)",
          ability_id: 13,
        },
        {
          stat_details: "Level 60: Passive: Increases Dodge Rating by 200",
          ability_id: 13,
        },
        {
          stat_details: "(Base 72 + 12 Damage per Ability Point)",
          ability_id: 14,
        },
        {
          stat_details: "Level 100: Each wave deals a base of 1272 Damage",
          ability_id: 14,
        },
        {
          stat_details: "(+ 6 Damage per Ability Point)",
          ability_id: 15,
        },
        {
          stat_details: "Level 100: Deals a base of 600 Damage",
          ability_id: 15,
        },
        {
          stat_details: "(Base 200 + 10 Damage per Ability Point)",
          ability_id: 16,
        },
        {
          stat_details: "Level 80: Deals a base of 1000 Damage",
          ability_id: 16,
        },
        {
          stat_details: "(Base 80 + 2 Magic Armor per Ability Point)",
          ability_id: 17,
        },
        {
          stat_details:
            "Level 60: Reduce target's Magic Armor by 200 for 4 seconds",
          ability_id: 17,
        },
        {
          stat_details:
            "Silence Success Rate increases with ability level. Enemies under level 100 will be Silenced every time",
          ability_id: 17,
        },
        {
          stat_details: "(Base 30 + 0.5 Magic Attack per Ability Point)",
          ability_id: 18,
        },
        {
          stat_details:
            "Level 40: Magic Attack increased by 50 each time Serafine deals Damage",
          ability_id: 18,
        },
        {
          stat_details: "(+ 30 Damage per Ability Point)",
          ability_id: 19,
        },
        {
          stat_details: "Level 100: Deals a base of 3000 Damage",
          ability_id: 19,
        },
        {
          stat_details: "(Base 40 + 0.5% per Ability Point)",
          ability_id: 20,
        },
        {
          stat_details:
            "Level 100: Every hit deals 90% of the Damage of a Basic Attack",
          ability_id: 20,
        },
        {
          stat_details: "(Base 300 + 15 Damage per Ability Point)",
          ability_id: 21,
        },
        {
          stat_details: "Level 80: Deals a base of 1500 Damage",
          ability_id: 21,
        },
        {
          stat_details: "(Base 160 + 4 Crit Rating per Ability Point)",
          ability_id: 22,
        },
        {
          stat_details:
            "Level 60: Passive: Increase Physical Crit Rating by 400",
          ability_id: 22,
        },
        {
          stat_details: "(Base 1280 + 20 Damage per Ability Point)",
          ability_id: 23,
        },
        {
          stat_details: "Level 40: Each bullet deals a maximum of 2080 Damage",
          ability_id: 23,
        },
        {
          stat_details: "(+ 3 Damage per Ability Point)",
          ability_id: 24,
        },
        {
          stat_details: "Level 100: Every hit deals a base of 300 Damage",
          ability_id: 24,
        },
        {
          stat_details: "(+ 4 Damage per Ability Point)",
          ability_id: 25,
        },
        {
          stat_details: "Level 100: Every hit deals a base of 400 Damage",
          ability_id: 25,
        },
        {
          stat_details: "(Base 120 + 6 Damage per Ability Point)",
          ability_id: 26,
        },
        {
          stat_details: "Level 80: Every hit deals a base of 600 Damage",
          ability_id: 26,
        },
        {
          stat_details: "(Base 200 + 5 Damage per Ability Point)",
          ability_id: 27,
        },
        {
          stat_details: "Level 60: Every hit deals a base of 500 Damage",
          ability_id: 27,
        },
        {
          stat_details:
            "Stun Success Rate increases with ability level. Enemies under level 100 will be Stunned every time",
          ability_id: 27,
        },
      ]);
    });
};
