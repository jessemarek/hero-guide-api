exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("quest_2")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("quest_2").insert([
        {
          trial_name: "Bloody Arena",
          trial_icon: "bloody-arena",
          completions: 10,
          awakening_id: 1,
        },
        {
          trial_name: "none",
          trial_icon: "none",
          completions: 0,
          awakening_id: 2,
        },
        {
          trial_name: "none",
          trial_icon: "none",
          completions: 0,
          awakening_id: 3,
        },
        {
          trial_name: "Valley of the Broken Halberd",
          trial_icon: "broken-halberd",
          completions: 10,
          awakening_id: 4,
        },
        {
          trial_name: "Tidal Temple",
          trial_icon: "tidal-temple",
          completions: 6,
          awakening_id: 5,
        },
        {
          trial_name: "none",
          trial_icon: "none",
          completions: 0,
          awakening_id: 6,
        },
      ]);
    });
};
