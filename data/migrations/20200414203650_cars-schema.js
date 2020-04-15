

//knex schema

exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.integer('id').notNull().unique().primary()
    tbl.text('vin').notNull().unique()
    tbl.text('make').notNull()
    tbl.text('model').notNull()
    tbl.float('mileage').notNull()
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('cars');
};
