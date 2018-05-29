
exports.up = function(knex, Promise) {
  return knex.schema.createTable('isow', table=>{
    table.increments()
    table.integer('postUser').notNullable()
    table.string('postTitle').notNullable()
    table.integer('postZip').notNullable()
    table.string('postBlurb').notNullable()
    table.boolean('activeToday').defaultTo(false)
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ISOW')
};
