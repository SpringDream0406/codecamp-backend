// const express = require('express') // 옜날방식 => commonjs
import express from "express"; // 요즘방식 => module

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가진돈 검증하는 코드 (대략 10줄 정도 코딩)
  // ...
  // ...
  // ...
  // ...

  // 2. 판매여부 검증하는 코드 (대략 10줄 정도 코딩)
  // ...
  // ...
  // ...
  // ...

  // 3. 상품 구매하는 코드
  // if(돈있음 && !판매완료){
  //   res.send("상품 구매 완료!!")
  // }
});

// 상품 환불하기 API
app.pose("/products/refund", (req,res)=>{
  // 1. 판매여부 검증하는 코드 (대략 10줄 정도 코딩)
  // ...
  // ...
  // ...
  // ...

  // 2. 상품 환불하는 코드
  if(판매완료){
    res.send("상품 환불 완료!!")
  }
})

app.listen(3000); // 포트번호
