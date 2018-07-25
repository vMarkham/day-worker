
exports.up = function(knex, Promise) {
  return knex.schema.createTable('worker_profiles', table=>{
    table.increments()
    table.integer('user_ID').notNullable()
    table.string('availability').notNullable()
    table.integer('total_skills').notNullable()
    table.integer('total_projects').notNullable()
    table.string("blurb").notNullable()
    table.string('work_zips').notNullable()
    table.string('about_me_paragraph').notNullable()
    table.string('about_me_interests').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('worker_profiles')
};
