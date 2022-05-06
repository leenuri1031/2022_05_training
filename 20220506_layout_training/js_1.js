// console.log('test');

let value = 0;
// 변수 선언과 동시에 값 대입 = 초기화  (= initianlize, init)
// value = 100;
// 대입 연산자(=)를 이욯해 값을 새로 할당(assignment)

// console.log(value);

// setInterval(function() {}, interval);
// 첫번째 파라미터(매개 변수)가 함수
// callback function : 매개변수 자리에 실핼 할 함수가 자리잡은 것(콜백함수)
// callback function hell 

let interval = 100;
const timer = setInterval(function() {
  // 함수 티러털(=함수 표현식) : 함수를 변수에 담는 패턴  -> 식별하기 위한 변수 대입
  // 변수 timer는 함수 setInterval을 가리킨다.
  console.log(value);
  value++;

  // value = value + 2; === value += 2;

  if(value === 100){
    clearInterval(timer);
  }

}, interval);








