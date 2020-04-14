//knex migrations

module.exports = {

    client: 'sqlite3', //configure knex to connect to the database using sqlite3
    useNullAsDefault: true, //flag required by sqlite3
    connection: {
        filename: "./data/cars.db3" //location of the database file
    }
};