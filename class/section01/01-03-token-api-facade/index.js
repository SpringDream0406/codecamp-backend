function checkPhone(myphone) {
  if (myphone.length < 10 || myphone.length > 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return true;
  }
}

function getToken() {
  let result = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
  console.log(result);
  return result;
}

function sendTokenToSMS(myphone, result) {
  console.log(myphone + "번호로 인증번호" + result + "를 전송합니다.");
}

function createTokenOfPhone(myphone) {
  if (checkPhone(myphone)) return;
  const mytoken = getToken();
  sendTokenToSMS(myphone, mytoken);
}

createTokenOfPhone("01012345678"); // 01012345678: 인자(argument)
