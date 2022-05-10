window.onload = function () {
  
  /* window.onload 란? 
  javascript의 경우 위에서부터 아래로 읽는 규칙이 있어 보통 문서 마지막에 써주는데 문서의 앞에 작성해도 오류가 나지 않게 해주는 메서드
  */

  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
  // var Interval; 
  // -> 일단 변수 선언은 한 상태
  // -> '변수의 할당은 밑에서 할 예정'이라는 의미


  // 변수지정 - 전역변수

  buttonStart.onclick = function() {
    // addEventListener 의 click event와 같음
    /* buttonStart.addEventListener('click', function() {     clearInterval(Interval);
    Interval = setInterval(startTimer, 10); });
     */
    clearInterval(Interval);
    /* 변수 buttonStart를 클릭 하면 'Interval'의 동작을 멈추게함 */
     Interval = setInterval(startTimer, 10);
  }
  // Interval이라는 변수는 setInterval함수이고 function()을 밖으로 빼내서 작성해줌 -지역함수가 되어버리면 안되기 때문에 
  // 시간을 0.01초로 지정
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  /* 변수 buttonStop을 클릭 하면 'Interval'의 동작을 멈추게함 */
  

  buttonReset.onclick = function() {
     clearInterval(Interval);

    /* 변수 buttonReset을 클릭 하면 'Interval'의 동작을 멈추게함 */

    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    // 클릭을 하면 setInterval로 인해 숫자가 증가했던 모든 요소를 00으로 만들어줌
  }
  
  /* 밖으로 빼낸 setInterval함수 */
  function startTimer () {
    tens++; 
    // tens = tens+1 (0+1)
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    // tens에 +1을 해서 9이하라면 appendTens자리에 0+(tens+1)입력
    // appendTens자리에올 수 있는 숫자 00~09까지   
    
    if (tens > 9){
      appendTens.innerHTML = tens;
    // tens에 +1을 해서 9보다 크면 appendTens자리에 tens+1입력
    // appendTens자리에올 수 있는 숫자 10~99까지   
    } 
    
    if (tens > 99) {
      console.log("seconds");
      // tens +1을 해서 99보다 커지면 
      seconds++;
      // seconds = seconds+1 (0+1) 
      appendSeconds.innerHTML = "0" + seconds;
      // appendSeconds자리에 0+(seconds+1)입력하면
      tens = 0;
      // tens를 다시0으로
      appendTens.innerHTML = "0" + 0;
      // appendTens자리에 00입력
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    // seconds에 +1을 해서 9보다 크면 appendSeconds자리에 seconds+1입력
    // 멈추는 버튼을 누르기 전까지 계속 됨
    }
  
  }

  // '분'자리를 만들어 00:00:00으로도 할 수 있음
  

}
