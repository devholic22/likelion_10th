import { Router } from "express";
import database from "../database";

const postsRouter = Router();

// 글 목록 조회
const getAllPost = (req, res) => {
  return res.json(database);
};

// 글 생성
const createPost = (req, res) => {
  const { id, content, writer } = req.body;
  database.data = {
    post: { id }
  };
  return res.json(database);
};

// 특정 글 수정

// 특정 글 삭제

postsRouter.get("/", getAllPost);
postsRouter.post("/", createPost);

export default postsRouter;
