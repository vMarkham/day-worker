
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('isow').del()
    .then(function () {
      // Inserts seed entries
      return knex('isow').insert([
        {
          id: 1,
          postUser: 1,
          postTitle:"I make tables",
          postBlurb:"custom to your room call to day for a quote and consept drawing",
          activeToday:false,
          postZip:98036
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('isow_id_seq', (SELECT MAX(id) FROM reviews));`)
    })
};
