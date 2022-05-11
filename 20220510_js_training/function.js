
// 선언 (declaration)
// 기명 선언방식 (이름이 있는 함수)
function typeA(){

}
// 전역 스코프 (global)

typeA();

/* 익명 함수(anonymous function) 
  함수 리터럴(literal) : 함수를 직접 새김 
  함수 표현식(function expression)
 */
const typeB = function(){

}
// 제작자는 알지만 외부사람은 모르는 방식 = 권장


/* arrow function (화살표 함수)
  함수 표현식과 같은 기능
  축약형(개발자들의 귀찮음에 의해)
  특정 작동 -> 최신문법
*/

const typeC = () => {}
// () 소괄호가 나오면 함수!
// 비교연산자랑 헷갈리지 않기! >= , <=와 같이 꺽쇠가 먼저 나오는 것이 비교연산자

const typeE = a => {} //매개변수가 하나일 경우 () 삭제해도 상관 없음 

const typeD = function() {}
// typeC === typeD 같은것


(function() {})
// 선언, 호출 관계 없이 즉시 실행하는 함수
// -> 즉시 실행함수

let test;

test.addEventListener('type', function() {});
/* 
함수의 매게변수 자리에 함수가 들어가 있는 것 '콜백함수' 
콜백함수는 익명이 기본형
매우 많이 사용하기 때문에 눈에 익혀야 함
*/

test.addEventListener('test', testFunction);
// function() <- 소괄호를 사용하지 않는 특성이 있음

function testFunction(){}
// 밖으로 빼낸 콜백함수
// 기명으로 함수를 만들어 줌



