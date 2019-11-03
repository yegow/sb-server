import { Order } from "./order";
import { Property } from "./property";
import { Review } from "./review";

const Sequelize = require('sequelize');
const { sequelize: db } = require("../db/conn");

const User = db.define('user', {
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

User.hasMany(Property);
Property.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

export {
    User
}
