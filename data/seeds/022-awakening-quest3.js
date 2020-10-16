exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("quest_3")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("quest_3").insert([
        {
          chapter: "Chapter 14 - Predator and Prey",
          requirement: "All heroes must survive (Heroic Difficulty)",
          awakening_id: 1,
        },
        {
          chapter: "none",
          requirement: "none",
          awakening_id: 2,
        },
        {
          chapter: "none",
          requirement: "none",
          awakening_id: 3,
        },
        {
          chapter: "3rd Quest - Chapter 14 - Powerful Knowledge",
          requirement: "Serafine must kill Mariana (Heroic Difficulty)",
          awakening_id: 4,
        },
        {
          chapter: "none",
          requirement: "none",
          awakening_id: 5,
        },
        {
          chapter: "none",
          requirement: "none",
          awakening_id: 6,
        },
      ]);
    });
};
