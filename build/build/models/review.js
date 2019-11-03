"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var db = require("../db/conn").sequelize;
var property_1 = require("./property");
var user_1 = require("./user");
var Review = db.define('review', {
    rating: {
        type: Sequelize.INTEGER(1),
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING(150)
    }
});
exports.Review = Review;
Review.belongsTo(property_1.Property);
Review.belongsTo(user_1.User);
//# sourceMappingURL=review.js.map