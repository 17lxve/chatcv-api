// Imports
import { Router } from "express";
import { chat, upsert } from "../utils";

function init() {
  const router = Router();
  router.post("/", async (req, res) => {
    // console.log(req.body)
    res.send(
      await chat(req.body).catch((err: any) => console.error(`Erreur: ${err}`)),
    );
  });

  router.post("/upsert", async (req, res) => {
    res.send(await upsert().catch((err) => console.error(`Erreur: ${err}`)));
  });
  return router;
}

export default init();
