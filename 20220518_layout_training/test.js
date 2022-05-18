
// const memberOne = {
//   name : 'Harry Potter',
//   gender : 'male',
//   age : 30,
//   desknumber : 20,
//   glasses : true,
//   married : 'yes',
//   hairLose : true,
//   smartPhone : 'folder phone'
// }

// const memberTwo = {
//   name : 'Serius Black',
//   gender : 'male',
//   age : 38,
//   desknumber : 0,
//   glasses : false,
//   married : 'no',
//   hairLose : false,
//   smartPhone : 'folder phone'
// }
/* 
.
.
.
반복해야 할 때 -> 생성자 함수 사용
*/

// console.log(memberOne.name);
// console.log(memberTwo.name);


// * 생성자 함수 : constructor function 
// * 객체를 찍어내는 틀
// * 석고 뜨는 함수

function Member(name, gender, age, desknumber, glasses, married, hairLose,smartPhone) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.desknumber = desknumber; 
  this.glasses = glasses;
  this.married  = married;
  this.hairLose = hairLose;
  this.smartPhone = smartPhone;
}


const memberOne = new Member('dobby', 'male', 'unknown', '13', 'false', 'no', 'true', 'no have');
// console.dir(memberOne);


const testOne = new Date();
const testTwo = new Date();

// function ampm(hour, msg) {
  //   if(hour > 12) {
    //     console.log(msg +(hour - 12) +' 시 입니다.' );
    //     console.log(memberOne.smartPhone);
//   } else {
  //     console.log('오전' + hour + '시 입니다.');
  //   }
  // }
  
  // ampm(testOne.getHours(), '오후 ');
  
  // console.dir(Array());
  
  // 일주일 총 시간 구하기
  // console.log(testOne);
  console.log(testOne.getHours());
  // 현재 시간과 일주일뒤의 시간 

  console.log(testOne);
  // console.log(testTwo);