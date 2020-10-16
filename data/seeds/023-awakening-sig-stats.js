exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sig_stats")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("sig_stats").insert([
        {
          stat: "max-health",
          value: 1100,
          enchant: 987,
          awakening_id: 1,
        },
        {
          stat: "magic-attack",
          value: 200,
          enchant: 182,
          awakening_id: 1,
        },
        {
          stat: "physical-armor",
          value: 20,
          enchant: 21,
          awakening_id: 1,
        },
        {
          stat: "magic-armor",
          value: 15,
          enchant: 14,
          awakening_id: 1,
        },
        {
          stat: "none",
          value: 0,
          enchant: 0,
          awakening_id: 2,
        },
        {
          stat: "none",
          value: 0,
          enchant: 0,
          awakening_id: 3,
        },
        {
          stat: "max-health",
          value: 700,
          enchant: 630,
          awakening_id: 4,
        },
        {
          stat: "magic-attack",
          value: 200,
          enchant: 182,
          awakening_id: 4,
        },
        {
          stat: "magic-crit",
          value: 60,
          enchant: 56,
          awakening_id: 4,
        },
        {
          stat: "magic-pierce",
          value: 50,
          enchant: 42,
          awakening_id: 4,
        },
        {
          stat: "max-health",
          value: 1000,
          enchant: 903,
          awakening_id: 5,
        },
        {
          stat: "physical-attack",
          value: 220,
          enchant: 196,
          awakening_id: 5,
        },
        {
          stat: "physical-armor",
          value: 30,
          enchant: 28,
          awakening_id: 5,
        },
        {
          stat: "magic-armor",
          value: 35,
          enchant: 35,
          awakening_id: 5,
        },
        {
          stat: "none",
          value: 0,
          enchant: 0,
          awakening_id: 6,
        },
      ]);
    });
};
