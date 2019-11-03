"use strict";
var Sequelize = require('sequelize');
/**
 * Sequelize database connection
 */
var sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
});
sequelize.authenticate()
    .catch(function (err) {
    console.error(err.message);
    throw err;
});
sequelize.sync({ force: true });
module.exports = {
    sequelize: sequelize
};
//# sourceMappingURL=conn.js.map