// while 문 실습

// 실행 예)
// 1 부터 100까지 정수의 합 : 5050
// 1 부터 100까지 짝수의 합 : 2550
// 1 부터 100까지 홀수의 합 : 2500

let n = 1; // 1 부터 100까지 1씩 증가할 변수
let sum = 0; // 모든 수의 누적합을 담아낼 변수
let evenSum = 0; // 짝수들의 누적합을 담아낼 변수
let oddSum = 0; // 홀수들의 누적합을 담아낼 변수

while (n <= 100) {
  sum += n;
  if (n % 2 === 0) {
    evenSum += n;
  } else {
    oddSum += n;
  }
  n++;
}

console.log("모든 수의 합 : ", sum);
console.log("짝수의 합 : ", evenSum);
console.log("홀수의 합 : ", oddSum);
