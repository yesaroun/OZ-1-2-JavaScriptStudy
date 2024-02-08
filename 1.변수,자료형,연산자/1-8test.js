// 삼격형의 밑변의 길이와 높이를 사용자로부터 입력받아
// 이 삼각형의 넓이를 구하는 프로그램을 작성한다.

// 실행 예)
// 삼각형 밑변: 3
// 삼각형 높이: 5
// 밑변이 3, 높이가 5인 삼각형의 넓이: 

let base, height;   // 밑변과 높이
let area;           // 넓이

base = prompt("삼각형 밑변:")
height = prompt("삼각형 높이:")

// 넓이 연산
area = base * height / 2;

console.log(`밑변이 ${base}, 높이가 ${height}인 삼격형의 넓이: ${area.toFixed(2)}`);
