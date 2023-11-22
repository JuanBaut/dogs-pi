require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const Sequelize = require("sequelize");
const dogModel = require("./models/dogModel.cjs");
const moodModel = require("./models/moodModel.cjs");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  {
    logging: false,
    native: false,
  },
);

dogModel(sequelize);
moodModel(sequelize);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
