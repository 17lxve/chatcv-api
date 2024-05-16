import { en as lang } from "../locales";

export default {
  start: () => console.log(`${lang.Database.start}`),
  success: () => console.log(`${lang.Database.success}`),
  connection_error: (err: Error) =>
    console.error(`${lang.Database.connection_error}${err.message}`),
  init_error: (err: Error) =>
    console.error(`${lang.Database.init_error}${err.message}`),
  seed_done: () => console.log(`${lang.Database.seed_done}`),
};
