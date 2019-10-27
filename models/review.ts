const Sequelize = require('sequelize');

const { sequelize: db } = require("../db/conn");
import { Property } from './property';
import { User } from './user';

const Review = db.define('review', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    propertyId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING(150)
    }
});

Property.hasMany(Review);
User.hasMany(Review);

export {
    Review
}
