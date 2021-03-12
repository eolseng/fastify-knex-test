const path = require('path');
const fs = require('fs');

const doMigration = async (knex, filename) => {
    console.log("Applying migration from file: " + filename);
    const filepath = path.join(__dirname, '../../../sql/migrations/' + filename);
    const sql = fs.readFileSync(filepath).toString();
    return knex.raw(sql);
}

const getSqlQuery = (filename) => {
    const filepath = path.join(__dirname, '../../../sql/queries/' + filename);
    return fs.readFileSync(filepath).toString();
}

module.exports = {
    doMigration,
    getSqlQuery
}