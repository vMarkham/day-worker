//Add more here when we flesh out the user roles.
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviewer_profile', table=>{
    table.increments()
    table.integer('user_ID'),notNullable()
    table.string("blurb")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviewer_profile')
}
