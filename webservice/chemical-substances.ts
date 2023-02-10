import { Request, Response, Router } from "express";
import { MongoDB } from "./database/mongodb";

const mongoDB = new MongoDB();
mongoDB.connect();

async function getChemicalSubstances(req: Request, res: Response) {
  const substances = await mongoDB.getChemicalSubstances()
  res.status(200).send(substances);
}

const router = Router();

router.get("/", getChemicalSubstances);

export default router;
