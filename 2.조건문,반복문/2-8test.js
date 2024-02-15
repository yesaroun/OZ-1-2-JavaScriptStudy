// switch 문 실습

// 사용자로부터 1부터 3까지의 정수 중 하나를 입력 받아
// 입력받은 정수만큼의 별(*)이 출력되는 프로그램을 작성한다.
// 단, switch 문의 일반 모델이 아닌
// switch 문의 기본 모델을 사용하되,
// 'break' 를 딱 한 번만 사용할 수 있도록 구성한다.

// 일반 모델은 우리가 기존에 아는 일반적인 switch문
// 기본 모델은 여러 case값이 동일한 코드 블록을 실행할 때 사용
// 예

// 실행 예)
// 임의의 정수 입력(1~3) : 3
// *
// *
// *

// 임의의 정수 입력(1~3) : 7
// 입력 오류~!!!

// 사용자 입력 받기
const num = parseInt(prompt("임의의 정수 입력(1~3): "));
// parseInt는 정수만!
// Number는 모든 수
// 그래서 parseInt는 소수점 이하는 무시

// switch 문 기본 모델 사용
switch (num) {
  case 3:
    console.log("*");
  case 2:
    console.log("*");
  case 1:
    console.log("*");
    break;
  default:
    console.log("입력 오류~!!!");
}

