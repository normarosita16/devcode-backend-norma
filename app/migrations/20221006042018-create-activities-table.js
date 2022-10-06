"use strict";

module.exports = {

  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("activities", {

      id: {

        type: Sequelize.INTEGER,

        primaryKey: true,

        autoIncrement: true,

        allowNull: false,

      },

      

      title: { type: Sequelize.STRING },

      

      

      createdAt: { type: Sequelize.DATE, allowNull: false },

      updatedAt: { type: Sequelize.DATE, allowNull: false },

      deletedAt: { type: Sequelize.DATE },

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable("activities");

  },

};


