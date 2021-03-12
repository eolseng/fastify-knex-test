class OrganizationService {

    constructor(app) {
        if (!app.ready) throw new Error('Fastify App is not ready.');
        this.app = app;

        const {knex} = this.app;
        if (!knex) throw new Error('Could not retrieve Knex from Fastify App.');
    }

    async create({organization}) {

        if (!organization) {
            const error = new Error();
            error.statusCode = 400;
            error.message = "Must provide an Organization."
            throw error;
        }

        const {knex} = this.app;
        const res = await knex('organizations').insert(organization).returning('id');
        const id = res[0];
        return await this.getById({id})
    }

    async getById({id}) {

        if (!id) {
            const error = new Error();
            error.statusCode = 400;
            error.message = "Must provide an ID."
            throw error;
        }

        const {knex} = this.app;
        const data = await knex.select('*').from('organizations').where({id});

        if (!data.length) {
            const error = new Error();
            error.statusCode = 404;
            error.message = "Could not find an organizations with id '" + id + "'";
            throw error;
        }

        const [organization] = data;
        return organization;
    }

}

module.exports = {
    OrganizationService
}