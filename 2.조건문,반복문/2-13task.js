// while 문 실습

// 1부터 100까지 정수의 합을 구하되
// 10의 배수가 될 때마다... 결과를 출력하는 프로그램을 구현한다.

// 실행 예)
// 1 ~ 10까지의 합 :
// 1 ~ 20까지의 합 :
//    :
// 1 ~ 100까지의 합 :

let a = 1
let total = 0;

while (a <= 100) {
  total += a;

  if (a % 10 === 0) {
    console.log(`1 ~ ${a} 까지의 합 : ${total}`);
  }

  a++;
}
