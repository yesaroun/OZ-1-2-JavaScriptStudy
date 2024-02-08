// 문제
// 직사각형의 넓이와 둘레를 구하는 프로그램을 작성한다
// → 가로 : 10, 세로 : 20

// 실행 예)
// 넓이 : ****
// 둘레 : ****

let width = 10;
let height = 20;
let area, length;

area = width * height;
length = (width + height) * 2;

console.log(`넓이: ${area}`);
console.log(`둘레: ${length}`);
