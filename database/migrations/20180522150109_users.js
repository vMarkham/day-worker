// 'users' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table=>{
    table.increments()
    table.string('name').notNullable()
    table.string('username').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.integer("zipcode").notNullable()
    table.string('phone').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
