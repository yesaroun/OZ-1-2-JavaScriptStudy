try {
  // 숫자를 입력받는 함수
  function inputNumber() {
    const number = parseInt(prompt("숫자를 입력하세요: "));
    if (isNaN(number)) {
      throw new Error("숫자가 아닙니다!");
    }
    return number;
  }

  // 함수 실행 및 에러 처리
  const number = inputNumber();
  console.log(`입력한 숫자는 ${number}입니다.`);
} catch (err) {
  // 에러 메시지 출력
  console.error(err.message);
} finally {
  // 숫자 입력 여부에 관계없이 항상 실행
  console.log("숫자 입력을 종료합니다.");
}