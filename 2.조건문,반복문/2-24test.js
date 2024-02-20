// for 문 실습

// 실행 예)
/*
    *
   ***
  *****
 *******
*********
*/

for (let i = 1; i <= 5; i++) {
  let space = "";
  for (let j = i; j <= 4; j++) {
    // 공백은 하나씩 줄여가고...
    space += " ";
  }

  let stars = "";
  for (let k = 1; k <= i * 2 - 1; k++) {
    // 1 2 3 4 5 이 i를
    // 1 3 5 7 9 이렇게 만들어야 한다.(k)
    // 그래서 i * 2 - 1
    stars += "*";
  }

  console.log(space + stars);
}