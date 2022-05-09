import { Router } from "express";
import database from "../database";

const postsRouter = Router();

// 글 목록 조회
const getAllPost = (req, res) => {
  return res.json(database);
};

postsRouter.get("/", getAllPost);

export default postsRouter;
