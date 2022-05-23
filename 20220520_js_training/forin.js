const pokemon = {
  a : '피카츄',
  b : '파이리',
  c : '꼬부기',
  d : '미뇽'
}

// console.log(pokemon.length);
// for(let key in pokemon){
//   console.log(key);
//   // a, b, c, d
//   console.log(key.a);
//   // undefined
//   console.log(pokemon.a);
//   // 피카츄*4
// }

for(let props in pokemon){
  console.log(pokemon[props]);
  // 피카츄, 파이리, 꼬부기, 미뇽
  console.log(typeof props)
  // string*4
}
/*
*객체의 키값에 접근 하는 방식
----- obj.key : 점 표기
----- obj['key'] : 대괄호 표기
※ 문자열로 객체의 키값에 접근하기 위해
※ 객채의 키값은 문자열!

    console.log(pokemon.a);
    console.log(pokemon['a']);
*/

/* 
- for()문에서 파생된 문법
1. for in() : 선언형식 like for each
---> for( let:변수선언  key:props라고도 쓰고 객체안에 키값을 말함 in: 함수안에 넣어줌 pokemon:반복 할 객체);
★ 객체의 키값은 '문자열' 배열의 키값은 '숫자'★
2. for of()
*/



