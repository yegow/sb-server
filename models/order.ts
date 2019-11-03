const Sequelize = require('sequelize');
const { sequelize: db } = require("../db/conn");

const Order = db.define('order', {
    card: {
      type: Sequelize.STRING(4),
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'initiated'
    }
});

export {
    Order
}
