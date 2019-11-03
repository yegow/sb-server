import { Property } from "./property";

const Sequelize = require('sequelize');
const { sequelize: db } = require("../db/conn");

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

Category.hasMany(Property);
Property.belongsTo(Category);

export {
    Category
}
