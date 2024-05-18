// Imports
import { serverMessages } from "./messages";
import { env } from "./assets";
import server from "./app";

function main() {
  server.listen(env.port, () => serverMessages.start(env.port));
}
// Start!
main();
