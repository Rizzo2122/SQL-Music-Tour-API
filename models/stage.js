'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent }) {
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
    }
  }
  Stage.init({
      stage_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      }
  }, {
      sequelize,
      modelName: 'Stage',
      tableName: 'Stages',
      timestamps: false
  });
  return Stage;
};