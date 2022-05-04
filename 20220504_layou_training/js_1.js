
// * 기명함수방식(함수 선언 방식) - 일반적인 함수

// function textMachine(startValue, endValue, textValue){
//                    // 첫번째 인자 = 첫번째 파라미터 = 0번 파라미터 

//   let result = textValue;

//   for(let i = startValue; i <= endValue; i++){

//   }

//   return result ;
// }
// -> 재료를 세개 넣을 수 있는 공장 
// console.log(textMachine(1,2,'콘솔'));

// textMachine(1,2,'콘솔');


// function a(){
//   console.log('test');
//   // return 'hey';
// }

// a();
// console.log(a());



// function b (first, second){
//   console.log(first + second);
//   // return first + second ;
// }

// b(1,2);
// console.log(b(1,2));

function b (first, second){
  if(typeof first === 'number'){
    // 타입체크
    return first - second ;
  }else{
    console.error('첫번째 매개변수 타입이 숫자가 아닙니다.');
  }
}

console.log(b('1',2));


