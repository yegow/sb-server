"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var db = require("../db/conn").sequelize;
var category_1 = require("./category");
var order_1 = require("./order");
var Property = db.define('property', {
    title: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    type: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    location: {
        type: Sequelize.STRING(70),
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
exports.Property = Property;
Property.hasOne(order_1.Order);
category_1.Category.hasMany(Property);
//# sourceMappingURL=property.js.map