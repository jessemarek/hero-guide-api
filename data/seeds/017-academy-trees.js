
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('academy_trees').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('academy_trees').insert([
        { tree_name: "ambush" },
        { tree_name: "chivalry" },
        { tree_name: "combat" },
        { tree_name: "combat-dot" },
        { tree_name: "combat-summon" },
        { tree_name: "defense" },
        { tree_name: "defense-dot" },
        { tree_name: "defense-summon" },
        { tree_name: "determination" },
        { tree_name: "determination-summon" },
        { tree_name: "discipline" },
        { tree_name: "discipline-dot" },
        { tree_name: "elemental-magic" },
        { tree_name: "elemental-magic-healing" },
        { tree_name: "fearlessness" },
        { tree_name: "heroism" },
        { tree_name: "heroism-healing" },
        { tree_name: "honor" },
        { tree_name: "honor-healing" },
        { tree_name: "leadership" },
        { tree_name: "leadership-healing" },
        { tree_name: "mysticism" },
        { tree_name: "mysticism-dot" },
        { tree_name: "mysticism-summon" },
        { tree_name: "poise" },
        { tree_name: "poise-healing" },
        { tree_name: "resolve" },
        { tree_name: "support" },
        { tree_name: "support-summon" },
        { tree_name: "tactics" }
      ]);
    });
};
