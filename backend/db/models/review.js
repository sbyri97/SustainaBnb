'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'cascade' })
    Review.belongsTo(models.Spot, { foreignKey: 'spotId', onDelete: 'cascade' })
  };

 Review.submit = async function ({
    userId, spotId, review
  }) {
    const retreview = await Review.create({
      userId, spotId, review
    });
    return await Review.findByPk(retreview.id)
  };
  return Review;
};
