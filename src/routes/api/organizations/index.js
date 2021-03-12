const {OrganizationService} = require('../../../services/organizations');
const {getByIdSchema, createSchema} = require('./schemas');

const organizationRoutes = async (app, options) => {
    const organizationService = new OrganizationService(app);

    app.post('/', {schema: createSchema}, async (request, response) => {
        const {body} = request;
        return await organizationService.create({organization: body});
    });

    app.get('/:organizationId', {schema: getByIdSchema}, async (request, response) => {
        // Extract 'organizationId' from the request parameters
        const {params: {organizationId}} = request;
        return await organizationService.getById({id: organizationId});
    });
};

module.exports = organizationRoutes;