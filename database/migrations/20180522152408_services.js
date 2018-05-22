// 'service' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', table=>{
    table.increments()
    table.string('service').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('services')
}
