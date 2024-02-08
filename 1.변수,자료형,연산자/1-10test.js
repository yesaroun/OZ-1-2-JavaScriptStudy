// 문제
// 사용자로부터 임의의 정수를 두 번 입력받아
// 사칙연산 및 나머지 연산을 수행하여
// 그 결과를 출력하는 프로그램을 구현한다.

// 실행 예)
// 첫 번째 정수 입력 : 10
// 두 번째 정수 입력 : 2

// 결과
// 10 + 2 = 12
// 10 - 2 = 8
// 10 * 2 = 20
// 10 / 2 = 5
// 10 % 2 = 0

let num1 = Number(prompt("첫 번째 정수 입력 : "));
let num2 = Number(prompt("두 번째 정수 입력 : "));

let res1 = num1 + num2;
let res2 = num1 - num2;
let res3 = num1 * num2;
let res4 = num1 / num2;
let res5 = num1 % num2;

console.log(`${num1} + ${num2} = ${res1}`);
console.log(`${num1} - ${num2} = ${res2}`);
console.log(`${num1} * ${num2} = ${res3}`);
console.log(`${num1} / ${num1} = ${res4}`);
console.log(`${num1} % ${num2} = ${res5}`);
