import fs from "fs";

const privateKey = fs.readFileSync('./server.key', {encoding: 'utf8', flag: 'r'});
const certificate = fs.readFileSync('./server.pem', {encoding: 'utf8', flag: 'r'});
const credentials = {key: privateKey, cert: certificate};

export default credentials