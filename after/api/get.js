import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get");
});

export default router;
