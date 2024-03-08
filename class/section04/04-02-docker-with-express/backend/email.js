import { getToday } from "./uitls.js";
import nodemailer from "nodemailer";
import "dotenv/config";

export function checkEmail(email) {
  if (!email || !email.includes("@")) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const mytemplate = `
            <html>
                <body>
                  <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px;">
                      <h1>${name}님 가입을 환영합니다!!</h1>
                      <hr/>
                      <div style="color: blue;">이름: ${name}</div>
                      <div>나이: ${age}</div>
                      <div>학교: ${school}</div>
                      <div>가입일: ${getToday()}</div>
                    </div>
                  </div>
                </body>
            </html>
        `;
  return mytemplate;
}

export async function sendTemplateToEmail({ email, myTemplate }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const res = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "[코드캠프] 가입을 축하합니다!!",
    html: myTemplate,
  });

  // console.log(`${email}이메일로 가입환영 템플릿 ${myTemplate}를 전송합니다.`);
  console.log(res);
}
