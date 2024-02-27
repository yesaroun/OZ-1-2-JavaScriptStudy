// 사용자로부터 인원수를 입력받고
// 입력받은 인원 수 만큼의 학생 이름과 전화번호를 입력받고
// 이를 배열과 전화번호 배열로 구성하여
// 결과를 출력할 수 있는 프로그램을 구현한다.

// 단, 학생 수를 입력받을 때는 do while 구문을 사용한다.

// 실행 예)
// 입력 처리할 학생의 수 입력(명, 1~10) : 27
// 입력 처리할 학생의 수 입력(명, 1~10) : -5
// 입력 처리할 학생의 수 입력(명, 1~10) : 3
// 이름 전화번호 입력[1](공백 구분) : 홍길동 010-1111-1111
// 이름 전화번호 입력[2](공백 구분) : 김철수 010-2222-2222
// 이름 전화번호 입력[3](공백 구분) : 박놀부 010-3333-3333

// ----------------------
// 전체 학생 수 : 3명
// ----------------------
// 이름      전화번호
// 홍길동    010-1111-1111
// 김철수    010-2222-2222
// 박놀부    010-3333-333

// 사용자 입력 처리 
let memberCount;
do {
  memberCount = parseInt(prompt("입력 처리할 학생의 수 입력(명, 1~10)"));
} while (memberCount < 1 || memberCount > 10);

// 이름과 전화번호 입력
const inputs = Array(memberCount).fill(null).map(() => prompt("이름 전화번호 입력(공백 구분) : "));
// memberCount 3
// let arr = new Array(memberCount); // [undefined, undefined, undefined]
// arr.fill(null); // [null, null, null]
// const inputs = inputs.map(() => {
//   let info = prompt("이름 전화번호 입력(공백 구분) : ");
//   return info; // [ "홍길동 010~", "김길동 011~", "김개똥 017~"]
// });

// 데이터 분리
const names = inputs.map(input => input.split(" ")[0]); // ["홍길동", "김길동", "김개똥"]
const tels = inputs.map(input => input.split(" ")[1]);

// 결과 출력
console.log("----------------------");
console.log(`전체 학생 수 : ${memberCount}명`);
console.log("----------------------");
console.log("이름    전화번호")

const results = names.map((name, i) => `${i} ${name} ${tels[i]}`);

console.log(results.join("\n")); // 배열의 각 요소를 줄 바꿈 문자로 연결하여 출력
console.log("----------------------");