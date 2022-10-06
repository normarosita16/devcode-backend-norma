"use strict";
const { Model } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  class ActivityGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  ActivityGroup.init(
    {
      id: { allowNull: true, primaryKey: true, type: DataTypes.INTEGER },

      title: DataTypes.STRING,
      
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ActivityGroup",
      tableName: "activities",
    }
  );
  return ActivityGroup;
};
