
exports.up = function(knex, Promise) {
  return knex.schema.createTable('help_post', table=>{
    table.increments()
    table.integer('postUser').notNullable()
    table.string('postTitle').notNullable()
    table.integer('postZip').notNullable()
    table.string('postBlurb').notNullable()
    table.boolean('active').defaultTo(true)
    table.boolean('toolsRequired').defaultTo(false)
    table.boolean('willTeach').defaultTo(false)
    table.string('contact').notNullable()
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('help_post')
};
