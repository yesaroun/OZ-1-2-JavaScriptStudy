// 배열 실습

// 사용자로부터 임의의 학생 수를 입력받고
// 그만큼의 점수를 입력받아
// 전체 학생 점수의 합, 평균, 편차를 구하여
// 결과를 출력하는 프로그램을 구현한다.
// 단, 배열을 활용하여 처리할 수 있도록 한다.

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
let count = parseInt(prompt("학생 수 입력 : "));

// 점수 배열
let scores = new Array(count);
// 이렇게도 배열 생성 가능
// 인자(count)로 받은 크기의 빈 배열 생성
// 만약 count가 3이라면
// scores는 [undefined, undefined, undefined]

// 총점
let sum = 0;

// 평균
let avg;

// 점수 입력
for (let i = 0; i < scores.length; i++) {
  scores[i] = Number(prompt(`${i + 1}번 학생의 점수 입력: `));
}

// 총점 계산
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

// 평균 계산
avg = sum / count;

// 결과 출력
console.log(`>> 합: ${sum}`);
console.log(`>> 평균: ${avg.toFixed(1)}`);
console.log(">> 편차");

// 편차 출력
for (let i = 0; i < count; i++) {
  console.log(`${scores[i]} : ${(avg - scores[i]).toFixed(1)}`);
}
