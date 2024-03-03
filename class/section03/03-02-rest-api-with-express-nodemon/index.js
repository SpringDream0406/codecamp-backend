// const express = require('express') // 옜날방식 => commonjs
import express from "express"; // 요즘방식 => module

const app = express();

app.get("/qqq", function (req, res) {
  res.send("Hello Workd ㅁㅇㄹㅁㄴㄹ");
});

app.listen(3000); // 포트번호
