
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '15243798652', make: 'Toyota', model: 'Camry', mileage: '30000'},
        {id: 2, vin: '98754123568', make: 'Ford', model: 'Focus', mileage: '50000'}
      ]);
    });
};
