// for 문 실습

// 실행 예)
/*
*********
 *******
  *****
   ***
    *
*/

for (let i = 1; i <= 5; i++) {
  let space = "";
  for (let j = 1; j < i; j++) {
    space += " ";
  }

  let stars = "";
  for (let k = 2 * i - 1; k <= 9; k++) {
    stars += "*";
  }

  console.log(space + stars);
}