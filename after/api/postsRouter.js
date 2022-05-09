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

  if (Boolean(database.data.post)) {
    database.data.post.push({ id });
  } else {
    database.data.post = [];
    database.data.post.push({ id });
  }

  const result = Object.assign({}, database);
  result.data = {
    post: result.data.post[-1]
  };

  return res.json(result);
};

// 특정 글 수정
const editPost = (req, res) => {
  const { id, content, writer } = req.body;
  const correctData = database.data.filter(
    (data) => data.id === id && data.writer === writer
  )[0];
  if (correctData) {
    correctData.content = content;

    const result = Object.assign({}, database);
    result.data = { id };

    return res.json(result);
  }
  return res.json({ error: "Cannot modify post" });
};

// 특정 글 삭제
const deletePost = (req, res) => {
  const { id, writer } = req.body;
  const correctData = database.data.filter(
    (data) => data.id === id && data.writer == writer
  )[0];
  if (correctData) {
    database.data = database.data.filter((data) => data != correctData);

    const result = Object.assign({}, database);
    result.data = "Successfully deleted";

    return res.json(result);
  } else {
    return res.json({ error: "Cannot delete post" });
  }
};
postsRouter.get("/", getAllPost);
postsRouter.post("/", createPost);
postsRouter.put("/", editPost);
postsRouter.delete("/", deletePost);

export default postsRouter;
