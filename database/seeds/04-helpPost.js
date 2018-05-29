
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('help_post').del()
    .then(function () {
      // Inserts seed entries
      return knex('help_post').insert([
        {
          id: 1,
          postUser:2,
          postTitle:"Need Help with Tile",
          postBlurb:"remodeling my kitchen and need some helping hands to get this project done over the weekend, would be great if you've done this before bot not required",
          postZip:98033,
          active:true,
          willTeach:true,
          toolsRequired:false,
          contact:"555-555-5555"
        },
        {
          id: 2,
          postUser: 3,
          postTitle:"Need Help with yard",
          postBlurb:"Getting old need it mowed",
          postZip:98036,
          active:true,
          willTeach:true,
          toolsRequired:false,
          contact:"555-555-5555"
        },
        {
          id: 3,
          postUser: 3,
          postTitle:"Wash My Car",
          postBlurb:"I got a bucket and Soap, need it washed",
          postZip:90210,
          active:true,
          willTeach:true,
          toolsRequired:false,
          contact:"555-555-5555"
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('help_post_id_seq', (SELECT MAX(id) FROM users));`)
    })
};
