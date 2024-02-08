// 사전에 부여된 반지름 정보를 통해
// 원의 넓이와 둘레를 구하는 프로그램을 구현한다.
// → 반지름 : 10

// 실행 예)
// 넓이 : ****
// 둘레 : ****

// 주요 변수 선언
let r = 10;           // 반지름
const PI = 3.141592;  // 원주율

let area, length;     // 원의 넓이, 원의 둘레

// 연산 및 처리
// 1-넓이 연산
// 원의 넓이 = 반지름 * 반지름 * 원주율
area = r * r * PI;

// 2-둘레 연산 
// 원의 둘레 = 반지름 * 2 * 원주율
length = r * 2 * PI;

// 결과 출력
// test01.md 참고
// console.log(`넓이: ${area}`);
// console.log(`둘레: ${length}`); 

console.log(`넓이: ${area.toFixed(2)}`);
console.log(`둘레: ${length.toFixed(2)}`); 
