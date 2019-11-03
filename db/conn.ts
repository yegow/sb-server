var Sequelize = require('sequelize');

/**
 * Sequelize database connection
 */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
  });

sequelize.authenticate()
.catch((err: Error) => {
    console.error(err.message);
    throw err;
});

// { force: true }
sequelize.sync();

module.exports = {
  sequelize
};
