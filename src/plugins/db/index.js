const fp = require('fastify-plugin');
const knex = require('knex');

const dbConfig = require('../../../knexfile');

const knexConnector = async (server, opts) => {
    const db = knex(dbConfig);
    await db.migrate.latest();
    server.decorate('knex', db);
};

module.exports = fp(knexConnector);