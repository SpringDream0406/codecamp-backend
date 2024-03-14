// const express = require('express') // 옜날방식 => commonjs
import express from "express"; // 요즘방식 => module

import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
// import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"; // export 가져오기
// import express from "express"; // export default 가져오기
// import asdfasdfa from "express"; // export default 이름바꿔서 가져오기
// import qqqqqq, {checkPhone as zzzz, getToken} from "./phone.js"; // export default와 export를 함께 쓰기

// import * as ttt from "./phone.js" // export 한방에 다 가져오기
// ttt.checkPhone // export 한방에 다 가져와서 쓰기
// ttt.getToken // export 한벙에 다 가져와서 쓰기

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";

const app = express();
app.use(express.json()); // 옛날에는 bodyParser 사용
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.get("/boards", async function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회
  const result = await Board.find()
  

  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
  res.send(result);
});

app.post("/boards", async function (req, res) {
  // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req);
  console.log("=======================");
  console.log(req.body);

  // 2. DB에 접속 후, 데이터를 저장
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  })
  await board.save()

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", function (req, res) {
  const { myphone } = req.body;
  if (checkPhone(myphone)) return;
  const mytoken = getToken();
  sendTokenToSMS(myphone, mytoken);

  res.send("인증완료!!!");
});

app.post("/users", (req, res) => {
  const { name, age, school, email } = req.body;
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  if (checkEmail(email)) {
    return;
  }

  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, age, school });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail({ email, myTemplate });

  res.send("가입완료!!!");
});

// 몽구스 실제 동작 확인하는 코드
mongoose.set("debug", true)

mongoose
  .connect("mongodb://my-database:27017/mydocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(3000); // 포트번호
