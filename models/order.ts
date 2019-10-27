const Sequelize = require('sequelize');
const { sequelize: db } = require("../db/conn");

import { User } from "./user";

const Order = db.define('order', {
    // status: {
    //     type: Sequelize.STRING,
    //     defaultValue: 'in-progress'
    // }
});

User.hasMany(Order);

export {
    Order
}
