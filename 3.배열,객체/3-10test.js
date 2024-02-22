// 배열 실습

// 배열의 배열(다차원 배열)을 활용하여
// 다음과 같은 데이터를 요소로 취하는 배열을 구성하고
// 그 결과를 출력하는 프로그램을 구현한다.

// 실행 예)
/*
  1  2  3  4  5
  2  3  4  5  6
  3  4  5  6  7
  4  5  6  7  8
  5  6  7  8  9
*/

// 2차원 배열 선언 및 초기화
const array = new Array(5);
for (let i = 0; i < array.length; i++) {
  array[i] = new Array(5);
}

let n; // 행 별 시작할 수
for (let i = 0; i < array.length; i++) {
  n = i + 1; // 행별 시작할 수
  for (let j = 0; j < array[i].length; j++) {
    array[i][j] = n;
    n++;
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
