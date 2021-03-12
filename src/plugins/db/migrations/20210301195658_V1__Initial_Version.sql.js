const {doMigration} = require('../lib')

// Set this to the name of the SQL to do the migration from.
// Example: 'V1__Initial_Version.sql'
const filename = 'V1__Initial_Version.sql'

const up = async (knex) => {
    return doMigration(knex, filename);
}

const down = async (knex) => {
    // Not used - revert migrations by making a new clean up migration.
}

module.exports = {
    up,
    down
}