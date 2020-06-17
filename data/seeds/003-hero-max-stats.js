
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('max_stat_growth').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('max_stat_growth').insert([
        //Elric
        {
          hero_id: 1,
          health: 165,
          p_attack: 8.4,
          m_attack: 0,
          p_armor: 4.2,
          m_armor: 4.2
        },
        //Tareth
        {
          hero_id: 2,
          health: 147,
          p_attack: 11.4,
          m_attack: 0,
          p_armor: 4.5,
          m_armor: 3.6
        }
      ]);
    });
};
