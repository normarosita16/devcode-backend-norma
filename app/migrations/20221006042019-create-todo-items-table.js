"use strict";

const TODOITEM_TABLE_NAME = require("../fixtures/todoitem.fixture");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("todos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      activity_group_id: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },
      is_active: { type: Sequelize.INTEGER },
      priority: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("todos");
  },
};
