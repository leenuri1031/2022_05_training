let a = 0;
let timer = setInterval(function() {
  console.log(a);
  a++;
  if(a > 10){
    clearInterval(timer);
  }
}, 500);