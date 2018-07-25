
exports.up = function(knex, Promise) {
  return knex.schema.createTable('worker_projects', table=>{
    table.increments()
    table.integer('user_ID').notNullable()
    table.string('title').notNullable()
    table.boolean('favorite').notNullable()
    table.string("description").notNullable()
    table.boolean('complete').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('worker_projects')
};
