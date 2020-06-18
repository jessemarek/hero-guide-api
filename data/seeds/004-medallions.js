
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('medallions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('medallions').insert([
        {
          name: 'sorceress'
        }
      ]);
    });
};
