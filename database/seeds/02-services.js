
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {id: 1, service: 'Wood Work'},
        {id: 2, service: 'Welder'},
        {id: 3, service: 'Laber'},
        {id: 4, service: "Tile"},
        {id: 5, service: "Landscape"}
      ]);
    });
    .then(() => {
      return knex.raw(`SELECT setval('services_id_seq', (SELECT MAX(id) FROM services));`)
    })
};
