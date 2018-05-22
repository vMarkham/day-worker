
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'Wood_shop_guy',
          name:"Woody",
          email:"woodWorker@gmail.com",
          phone:"555-555-5555",
          zipcode:98034,
          password:"password"
         },
        {
          id: 2,
          user_name: 'tile_guy',
          name: "Thom"
          email:"4tile@gmail.com",
          phone:"111-111-1111",
          zipcode:98033,
          password:"password"
        },
        {
          id: 3,
          user_name: 'Fix_your_fence',
          name:"Phill"
          email:"fenceGuy@gmail.com",
          phone:"333-333-3333",
          zipcode:98036,
          password:"password"
        }
      ]);
    });
    .then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
};
