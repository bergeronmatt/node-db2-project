
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, vin: '15243798652', make: 'Toyota', model: 'Camry', mileage: '30000',}
      ]);
    });
};
