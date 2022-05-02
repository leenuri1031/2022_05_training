// console.log(test);

// let one ; //ToDo : 변수 선언은 했고, 값은 무엇을 '가르키지는' 않은 상태 
// 1

// todo : 식별을 위해 값과 변수를 '대입'하는 과정을 통함 = 이퉐표시
// 값은 존재하는 상태
// 활용은 아직 안된 상태

// 변수를 왜 쓰는가? 
// 데이터 숫자 타입 1이라는 값을 쓸 방법이 없음  -> 변수를 사용하지 않으면

// let test = 1; 
// 변수 선언과 동시에 값을 가짐 = 초기화 
// RAM이라는  메모리에 일단 담긴다.

// const two = 1;
//  변수 선언과 동시에 값을 가리키게 만듦
// erro가 났다 === 해결만 하면 무결해짐
// console.log(two);

// console.log(1 == "1");
// 비교 연산자
//  == : 동등 연산자 - 옛날 방식 -> 숫자와 문자를 구분 하지 못함
//  => 완전 비권장

// console.log(1 === "1");
// === : 일치 연산자 - 데이터타입까지 모두 체크

// let a = 1;
// let b = '아진';

// let change = String(b);
// let change = Number(b);

// console.log(typeof change);

// console.log( a === b);
// console.log(typeof a === typeof b);

// let chea = null;
// null : 존재는 하지만 비어있는 값, 프로그래밍에만 있는 개념 "빈 공간"
// null 이 존재하면 -> 아직 값이 정해지지 않음

// console.log(typeof chea);

// let arr = ["해리", "론", "헤르미온느", "드레이코"];

// console.log(typeof arr);
// 문자열 "object"를 뱉어냄
// console.log(Array.isArray(arr));
// 배열을 나타내고 싶을 때에는Array.isArray()를 사용! 

// 배열의 본체는 객체이기 때문에 타입체크를 다르게 해 놓은 것이 있음 -> .isArray()
// is로 시작하는 메서드는 암묵적으로 불리언으로 리턴 

let text = "I am Ironman";

console.log(text.length);
console.log(text[7], text[8], text[9]);



