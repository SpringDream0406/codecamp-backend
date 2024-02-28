console.log("안녕하세요!!");

const getToekn = () => {
  let result = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
  console.log(result);
};

getToekn();
