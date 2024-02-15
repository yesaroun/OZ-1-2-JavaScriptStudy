// switch 문 실습

// 사용자로부터 임의의 두 수와 연산자를 입력 받아
// 해당 연산자의 처리 결과를 출력하는 프로그램을 구현한다.
// 단, switch 문을 활용하여 처리한다.

// 실행 예)
// 첫 번째 수 입력 : 3
// 두 번째 수 입력 : 17
// 연산자 입력[+ - * /] : -

// >> 3 - 17 = 14

// 변수 선언
let a, b, result, op;

// 사용자 입력 받기
a = Number(prompt("첫 번째 수 입력: "));
b = Number(prompt("두 번째 수 입력: "));
op = prompt("연산자 입력[+ - * /]: ");

// switch 문 사용하여 계산
switch (op) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    result = a / b;
    break;
  default:
    console.log("잘못된 연산자입니다.");
}

// 결과 출력
console.log();
console.log(`>> ${a} ${op} ${b} = ${result}`);
