"use strict";
const { Model } = require("sequelize");
const {
  TODOITEM_MODEL_NAME,
  TODOITEM_TABLE_NAME,
} = require("../fixtures/todoitem.fixture");

module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  TodoItem.init(
    {
      id: { allowNull: true, primaryKey: true, type: DataTypes.INTEGER },
      activity_group_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      is_active: DataTypes.INTEGER,
      priority: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TodoItem",
      tableName: "todoitems",
    }
  );
  return TodoItem;
};
