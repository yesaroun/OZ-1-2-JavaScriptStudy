let num1 = Number(prompt("첫 번째 수 입력: "));
let num2 = Number(prompt("두 번째 수 입력: "));
let num3 = Number(prompt("세 번째 수 입력: "));

// 첫 번째 수와 두 번째 수 비교 및 자리 바꿈
if (num1 > num2) {
  [num1, num2] = [num2, num1];
} else if (num2 > num3) { // 이 경우는 num1은 num2보다 작거나 같음
  [num2, num3] = [num3, num2];
  // num2와 num3의 자리를 바꾼 후, num1과 num2 다시 비교
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }
}

// 여기에서 num1 <= num2 라는게 확실해진다!
// 그래서 num3과의 크기만 추가로 비교하면 된다.
if (num1 > num3) {
  [num1, num3] = [num3, num1];
} else if (num2 > num3) { // 이 경우는 num1은 num3보다 작거나 같음
  [num2, num3] = [num3, num2];
}

console.log(`>> 정렬 결과: ${num1} ${num2} ${num3}`);
