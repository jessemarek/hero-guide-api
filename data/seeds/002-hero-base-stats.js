
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
        },
        //Jasper
        {
          hero_id: 3,
          health: 57,
          p_attack: 4.3,
          m_attack: 6.1,
          p_armor: 1.9,
          m_armor: 2
        },
        //Serafine
        {
          hero_id: 4,
          health: 67,
          p_attack: 4.3,
          m_attack: 6.2,
          p_armor: 1.8,
          m_armor: 2.2
        },
        //Slim
        {
          hero_id: 5,
          health: 70,
          p_attack: 7.7,
          m_attack: 0,
          p_armor: 2,
          m_armor: 1.8
        },
        //Gizmo
        {
          hero_id: 6,
          health: 62,
          p_attack: 2.5,
          m_attack: 6.7,
          p_armor: 3,
          m_armor: 1.8
        }
      ]);
    });
};
