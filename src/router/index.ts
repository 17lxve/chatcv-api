// Imports
import getEndpoints from "express-list-endpoints";
import candidateRoutes from "./candidate";
import chatRoutes from "./chat";

import server from "../app";
import { Router } from "express";

function init() {
  // Create a router for general use
  const router = Router();

  // Add the routes to the router
  // Simple routes
  router.get("/", (req, res) =>
    res.send(
      getEndpoints(server).map(
        (endpoint) => `${endpoint.methods} ${endpoint.path}`,
      ),
    ),
  );

  // Grouped routes
  router.use("/candidate", candidateRoutes);
  router.use("/chat", chatRoutes);
  // Return the router
  return router;
}

// Exports
export default init();
