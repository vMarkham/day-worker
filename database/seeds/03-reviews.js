
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id: 1,
          title: 'he did will',
          review_author:"uuid",
          review_about:"uuid",
          reate:7,
          link:"photo.com",
          blurb:"yadayada - blblalba",
          service_type:1
        },
        {
          id: 2,
          title: 'really bad job',
          review_author:"uuid",
          review_about:"uuid",
          reate:3,
          link:"photo.com",
          blurb:"yadayada - blblalba",
          service_type:2
        },
        {
          id: 3,
          title: 'worth every penny',
          review_author:"uuid",
          review_about:"uuid",
          reate:10,
          link:"photo.com",
          blurb:"yadayada - blblalba",
          service_type:3
        }
      ]);
    });
    .then(() => {
      return knex.raw(`SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));`)
    })
};
