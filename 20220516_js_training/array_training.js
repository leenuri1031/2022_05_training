const pokemonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스'];

// todo : Q. pokemonList의 총 길이값이 얼마인지 프로그래밍을 통해서 console에 출력하시오.

// console.log(pokemonList.length);

// let isStatus = true;
// let count = 0;
// while(isStatus === true && count < 5){
//   console.log('test');
//   console.log(pokemonList[count]);
//   count++
// }

// todo : Q. "야도란" 이라는 원소(element)가 몇번째에 있는지 프로그래밍을 통해서 console에 출력하시오.

// console.log(pokemonList.indexOf('야도란'));
// 선언 -> 속도가 필요 할 때 - 자바스크립트 전용 
// 검색하면 알 수 있음

// for(let i = 0; i < pokemonList.length; i++){
//   if(pokemonList[i] === '야도란'){
//     console.log(i);
//   }
// }
// 중요 point  -> 이해를 해야 선언을 사용할 수 있음
/* 
반복문 사용 
1. i = 0 대입 -> i가 배열 pokemonList의 길이보다 작을 때 
*/

// todo : Q. "야도란" 이라는 원소(element)를 "메타몽" 이라는 string으로 변환하여 배열 전체를 console을 통해 조회하시오.

// for(let i = 0; i < pokemonList.length; i++){
//   if(pokemonList[i] === '야도란'){
//     pokemonList[i] = '메타몽'
//     console.log(pokemonList[i]);
//   }
// }


// todo : Q. "리자몽"을 pokemonList 맨 마지막 원소로 프로그래밍을 통해 추가하시오.

// pokemonList[pokemonList.length] = '리자몽';
// console.log(pokemonList);

