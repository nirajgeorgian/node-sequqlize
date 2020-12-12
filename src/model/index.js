import { Sequelize } from "sequelize";
import config from "../config";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: config.dbHost,
  username: config.dbUsername,
  password: config.dbPassword,
  port: config.dbPort,
  database: config.db,
});

export default sequelize;
