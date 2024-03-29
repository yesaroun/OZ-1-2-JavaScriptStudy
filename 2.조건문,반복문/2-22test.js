// for 문 실습

// 다중 for 문(반복문의 중첩)을 활용한 구구단 출력 실습

// 실행 예)
/*
[2단]
2 * 1 = 2
 :

[3단]
 :
9 * 9 = 81
*/

for (let a = 2; a <= 9; a++) { // 단 처리
  console.log(`[${a}단]`);

  for (let b = 1; b <= 9; b++) { // 곱해지는 수 처리
    console.log(`${a} * ${b} = ${a * b}`);
  }
}
