'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent }) {
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
      })
    }
  }
  Event.init({
      event_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      genre: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      available_start_time: {
          type: DataTypes.DATE,
          allowNull: false
      },
      end_time: {
          type: DataTypes.DATE,
          allowNull: false
      }
  }, {
      sequelize,
      modelName: 'Event',
      tableName: 'Events',
      timestamps: false
  });
  return Event;
};