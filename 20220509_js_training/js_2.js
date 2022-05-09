
let a = 1;
let b = 1;
let c = 2;

/**전역 함수*/

function valueTest(){
  if(typeof a === 'number'){
    console.log('변수 a는 데이터타입이 숫자입니다.')
  } else{
    console.log('변수 a는 숫자타입이 아닙니다.')
  }

  if(typeof b === 'number'){
    console.log('변수 b는 데이터타입이 숫자입니다.')
  } else{
    console.log('변수 b는 숫자타입이 아닙니다.')
  }
}

// valueTest();



function valueTestTwo(){
  //   if(typeof a ==='number' && typeof b === 'number'){
  // /**첫번째 부분과 두번째 부분 모두 다 참이여야만 하는 조건식*/
  //     console.log('변수 a와 b는 모두 number 타입입니다.');
  //   } else {
  //     console.log('다 모르겠지만 둘 중 하나이거나 둘다 아닐 수 있습니다.');
  //   }

  // if(typeof a ==='number' || typeof b === 'string'){
  //   /**첫번째 부분과 두번째 부분 둘 중 하나만 참이면 되는 조건식*/
  //       console.log('변수 a와 b는 모두 number 타입입니다.');
  //     } else {
  //       console.log('다 모르겠지만 둘 중 하나이거나 둘다 아닐 수 있습니다.');
  //     }

  // if(typeof a ==='number' && typeof b === 'string'){
  //       console.log('변수 a와 b는 모두 number 타입입니다.');
  //     } else {
  //       console.log('다 모르겠지만 둘 중 하나이거나 둘다 아닐 수 있습니다.');
  //     }

  // if 나 else 중 하나가 메인 알고리즘 인 경우가 많음
  // if(typeof a === 'string') {
  //   console.log('참이 실행되었습니다.');
  // } else{
  //   console.log('test');
  // }

    if(typeof a === 'string') {
    console.log('a는 string 입니다.');
  } else{
    if(typeof a === 'number'){
      console.log('a는 number입니다.');
      if(a === 1){
        console.log('a는 1입니다.');
      }  else{
        console.log('a는 1이 아닙니다.');
      }
    } else{
      console.log('a는 number 가 아닙니다.');
    }
  }
} 

valueTestTwo();
