// Imports
import { Router } from "express";
import { candidateDB } from "../db";
import { save, motivate } from "../utils";
import { UploadedFile } from "express-fileupload";

function init() {
  const router = Router();
  // router.post("/", async (req, res) => res.send(await candidateDB.create(req.body)));
  router.get("/", async (req, res) => res.send(await candidateDB.get()));
  router.get("/:mail", async (req, res) =>
    res.send(await candidateDB.getWithMail(req.params.mail)),
  );
  router.put("/:mail", async (req, res) =>
    res.send(await candidateDB.update(req.params.mail, req.body)),
  );
  router.delete("/:mail", async (req, res) =>
    res.send(await candidateDB.delete(req.params.mail)),
  );
  router.get("/letter/:filename", async (req, res) =>
    res.download(process.env.OS === "Linux" ? `${process.env.USEER}/letters/${req.params.filename}`: `C:\\Users\\${process.env.USER}\\Downloads\\letters\\${req.params.filename}`)
);
  router.get("/cv/:filename", async (req, res) => {
    const filename = req.params.filename;
    res.download(
      process.env.OS === "Linux"
        ? `/${process.env.USER}/resumes/${filename}`
        : `C:\\Users\\${process.env.USER}\\Downloads\\resumes\\${filename}`,
    );
  });

  router.post("/new", async (req, res) => {
    console.log(req.files!.doci);
    if (req.files === null || req.files === undefined) {
      res
        .status(400)
        .json(req.files === null ? "Null Stuff" : "Undefined stuff");
    } else {
      const doc = req.files.doci;
      const motive = req.files.motivation;
      try {
        const cv = save(doc as UploadedFile);
        const mo = motivate(motive as UploadedFile);
        candidateDB.create(req.body, cv, mo);
        res.status(201).json({ status: "uploaded" });
      } catch (error) {
        res.status(500).json({ error });
      }
    }
  });

  return router;
}

export default init();
