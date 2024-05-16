// Imports
import { ExampleType } from "../models";
import { db } from ".";

// Define the name of the collection
const collection_name = "examples";

// The CRUD controller factory
class Example {
    // Create
    create= async (example: any) => await db.collection(collection_name).insertOne({
        id: example.id,
        name: example.name,
        content: example.content,
        important: example.important
    })
    
    // Read
    get= async () => await db.collection(collection_name).find().toArray();
    getWithId= async(id: number) => await db.collection(collection_name).findOne({ id });

    // Update
    update= async(id:number, example: any) => await db.collection(collection_name).updateOne(
        {
            id
        },{
            $set : {
                name: example.name ?? await this.getWithId(id).then((data)=>data!.name),
                content: example.content ?? await this.getWithId(id).then((data)=>data!.content),
                important: example.important ?? await this.getWithId(id).then((data)=>data!.important)
            }
        }
    )

    // Delete
    delete= async(id: number) => await db.collection(collection_name).deleteOne({id})
}

// Exports
export default new Example();