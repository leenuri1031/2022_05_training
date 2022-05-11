let dropdownButtons = (function() {})
// (function() {}) : 함수를 감싸는 소괄호

  let dropdownWrappers = document.getElementsByClassName('js-button-dropdown-container');
// 문서에서 class를 가지고 옴

let activeDropdowns = [];
// 배열만 선언한 상태 - 원소가 없는데 왜 선언했는지?
// 왜?

for( i = 0; i < dropdownWrappers.length; i++){
  // for문에 해당하는 class를 제어하려고 함
  // for문 안에 if문 그안에 for문 중첩해서 사용하고 있음

  if(dropdownWrappers[i].classList.contains('active')) 
  // if문의 class의 여부를 판단하는 조건식
  {}

  for (c = 0; c < dropdownWrappers[i].getElementsByClassName('js-button-dropdown').length; c++) 
  // 문서에 있는 class를 이용한 for문 조건식
  // loop를 확인했음을 알 수 있음
  {}
}

function hideDropdowns(activeDropdowns){
  // 어떤 것을 숨기는 기능을 하는 함수인 것을 알 수있음
  // 매개변수 -> 배열 -> 반복문을 사용해 class를 지우는 작업
  // target = ('active');
}


function toggleDropdown() {
  // 토글을 하기 위한 함수


  // ? this의 의미
  // . parentNode -> 써본적은 없지만 부모요소의 객체를 뜻하는것 같음 -> 검색해 보기
  // toggle() 의 의미?
  for (i = 0; i < activeDropdowns.length; i++) {
    // for()문을 이용한 반복작업이 필요함을 알 수 있음
    if (activeDropdowns[i] !== this.parentNode) {
      // 조건이 (!==) 같지 않으면 
      activeDropdowns[i].classList.remove('active');
      // active의 class를 삭제
    }
  }

  }

  // return{
    // return :무언가 반환 하는 것
    // {}는 객체
  // }











