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
    guestCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bedCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bedroomCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathCount: {
      type: DataTypes.INTEGER,
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
    },
    isApartment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isHouse: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isEntirePlace: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isPrivateRoom: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId'})
    Spot.hasMany(models.Booking, { foreignKey: 'spotId'})
    Spot.hasMany(models.Image, { foreignKey: 'spotId'})
  };

  Spot.submit = async function ({
    address, city, state, country, guestCount,
    bedCount, bedroomCount, bathCount, name, price, description,
    isApartment, isHouse, isEntirePlace, isPrivateRoom
  }) {
    const spot = await Spot.create({
    address, city, state, country, guestCount,
    bedCount, bedroomCount, bathCount, name, price, description,
    isApartment, isHouse, isEntirePlace, isPrivateRoom
    });
    return await Spot.findByPK(spot.id)
  };

  return Spot;
};
