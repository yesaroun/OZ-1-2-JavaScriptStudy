// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  const success = false;
  if (success) {
    resolve("성공적으로 완료됨");
  } else {
    reject("실패함");
  }
});

promise
  .then(result => {
    console.log("이행 상태:", result);
  })
  .catch(error => {
    console.error("거부 상태:", error);
  });