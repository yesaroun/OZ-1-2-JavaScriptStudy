// switch 문 실습

// 사용자로부터 이름, 국어점수, 영어 점수, 수학점수를 입력 받아
// 다음과 같은 형태로 출력하는 프로그램을 작성한다.
// 등급은 평균 점수를 기준으로 처리한다.

// 90점 ~ 100점 : A        80~89점 : B
// 70~79점 : C			      60~69점 : D
// 60점 미만 : F

// 실행 예)
// 이름 입력 : 김길동
// 국어 점수 : 90
// 영어 점수 : 80
// 수학 점수 : 70

// >> 당신의 이름은 김길동입니다.
// >> 국어 점수는 90,
// >> 영어 점수는 80,
// >> 수학 점수는 70,
// >> 총점은 240이고, 평균은 80입니다.
// >> 등급은 B 입니다.

// 내림을 구하는 메서드
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// 사용법은 직접 문서를 참고해보기

// 사용자로부터 입력 받는 변수 선언
const name = prompt("이름 입력: ");
const kor = Number(prompt("국어점수 입력: "));
const eng = Number(prompt("영어점수 입력: "));
const mat = Number(prompt("수학점수 입력: "));

// 총점 및 평균 계산
const tot = kor + eng + mat;
const avg = tot / 3;

// 학점 계산
let grade;
switch (Math.floor(avg / 10)) {
  case 10:
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
}

// 결과 출력
console.log(`당신의 이름은 ${name}입니다.`);
console.log(`당신의 총점은 ${tot}이고, 평균은 ${avg.toFixed(2)}입니다.`);
console.log(`당신의 등급은 ${grade}입니다.`);
