import { Router } from "express";
import { getLogin, getRegister, postLogin, postRegister } from "../controller/userController";

const globalRouter = Router();

globalRouter.get("/", (req, res) => {
    return res.send("복습 웹사이트");
});

globalRouter.get("/register", getRegister);
globalRouter.post("/register", postRegister);
globalRouter.get("/login", getLogin);
globalRouter.post("/login", postLogin);

export default globalRouter;