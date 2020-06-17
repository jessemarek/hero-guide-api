
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('base_stat_growth').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('base_stat_growth').insert([
        //Elric
        {
          hero_id: 1,
          health: 73,
          p_attack: 3.7,
          m_attack: 0,
          p_armor: 1.9,
          m_armor: 1.9
        },
        //Tareth
        {
          hero_id: 2,
          health: 82,
          p_attack: 6.3,
          m_attack: 0,
          p_armor: 2.5,
          m_armor: 2
        }
      ]);
    });
};
