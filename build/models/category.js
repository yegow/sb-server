"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var db = require("../db/conn").sequelize;
var Category = db.define('category', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});
exports.Category = Category;
//# sourceMappingURL=category.js.map