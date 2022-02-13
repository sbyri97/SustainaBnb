'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        onDelete: 'cascade',
        references: { model: "Users" },
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DECIMAL
      },
      lng: {
        type: Sequelize.DECIMAL
      },
      imageUrl :{
        type: Sequelize.STRING,
        allowNull: false
      },
      guestCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bedCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bedroomCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bathCount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,1)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      propertyType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      privacyType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
