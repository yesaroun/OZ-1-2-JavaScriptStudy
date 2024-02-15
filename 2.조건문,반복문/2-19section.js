// do while 문 실습

// do while 문은 사용 예시는
// 최소 한번은 사용자의 입력값을 받아오는 처리를 수행해야
// 반복을 추가로 수행할지 말지 여부를 결정할 수 있는 상황이다.

let num;

do {
  num = parseInt(prompt("100 이상의 정수를 입력하세요 : "));
} while (num < 100);
console.log(num, " -> 100 이상의 정수 입력 완료!!");
