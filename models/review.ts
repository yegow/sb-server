const Sequelize = require('sequelize');

const { sequelize: db } = require("../db/conn");
import { Property } from './property';
import { User } from './user';

const Review = db.define('review', {
    rating: {
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING(150)
    }
});

Review.belongsTo(Property);
Review.belongsTo(User);

export {
    Review
}
