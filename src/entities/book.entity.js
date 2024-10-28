import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const BookEntity = database.define("tb_books", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  writer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year_release: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { BookEntity };
