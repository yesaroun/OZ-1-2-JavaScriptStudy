// 사용자로부터 임의의 정수를 임의의 갯수만큼 입력받아
// 입력받은 수 중에서 가장 큰 수를 출력하는 프로그램을 작성한다.
// 단, 배열과 배열 함수를 활용하여 구현할 수 있도록 한다.

// 실행 예)
// 입력할 데이터의 갯수 : 12
// 데이터 입력 : 74
// 데이터 입력 : 91
// 데이터 입력 : 40
// >> 가장 큰 수 -> 91

// 입력 데이터 개수
let count = parseInt(prompt("입력할 데이터의 개수 : "));

// 데이터 입력
const numbers = Array.from({ length: count }, () => Number(prompt("데이터 입력 : ")));
// numbers = [4, 1, 2];

// 최대값 찾기 
const max = numbers.reduce((acc, cur) => (acc > cur ? acc : cur), numbers[0]);

// 결과 출력
console.log(`>> 가장 큰 수 : ${max}`);
