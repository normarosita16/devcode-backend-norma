"use strict";
const { TODOITEM_TABLE_NAME } = require("../fixtures/todoitem.fixture");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TODOITEM_TABLE_NAME, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activity_group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      is_active: {
        type: Sequelize.INTEGER,
      },
      priority: {
        type: Sequelize.STRING,
      },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TODOITEM_TABLE_NAME);
  },
};
