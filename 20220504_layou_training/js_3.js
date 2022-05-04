
// console.log(a);
// console.log(b);
let a  = '똑';
let b = '딱';


let isStatus = true;
let current = 0;

const timer = setInterval(function() {
  if(isStatus === true){
    console.log(a);
    isStatus = false;
  }else{
    console.log(b);
    isStatus = true;
    current++;
    console.log(`지금 똑딱이 횟수는${current}입니다.`);
  }

  if(current > 9){
    clearInterval(timer);
  }
}, 500);



// if(isStatus === true) {
//   console.log(a);
//   isStatus = false;
//   // console.log(isStatus);
// } else{
//   console.log(b);
//   isStatus = true;
// }



