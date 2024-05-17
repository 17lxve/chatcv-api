import fs from "fs";

const privateKey = fs.readFileSync('src/assets/server-key.pem', {encoding: 'utf8', flag: 'r'});
const certificate = fs.readFileSync('src/assets/server.pem', {encoding: 'utf8', flag: 'r'});
const credentials = {key: privateKey, cert: certificate};

export default credentials
