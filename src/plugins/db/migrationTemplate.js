const {doMigration} = require('../lib')

// Set this to the name of the SQL to do the migration from.
// Example: 'V1__Initial_Version.sql'
const filename = ""

export async function up(knex) {
    return doMigration(knex, filename);
}

export async function down(knex) {
    // Not used - revert migrations by making a new clean up migration.
}