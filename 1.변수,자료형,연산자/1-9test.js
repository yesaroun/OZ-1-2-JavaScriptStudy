// 사용자로부터 이름, 국어점수, 영어점수, 수학점수를 입력 받아
// 이름과 총점을 출력하는 프로그램을 구현한다.

// 실행 예)
// 이름을 입력하세요 : 김길동
// 국어 점수 입력 : 90
// 영어 점수 입력 : 80
// 수학 점수 입력 : 70

// 이름 : 김길동
// 총점 : 240

let userName = prompt("이름을 입력하세요 : ");

let koreanScore = prompt("국어 점수 입력 : ");

let englishScore = prompt("영어 점수 입력 : ");

let mathScore = prompt("수학 점수 입력 : ");

let totalScore = koreanScore + englishScore + mathScore;

console.log(`이름 : ${userName}`);
console.log(`총점 : ${totalScore}`);
// 이러면 총점이 908070 출력된다.
// 총점의 모든 값이 연결된 문자열이 출력된다.
// 왜냐하면 prompt가 반환하는 값은 문자열이다.
// 그래서 "90" + "80" + "70" 의 연산에서 
// + 연산자는 문자열 결합 연산자인 것이다.(1-3section.md 참고)

// 따라서 아래처럼 형(type) 변환을 해줘야 한다.
let totalScore2 = Number(koreanScore) + Number(englishScore) + Number(mathScore);
console.log(`총점2 : ${totalScore2}`);

// 또는 
// let koreanScore = Number(prompt("국어 점수 입력 : "));
// 이렇게도 가능

// 그렇다면 test03.js에서는 왜 형변환을 하지 않아도 문제가 없었을까?
// 그 이유는 javascript의 암시적 형 변환 때문(1-3section.md 참고)

// 이러한 문제들 때문에 타입스크립트 사용

// 근데 prompt() 메소드가 문자열을 반환(return)하는 것은 어떻게 알 수 있나요?
// 마우스를 올리면 함수 인자, 반환(return)값이 나옴, mdn문서 링크도 있음

// 참고로 log() 메서드에 마우스를 올리면
// return 값이 void인데
// void는 return(반환)하는 값이 없음(undefined)을 알려준다.
// 이 return에 대해서는 함수를 학습한 이후에 다시 설명.
