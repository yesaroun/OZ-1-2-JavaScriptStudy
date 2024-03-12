// 링크 - https://school.programmers.co.kr/learn/courses/30/lessons/120912
// 문제 설명
/*
머쓱이는 행운의 숫자 7을 가장 좋아합니다.
정수 배열 array가 매개변수로 주어질 때,
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
 */

// 제한 사항
/*
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000
 */

// 입출력 예
/*
array	        result
[7, 77, 17]	  4
[10, 29]	    0
 */

// 입출력 예 설명
/*
입출력 예 #1
[7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.

입출력 예 #2
[10, 29]에는 7이 없으므로 0을 return 합니다.
 */

function solution(array) {
  var answer = 0;
  for (const num of array) {
    // console.log(num);
    var numStr = num.toString();
    // console.log("numStr: ", typeof numStr);
    for (const str of numStr) {
      // console.log("str: ", str);
      if (Number(str) === 7) {
        // console.log(true);
        answer += 1;
      }
    }
  }
  return answer;
}

function solution2(array) {
  var answer = 0;
  array.reduce(
    (count, num) => { // count: 이전에 반환한 값, num : 현재 array의 값
      var numStr = num.toString();
      for (const str of numStr) {
        if (Number(str) === 7) {
          answer += 1;
        }
      }
    },
    answer  // 초깃값
  )
  return answer;
}

// Array.prototype.reduce() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const result = solution2([7, 77, 17]);
console.log(result);

// 만약 solution과 solution2가 다른 로직을 구현한 함수이고,
// 이 둘에 공통된 부분을 함수로 묶어서 구현한다면 다음과 같이할 수 있다.

function processNumStr(answer, num) {
  var numStr = num.toString();
  for (const str of numStr) {
    if (Number(str) === 7) {
      answer += 1;
    }
  }
  return answer
}

function sol(array) {
  var answer = 0;
  for (const num of array) {
    answer = processNumStr(answer, num);
  }
  return answer;
}

function sol2(array) {
  var answer = 0;
  array.reduce(
    (count, num) => {
      answer = processNumStr(answer, num);
    },
    answer
  )
  return answer;
}

const result2 = sol2([7, 77, 17]);
console.log(result2);
