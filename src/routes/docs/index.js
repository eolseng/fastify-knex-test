const APP_PORT = process.env.PORT;

module.exports = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify Test REST API Test Application',
            description: "Docs",
            version: '1.0.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            {name: 'person', description: 'Person related end-points'},
            {name: 'product', description: 'Product related end-points'}
        ]
    }
};