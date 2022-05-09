import { Router } from "express";
import postsRouter from "./postsRouter";
import postRouter from "./postRouter";

const router = Router();

router.use("/posts", postsRouter);
router.use("/post", postRouter);

export default router;
