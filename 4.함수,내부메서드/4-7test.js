// 사용자로부터 임의의 학생 수를 입력받고
// 그만큼의 점수를 입력받아
// 전체 학생 점수의 합, 평균, 편차를 구하여
// 결과를 출력하는 프로그램을 구현한다.
// 단, 배열과 배열 함수를 활용하여 처리할 수 있도록 한다.

// 실행 예)
// 학생 수 입력 : 5
// 1번 학생의 점수 입력 : 90
// 2번 학생의 점수 입력 : 82
// 3번 학생의 점수 입력 : 64
// 4번 학생의 점수 입력 : 36
// 5번 학생의 점수 입력 : 98

// >> 합 : 370
// >> 평균 : 74.0
// >> 편차
// 90 : -16.0
// 82 : -8.0
// 64 : 10.0
// 36 : 38.0
// 98 : -24.0

// 학생 수 입력 
const count = parseInt(prompt("학생 수 입력 : "));

// 점수 배열 생성 및 초기화 
let emptyArr = Array(count).fill(null);

let i = 0;
const scores = emptyArr.map(() => {
  i += 1;
  return Number(prompt(`${i}번 학생의 점수 입력 :`));
});

// scores : [43, 90, 100]

// 총점 계산
const sum = scores.reduce((acc, score) => {
  sum = acc + score;
  // acc: 0 43  ~~
  // score: 43 90 100
  return sum; // sum: 43 ~~ **
}, 0);


// 평균 계산 
const avg = sum / count;

// 결과 출력
console.log(`>> 합: ${sum}`);
console.log(`>> 평균: ${avg.toFixed(1)}`);
console.log(">> 편차");

// 편차 출력 
scores.forEach((score) => {
  console.log(`${score} : ${(avg - score).toFixed(1)}`);
});
