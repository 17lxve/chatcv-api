// Imports
import mongoose from "mongoose";
import { seed } from ".";
import { env } from "../assets";
import { databaseMessages } from "../messages";

// The database object
let db: any;

// The connection initializer
const connector = {
  init: async function () {
    try {
      databaseMessages.start();
      console.log(env.mongo_uri);
      db = await mongoose
        .connect(env.mongo_uri)
        .then(() => databaseMessages.success())
        .catch((err) => databaseMessages.connection_error(err));
      await seed();
    } catch (err: any) {
      databaseMessages.init_error(err);
    }
  },
  get: () => db,
  collection: (collection_name: string) =>
    mongoose.connection.db.collection(collection_name),
};

// Exports
export default connector;
