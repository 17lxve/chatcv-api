// Imports
import { CandidateType } from "../models";
import { db } from ".";

// Define the name of the collection
const collection_ln = "candidates";

// The CRUD controller factory
class Candidate {
    // Create
    create= async (candidate: any, doc:string) => await db.collection(collection_ln).insertOne({
        prenom: candidate.fni,
        nom: candidate.lni,
        phone: candidate.phonei,
        email: candidate.maili,
        cv: doc
    })
    
    // Read
    get= async () => await db.collection(collection_ln).find().toArray();
    getWithId= async(id: number) => await db.collection(collection_ln).findOne({ id });

    // Update
    update= async(id:number, candidate: any) => await db.collection(collection_ln).updateOne(
        {
            id
        },{
            $set : {
                ln: candidate.ln ?? await this.getWithId(id).then((data)=>data!.ln),
                phone: candidate.phone ?? await this.getWithId(id).then((data)=>data!.phone),
                email: candidate.email ?? await this.getWithId(id).then((data)=>data!.email)
            }
        }
    )

    // Delete
    delete= async(id: number) => await db.collection(collection_ln).deleteOne({id})
}

// Exports
export default new Candidate();