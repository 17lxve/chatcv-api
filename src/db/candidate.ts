// Imports
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
  getWithMail = async (email: string) => //@ts-ignore
    await db.collection(collection_ln).findOne({ email });

  // Update
  update = async (email: string, candidate: any) =>
    await db.collection(collection_ln).updateOne(
      { //@ts-ignore
        email,
      },
      {
        $set: {
          ln:
            candidate.ln ?? (await this.getWithMail(email).then((data) => data!.ln)),
          phone:
            candidate.phone ??
            (await this.getWithMail(email).then((data) => data!.phone)),
          email:
            candidate.email ??
            (await this.getWithMail(email).then((data) => data!.email)),
        },
      },
    );

  // Delete
  delete = async (email: string) => //@ts-ignore
    await db.collection(collection_ln).deleteOne({ email });
}

// Exports
export default new Candidate();
