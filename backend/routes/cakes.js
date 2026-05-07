import { Router } from "express";
import { cakes } from "../data/cakes.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json(cakes);
});

export default router;
