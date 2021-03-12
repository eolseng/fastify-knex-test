const organizationProperties = {
    id: {type: 'number'},
    name: {type: 'string', minLength: 1, maxLength: 255}
}

const tags = ['organization']

const paramsJsonSchema = {
    type: 'object',
    properties: {
        organizationId: {type: 'number'}
    },
    required: ['organizationId']
};

const queryStringJsonSchema = {
    type: 'object',
    properties: {
        filter: {type: 'string'}
    },
    required: ['filter']
}

const bodyCreateJsonSchema = {
    type: 'object',
    properties: organizationProperties,
    request: ['name']
};

const createSchema = {
    tags,
    body: bodyCreateJsonSchema,
    response: {
        201: {
            type: 'object',
            properties: organizationProperties
        }
    }
};

const getByIdSchema = {
    tags,
    params: paramsJsonSchema,
    queryString: queryStringJsonSchema,
    response: {
        200: {
            type: 'object',
            properties: organizationProperties
        }
    }
}


module.exports = {
    getByIdSchema,
    createSchema
}