import express from "express";
import { sequelize } from "../models";

const app = express();
const port = 3000;

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});