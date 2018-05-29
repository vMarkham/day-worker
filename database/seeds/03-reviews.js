
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id: 1,
          title: 'he did will',
          review_author:1,
          review_about:2,
          rate:7,
          photo:"photo.com",
          blurb:"yadayada - blblalba",
          service_type:1
        },
        {
          id: 2,
          title: 'really bad job',
          review_author:2,
          review_about:1,
          rate:3,
          photo:"photo.com",
          blurb:"yadayada - blblalba",
          service_type:2
        },
        {
          id: 3,
          title: 'worth every penny',
          review_author:3,
          review_about:1,
          rate:10,
          photo:"photo.com",
          blurb:"yadayada - blblalba",
          service_type:3
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));`)
    })
};
