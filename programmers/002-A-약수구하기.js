// 링크 - https://school.programmers.co.kr/learn/courses/30/lessons/120897

// 문제 설명
/*
정수 n이 매개변수로 주어질 때,
n의 약수를 오름차순으로 담은 배열을 return하도록
solution 함수를 완성해주세요.
 */

// 입출력 예
/*
n	  result
24	[1, 2, 3, 4, 6, 8, 12, 24]
29	[1, 29]
 */

// 입출력 예 설명
/*
입출력 예 #1
24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.

입출력 예 #2
29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.
 */

function solution(n) {  // 24
  var answer = [];  // 1, 2, 

  for (let i = 1; i <= n; i++) {  // i 1 2 3 4 5 6 ... 24
    if (n % i === 0) {    // 24 1 2
      answer.push(i);
    }
  }

  return answer;
}

function solution2(n) {
  var answer = [];
  var numbers = Array.from({ length: n }, (num, i) => {
    // console.log("num: ", num);    // undefined: 왜냐하면 유사 배열 객체가 undefined로 초기화 되니까
    // console.log("i: ", i);        // index 번호
    return i + 1;
  })
  // console.log(numbers);
  answer = numbers.filter((num) => {
    if (n % num === 0) {
      return true;
    } else {
      return false;
    }
  })
  // console.log(answer);
  return answer
}

function solution3(n) {
  var answer = [];
  answer = Array.from({ length: n }, (_, i) => i + 1).filter((num) => n % num === 0);
  return answer;
}


const result = solution3(24);
console.log(result);

// Array.from() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// filter : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
