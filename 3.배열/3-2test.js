// 배열 실습

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

let a = [4, 7, 9, 1, 3, 2, 5, 6, 8];

console.log("배열 요소 전체 출력");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

console.log("배열 요소 전체 출력2");
for (let num of a) {
  console.log(num);
}

console.log("짝수 선택적 출력");
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    console.log(a[i]);
  }
}

console.log("3의 배수 선택적 출력");
for (let i = 0; i < a.length; i++) {
  if (a[i] % 3 === 0) {
    console.log(a[i]);
  }
}
