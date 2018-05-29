// 'user-join-services' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table=>{
    table.increments()
    table.string('title', 35).notNullable()
    table.integer("review_author").notNullable()
    table.integer("review_about").notNullable()
    talbe.integer("rate").notNullable()
    talbe.string("photo")
    talbe.string("blurb", 1000)
    table.integer("service_type").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
}