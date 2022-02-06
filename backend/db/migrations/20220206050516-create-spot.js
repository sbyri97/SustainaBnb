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
      guest_count: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bed_count: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bedroom_count: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bath_count: {
        allowNull: false,
        type: Sequelize.STRING
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
      isApartment: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isHouse: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isEntirePlace: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isPrivateRoom: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
