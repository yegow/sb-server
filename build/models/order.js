"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var db = require("../db/conn").sequelize;
var user_1 = require("./user");
var Order = db.define('order', {
// status: {
//     type: Sequelize.STRING,
//     defaultValue: 'in-progress'
// }
});
exports.Order = Order;
user_1.User.hasMany(Order);
//# sourceMappingURL=order.js.map