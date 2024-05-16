// Imports
import { Router } from 'express';
import { chat } from '../utils';

function init() {
    const router = Router();
    router.post("/", async (req, res) => {
        res.send(
            await chat(req.body)
            .catch((err:any) => console.error(`Erreur: ${err}`))
        )
    });
    
    return router;
}

export default init();