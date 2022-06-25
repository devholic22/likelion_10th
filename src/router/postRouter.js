import { Router } from "express";
import { verifyToken } from "../../middlewares";
import { editPost, getPost, getOnePost, writePost, deletePost } from "../controller/postController";

const postRouter = Router();

postRouter.get("/", getPost);
postRouter.post("/", verifyToken, writePost);
postRouter.get("/:id", getOnePost);
postRouter.put("/:id", verifyToken, editPost);
postRouter.delete("/:id", verifyToken, deletePost);

export default postRouter;