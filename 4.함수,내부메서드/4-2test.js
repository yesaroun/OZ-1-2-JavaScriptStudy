// 임의의 정수들이 들어있는 배열에서
// 짝수인 요소만 골라서 출력하고, 3의 배수인 요소만 골라서 출력하는
// 프로그램을 구현한다.

// 배열을 구성하는 임의의 정수 = 4 7 9 1 3 2 5 6 8

// 실행 예)
// 배열 요소 전체 출력
// 4 7 9 1 3 2 5 6 8
// 짝수 선택적 출력
// 4 2 6 8
// 3의 배수 선택적 출력
// 9 3 6

const a = [4, 7, 9, 1, 3, 2, 5, 6, 8];

console.log("배열 요소 전체 출력");
console.log(a.join(" ")); // 4 7 9 1 3 2 5 6 8

console.log("짝수 선택자 출력");
const evenNumbers = a.filter(number => number % 2 === 0); // number 4 -> true 7 -> false 9 -> false ....
console.log(evenNumbers.join(" ")); //  4 2 6 8

console.log("3의 배수 선택적 출력");
const multipleOfThree = a.filter(number => number % 3 === 0);
console.log(multipleOfThree.join(" ")); // 9 3 6
