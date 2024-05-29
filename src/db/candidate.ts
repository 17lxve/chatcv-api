// Imports
import { CandidateType } from "../models";
import { db } from ".";

// Define the name of the collection
const collection_ln = "candidates";

// The CRUD controller factory
class Candidate {
  // Create
  create = async (candidate: any, doc: string, motive: string) =>
    await db.collection(collection_ln).insertOne({
      prenom: candidate.fni,
      nom: candidate.lni,
      phone: candidate.phonei,
      email: candidate.maili,
      cv: doc,
      mo: motive
    });

  // Read
  get = async () => await db.collection(collection_ln).find().toArray();
  getWithId = async (id: string) => //@ts-ignore
    await db.collection(collection_ln).findOne({ _id: id });

  // Update
  update = async (id: string, candidate: any) =>
    await db.collection(collection_ln).updateOne(
      { //@ts-ignore
        _id:id,
      },
      {
        $set: {
          ln:
            candidate.ln ?? (await this.getWithId(id).then((data) => data!.ln)),
          phone:
            candidate.phone ??
            (await this.getWithId(id).then((data) => data!.phone)),
          email:
            candidate.email ??
            (await this.getWithId(id).then((data) => data!.email)),
        },
      },
    );

  // Delete
  delete = async (id: string) => //@ts-ignore
    await db.collection(collection_ln).deleteOne({ _id:id });
}

// Exports
export default new Candidate();
