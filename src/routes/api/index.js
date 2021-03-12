const oas = require('fastify-swagger');

module.exports = async (app, options) => {
    app.register(oas, require('../docs'));
    app.register(require('./organizations'), {prefix: 'organizations'});
};