const Sequelize = require('sequelize');
const { sequelize: db } = require("../db/conn");

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

export {
    Category
}
