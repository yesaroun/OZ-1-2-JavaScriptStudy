// if ~ else 문 실습

// 사용자로부터 임의의 수와 연산자를 입력받아
// 해당 연산자의 연산 처리 결과를 출력하는 프로그램을 구현한다.
// 단, if 조건문을 활용하여 처리한다.

// 실행 예)
// 첫 번째 수 입력: 10
// 두 번째 수 입력: 3
// 연산자 입력[+ - * /] : +

// >> 10 + 3 = 13

// 변수 선언
let a, b; // 첫 번째, 두 번째 수
let op; // 연산자

// 첫 번째 수 입력
a = Number(prompt("첫 번째 수 입력: "));

// 두 번째 수 입력
b = Number(prompt("두 번째 수 입력: "));

// 연산자 입력
op = prompt("연산자 입력[+ - * /]: ");

// 연산 수행 및 결과 출력
/*
if (op === "+") {
  console.log(`>> ${a} + ${b} = ${a + b}`);
} else if (op === "-") {
  console.log(`>> ${a} - ${b} = ${a - b}`);
} else if (op === "*") {
  console.log(`>> ${a} * ${b} = ${a * b}`);
} else if (op === "/") {
  console.log(`>> ${a} / ${b} = ${a / b}`);
} else {
  console.log("입력에 오류가 있습니다.");
}
*/

// {} 괄호가 한 줄인 경우 생략 가능(if, for, while, do while)
if (op === "+")
  console.log(`>> ${a} + ${b} = ${a + b}`);
else if (op === "-")
  console.log(`>> ${a} - ${b} = ${a - b}`);
else if (op === "*")
  console.log(`>> ${a} * ${b} = ${a * b}`);
else if (op === "/")
  console.log(`>> ${a} / ${b} = ${a / b}`);
else
  console.log("입력에 오류가 있습니다.");




// 일반적으로는 생략하지는 않으나, 정말 짧은 경우 생략하고 한 줄로 작성하기도 한다.
if (true) console.log("hi");

// 사실 실무에서는 else if, else가 아닌 if만을 사용하기도 한다.
if (op === "+") {
  console.log(`>> ${a} + ${b} = ${a + b}`);
}
if (op === "-") {
  console.log(`>> ${a} - ${b} = ${a - b}`);
}
if (op === "*") {
  console.log(`>> ${a} * ${b} = ${a * b}`);
}
if (op === "/") {
  console.log(`>> ${a} / ${b} = ${a / b}`);
}
if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
  console.log("입력에 오류가 있습니다.");
}

/*
근데 이 경우는 적합하지는 않다.
가독성도 떨어지고
마지막 if 문은 너무 많은 조건 검사가 들어가 성능면에서도 좋지 않을 것이다.
사실 위 경우는 switch 문이 적합할 것이고,
이건 뒤에 실습에서 진행해보겠다.

간결한 조건문인 경우
if 만 사용하기도 한다.
if (num >= 1) {}
if (num < 1) {}
*/

// 참고
/*
switch (op) {
  case "+":
    console.log(`>> ${a} + ${b} = ${a + b}`);
    break;
  case "-":
    console.log(`>> ${a} - ${b} = ${a - b}`);
    break;
  case "*":
    console.log(`>> ${a} * ${b} = ${a * b}`);
}
*/

// chrome dev tools
// https://developer.chrome.com/docs/devtools/javascript?hl=ko