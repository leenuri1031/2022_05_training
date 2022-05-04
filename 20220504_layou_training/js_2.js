// let a = 1;
// // 함수 바깥에 있음  (문서 어딘가에-memory 저장되어 있는 상태)
// // 언제 어디서나 꺼내서 사용 가능
// // global = 전역 변수

// function b(){
//   // console.log(a);
//   let c = 'hey';
//   // local = 지역 변수
//   // return값을 정해주지 않으면 절대 밖으로 나올 수 없음
// }

// // 함수 b는 콘솔을 찍고 종료 하는 기계  
// // return값음 없음 -> undefined값이 리턴

// // b();
// // 호출

// console.log(b());

let current = 0;

let timer = setInterval(function() {
  console.log(current);
  current++;
  if(current === 60){
    console.log('1분이 경과되었습니다.');

    clearInterval(timer);
  }
}, 100);
// 주기 1000 = 1s






