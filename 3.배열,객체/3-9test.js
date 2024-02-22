// 배열 실습

// 배열의 배열(다차원 배열)을 활용해
// 다음과 같은 배열(5x5)을 구성하고
// 그 결과를 출력하는 프로그램을 구현한다.

// 실행 예)
/*
  1  2  3  4  5
  6  7  8  9  10
  11 12 13 14 15
  16 17 18 19 20
  21 22 23 24 25
*/

// 2차원 배열 선언 및 초기화
const array = new Array(5);
for (let i = 0; i < array.length; i++) {
  array[i] = new Array(5);
}

// 변수 선언 및 초기화
let a = 1;

// 배열의 배열을 반복문의 중첩 구문을 활용해 구조화
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    array[i][j] = a;
    a++;
  }
}

// 전체 요소 출력 
for (let i = 0; i < array.length; i++) {
  let line = "";
  for (let j = 0; j < array.length; j++) {
    line += `${array[i][j]} `;
  }
  console.log(line);
}