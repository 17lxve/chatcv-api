// Imports
import { serverMessages } from "./messages";
import { credentials, env } from "./assets";
import server from "./app";
import https from "https";

function main() {
  // server.listen(env.port, () => serverMessages.start(env.port));
  https.createServer(credentials, server).listen(env.sec_port,() => serverMessages.start(env.sec_port));
}
// Start!
main();
