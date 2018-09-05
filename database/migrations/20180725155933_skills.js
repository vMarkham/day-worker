
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skills', table=>{
    table.increments()
    table.string('skill').notNullable()
    table.string('description').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('skills')
};
