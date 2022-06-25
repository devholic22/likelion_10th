import express from "express";
import { sequelize } from "../models";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import verifyToken from "../middlewares";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import postRouter from "./router/postRouter";
import swaggerOptions from "./swagger";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;
const specs = swaggerJSDoc(swaggerOptions);

config();

sequelize
  .sync({ force: false }) // false로 해야 데이터 손실 방지
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));

app.listen(port, () => {
  console.log(__dirname);
  console.log(`http://localhost:${port}`);
});