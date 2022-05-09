import { Router } from "express";
import database from "../database";

const postRouter = Router();

// 글 개별 항목 조회
const getOnePost = (req, res) => {
  const { id } = req.body;
  const result = database.data.findIndex((data) => data.id === id);
  if (result != -1) {
    const sorted = database.data.filter((data) => data.id === id)[0];
    database.data = sorted;
    return res.json(database);
  }
  return res.json({
    error: "Post not exist"
  });
};

postRouter.get("/", getOnePost);

export default postRouter;
