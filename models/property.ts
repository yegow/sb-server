const Sequelize = require('sequelize');
const { sequelize: db } = require("../db/conn");

import { User } from "./user";
import { Category } from './category';
import { Order } from "./order";

const Property = db.define('property', {
    title: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    category: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    type: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    location: {
        type: Sequelize.STRING (70),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER(12),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    }
});

Property.hasOne(Order);Order
User.hasMany(Property)
Category.hasMany(Property);

export {
    Property
}
