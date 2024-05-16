import { config } from "dotenv";
process.env.node_env !== "production" ? config() : {};

export const port = process.env.PORT || 8080;
export const node_env = process.env.ENV || "development";
export const mongo_uri =
  `${process.env.MONGO_URI}${process.env.APP_NAME}` ||
  "mongodb://localhost:27017/test";
