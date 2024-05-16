// import { exampleDB } from ".";
import { databaseMessages } from "../messages";
async function seed() {
  // if (!await exampleDB.getWithId(0)) exampleDB.create({id: 0, name: "Timmy", content: "She left today.", important: true})
  // if (!await exampleDB.getWithId(1)) exampleDB.create({id: 1, name: "Chris", content: "He's sad today.", important: false})
  databaseMessages.seed_done();
}

export default seed;
