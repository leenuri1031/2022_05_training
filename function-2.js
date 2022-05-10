// 고차함수(higher order function) : 제작자가 만드는 것
// 알고리즘 제작법

/* ---------------------------------------------------------------- */
// 1차 함수

function typeA() {
  console.log('this is a');
}
typeA();

function typeB() {
  console.log('this is b');
}
typeB();
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
// 고차 함수 패턴

function typeA() {
  console.log('this is a');
}

function typeB() {
  console.log('this is b');
  typeA();
}
typeB();

// typeB의 함수 알고리즘 -> 문자열을 콘솔에 기록한 후 typeA() 함수를 호출
/* ---------------------------------------------------------------- */

/* ---------------------------------------------------------------- */
// 고차 함수 패턴

function typeC(target) {
  target.addEventListener('click', function() {});
  target.addEventListener('scroll', function() {});
  target.addEventListener('wheel', function() {});
}

typeC(root);

/* 바인딩 */
/* ---------------------------------------------------------------- */
// 객체로 묶어서 관리 

const typeP = {
  objectA : function(string){
    console.log(string);
  },
  objectB : function(){

  },
}

// typeP.objectA('hello');
// console.log(console.table);



