// 2차원 배열 선언 및 초기화 

// 방법 1
const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log("arr1: ", arr1);

// 방법 2
const arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = new Array(3);
}

arr2[0][0] = 1;
arr2[0][1] = 2;
arr2[0][2] = 3;
arr2[1][0] = 4;
arr2[1][1] = 5;
arr2[1][2] = 6;
arr2[2][0] = 7;
arr2[2][1] = 8;
arr2[2][2] = 9;

console.log("arr2: ", arr2);

// 방법 3
const arr3 = new Array(3);
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = new Array(3);
}

let n = 1; // 2차원 배열에 대입할 값
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    arr3[i][j] = n;
    n++;
  }
}

console.log("arr3: ", arr3);

// 2차원 배열 요소 전체 출력
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    console.log(`arr3[${i}][${j}] = ${arr3[i][j]}`);
  }
}

// 배열의 모양대로 출력
for (let i = 0; i < arr3.length; i++) { // 행의 개수
  let line = ""; // 한 행
  for (let j = 0; j < arr3[i].length; j++) { // 열의 개수
    line += `${arr3[i][j]} `;
  }
  console.log(line);
}
