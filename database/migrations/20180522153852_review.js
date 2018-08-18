// 'user-join-services' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', table=>{
    table.increments()
    table.integer('worker_user_ID').notNullable()
    table.integer('project_ID').notNullable()
    table.integer('reviewer_user_ID').notNullable()
    table.string('title', 35).notNullable()
    table.integer('review_author').notNullable()
    table.integer('review_about').notNullable()
    table.integer('rate').notNullable()
    table.string('photo')
    table.string('blurb', 1000)
    table.integer('service_type').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
}
