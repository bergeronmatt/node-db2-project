
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.text('transmission').notNull()
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('transmission')
};
