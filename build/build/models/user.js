"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var db = require("../db/conn").sequelize;
var User = db.define('user', {
    firstName: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    role: {
        type: Sequelize.STRING(10),
        defaultValue: 'user'
    },
    mobile: {
        type: Sequelize.STRING(10),
    },
    address: {
        type: Sequelize.STRING(60),
    },
    password: {
        type: Sequelize.STRING(40),
        allowNull: false
    }
});
exports.User = User;
//# sourceMappingURL=user.js.map