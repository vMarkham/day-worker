
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ISOW').del()
    .then(function () {
      // Inserts seed entries
      return knex('ISOW').insert([
        {
          id: 1,
          postUser: 1,
          postTitle:"I make tables",
          postBlurb:"custom to your room call to day for a quote and consept drawing",
          activeToday:false
        }
      ]);
    });
    .then(() => {
      return knex.raw(`SELECT setval('ISOW_id_seq', (SELECT MAX(id) FROM reviews));`)
    })
};
