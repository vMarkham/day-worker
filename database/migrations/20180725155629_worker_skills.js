
exports.up = function(knex, Promise) {
  return knex.schema.createTable('worker_skills', table=>{
    table.increments()
    table.integer('worker_id').notNullable()
    table.integer('skill_id').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('worker_skills')
};
