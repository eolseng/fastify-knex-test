module.exports = {
    client: 'pg',
    connection: {
        application_name: process.env.APPLICATION_NAME || 'fastify-db-service',
        connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/postgres'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/src/plugins/db/migrations',
        stub: __dirname + '/src/plugins/db/migrationTemplate.js'
    }
}