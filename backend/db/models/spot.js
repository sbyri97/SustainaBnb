'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
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
      },
      country: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.DECIMAL,
      },
      lng: {
        type: DataTypes.DECIMAL,
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
        type: DataTypes.DECIMAL(10, 1),
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
          isDecimal: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      propertyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      privacyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      scopes: {
        currentSpot: {
          attributes: {},
        },
      },
    }
  );
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE'})
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true})
    Spot.hasMany(models.Booking, { foreignKey: 'spotId'})
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete: 'cascade', hooks: true})
  };

  Spot.submit = async function ({
    address, city, state, country, guestCount,
    bedCount, bedroomCount, bathCount, name, price, description,
    propertyType, privacyType, userId
  }) {
    const spot = await Spot.create({
    address, city, state, country, guestCount,
    bedCount, bedroomCount, bathCount, name, price, description,
    propertyType, privacyType, userId
    });
    return await Spot.findByPk(spot.id)
  };

  return Spot;
};
