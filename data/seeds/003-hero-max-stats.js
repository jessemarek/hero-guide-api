
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
        },
        //Jasper
        {
          hero_id: 3,
          health: 129,
          p_attack: 6.4,
          m_attack: 11.4,
          p_armor: 4.2,
          m_armor: 4.5
        },
        //Serafine
        {
          hero_id: 4,
          health: 120,
          p_attack: 7.8,
          m_attack: 11.1,
          p_armor: 3.3,
          m_armor: 3.9
        },
        //Slim
        {
          hero_id: 5,
          health: 126,
          p_attack: 13.8,
          m_attack: 0,
          p_armor: 3.6,
          m_armor: 3.3
        },
        //Gizmo
        {
          hero_id: 6,
          health: 111,
          p_attack: 4.5,
          m_attack: 12,
          p_armor: 5.4,
          m_armor: 3.3
        }
      ]);
    });
};
