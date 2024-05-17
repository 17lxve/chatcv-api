import fs from "fs";

const privateKey = fs.readFileSync("./server.key");
const certificate = fs.readFileSync("./server.pem");
const credentials = {key: privateKey, cert: certificate};

export default credentials