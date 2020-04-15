exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.text('titleStatus').notNull()
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTableIfExists('titleStatus')
  };