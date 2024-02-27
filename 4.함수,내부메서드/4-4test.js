// 사용자로부터 임의의 정수를 임의의 갯수만큼 입력받아
// 입력받은 수 중에서 가장 작은 수를 출력하는 프로그램을 작성한다.
// 단, 배열과 배열 함수를 활용하여 구현할 수 있도록 한다.

// 실행 예)
// 입력할 데이터의 갯수 : 12
// 데이터 입력 : 74
// 데이터 입력 : 91
// 데이터 입력 : 40
// >> 가장 작은 수 -> 40

// 입력 데이터 개수 
const count = parseInt(prompt("입력할 데이터 개수: "));

// 데이터 입력
const numbers = Array.from({ length: count }, () => NUmber(prompt("데이터 입력 : ")));

// [5, 3, 9]

// 최솟값 찾기
// const min = numbers.reduce(function (acc, cur) { // acc : 5 cur : 5 acc : 5 cur : 3 acc: 3 cur : 9
//   if (acc < cur) {
//     return acc; // 3
//   } else {
//     return cur
//   }
// }, numbers[0])

const min = number.reduce((acc, cur) => (acc < cur) ? acc : cur, numbers[0]);

// 결과 출력
console.log(`>> 가장 작은 수 : ${min}`);
