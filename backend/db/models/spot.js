'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    guest_count: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bed_count: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedroom_count: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bath_count: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
      ,
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId'})
    Spot.hasMany(models.Booking, { foreignKey: 'spotId'})
    Spot.hasMany(models.Image, { foreignKey: 'spotId'})
  };
  return Spot;
};
