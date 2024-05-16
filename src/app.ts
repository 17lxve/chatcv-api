// Imports
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import { middlewareExample } from "./middleware";
import { db } from "./db";

function init() {
  // Create Express Server
  const app = express();

  // Add dependencies to the app
  // Including custom middleware
  const dependencies = [
    cors({ origin: true }),
    helmet(),
    morgan("dev"),
    express.json(),
    express.text({ type: "text/html" }),
    middlewareExample,
    fileUpload({
      useTempFiles: true,
      safeFileNames: true,
      preserveExtension: true,
    }),
    express.raw({ type: "application/vnd.custom-type" }),
    router,
  ];
  for (const dependency of dependencies) app.use(dependency);

  // Return the server with all parameters defined
  db.init();
  return app;
}

// Exports
export default init();
