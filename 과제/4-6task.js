// 사용자로부터 친구수를 입력받고
// 입력받은 친구 수 만큼의 이름, 전화번호, 생일을 입력받고
// 이름 배열과 전화번호 배열, 생일 배열로 구성하여
// 결과를 출력할 수 있는 프로그램을 구현한다.

// 실행 예)
// 입력 처리할 친구의 수 입력(명, 1~10) : 27
// 입력 처리할 친구의 수 입력(명, 1~10) : -5
// 입력 처리할 친구의 수 입력(명, 1~10) : 3
// 이름 전화번호 생일 입력[1](공백 구분) : 홍길동 010-1111-1111 12/03
// 이름 전화번호 생일 입력[2](공백 구분) : 김철수 010-2222-2222 03/02
// 이름 전화번호 생일 입력[3](공백 구분) : 박놀부 010-3333-3333 07/01

// ----------------------
// 전체 친구 수 : 3명
// ----------------------
// 이름      전화번호       생일
// 홍길동    010-1111-1111  12/03
// 김철수    010-2222-2222  03/02
// 박놀부    010-3333-3333  07/01

// 사용자 입력 처리
let friendCount;
do {
  friendCount = parseInt(prompt("입력 처리할 친구의 수 입력(명, 1~10) : "));
} while (friendCount < 1 ||friendCount > 10);

// 이름, 전화번호, 생일 입력
const inputs = Array(friendCount).fill(null).map(() => prompt(`이름 전화번호 생일 입력(공백 구분) : `));

// 데이터 분리
const names = inputs.map(input => input.split(" ")[0]);
const tels = inputs.map(input => input.split(" ")[1]);
const birthDays = inputs.map(input => input.split(" ")[2]);

// 결과 출력
console.log("----------------------");
console.log(`전체 친구 수 : ${friendCount}명`);
console.log("----------------------");
console.log("이름    전화번호    생일");

const results = names.map((name, i) => `${name} ${tels[i]} ${birthDays[i]}`);

console.log(results.join("\n")); // 배열의 각 요소를 줄 바꿈 문자로 연결하여 출력
console.log("----------------------");
