
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.integer('id').notNull().unique().primary()
    tbl.text('vin').notNull().unique()
    tbl.text('make').notNull()
    tbl.float('model').notNull()
    tbl.text('mileage').notNull()
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('cars');
};
