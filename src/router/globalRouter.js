import { Router } from "express";
import { getLogin, getRegister, postLogin, postRegister } from "../controller/userController";

const globalRouter = Router();

/**
 * @swagger
 * tags:
 *   name: globalRouter
 *   description: 글로벌 라우터
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: 메인 페이지
 *     description: 메인 페이지입니다.
 *     tags: [globalRouter]
 *     responses:
 *       200:
 *         description: 메인 페이지 접속 완료
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: 복습 웹사이트
 */
globalRouter.get("/", (req, res) => {
    return res.status(200).send("복습 웹사이트");
});

/**
 * @swagger
 * /register:
 *   get:
 *     summary: 회원가입 페이지 조회
 *     description: 회원가입 페이지 조회
 *     tags: [globalRouter]
 *     responses:
 *       200:
 *         description: 회원가입 페이지 접속 완료
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: 회원가입 등록 페이지
*/

globalRouter.get("/register", getRegister);
/**
 * @swagger
 * /register:
 *   post:
 *     summary: 회원가입 요청
 *     description: 회원가입 요청
 *     tags: [globalRouter]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: 이메일
 *                 example: "test@gmail.com"
 *               username:
 *                 type: string
 *                 description: 닉네임
 *                 example: "text"
 *               password:
 *                 type: string
 *                 description: 비밀번호
 *                 example: "1234"
 *     responses:
 *       200:
 *         description: 회원가입 완료
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: 회원가입 완료
 *       400:
 *         description: 잘못된 요청
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *             examples:
 *               VALUE_NOT_QUALIFY:
 *                 description: 필요한 인자가 없음
 *                 value:
 *                   error: "정상적인 요청이 아닙니다."
 *               EMAIL_ALREADY_EXISTS:
 *                 description: 이미 가입된 이메일로 가입 시도
 *                 value:
 *                   error: Email already exist
 */
globalRouter.post("/register", postRegister);
/**
 * @swagger
 * /login:
 *   get:
 *     summary: 로그인 페이지 조회
 *     description: 로그인 페이지 조회
 *     tags: [globalRouter]
 *     responses:
 *       200:
 *         description: 로그인 페이지 접속 완료
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: 로그인 페이지
*/

globalRouter.get("/login", getLogin);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: 로그인 요청
 *     description: 로그인 요청
 *     tags: [globalRouter]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: 이메일
 *                 example: "test@gmail.com"
 *               password:
 *                 type: string
 *                 description: 비밀번호
 *                 example: "1234"
 */
globalRouter.post("/login", postLogin);

export default globalRouter;