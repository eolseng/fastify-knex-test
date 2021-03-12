'use strict'

const fastify = require('fastify');

const build = async (opts = {}) => {
    const app = fastify(opts);
    // Register the DB Plugin (Knex)
    app.register(require('./plugins/db/index'));
    // Register the routes
    app.register(require('./routes/api'), {prefix: 'api'});
    // 'On Close' hook
    app.addHook('onClose', (instance, done) => {
        const {knex} = instance;
        knex.destroy(() => instance.log.info('Knex Pool destroyed.'));
    });
    return app;
};

module.exports = build;