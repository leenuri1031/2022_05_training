/* arr.push(arr[0]);
arr.unshift(arr[arr.length-1]);
console.log(arr); */

// arr.push(arr[0]);
// console.log(arr);
// arr.shift();
// console.log(arr);



const arr = [ "a", "b", "c"];

// let temp;
// temp = arr[0];
// console.log(temp);
// arr.shift();
// console.log(arr);
// arr.push(temp);
// console.log(arr);

// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// let temp;
// for(let i = 0; i < arr.length; i++){
//   temp = arr[0];
//   arr.shift();
//   arr.push(temp);
//   console.log(arr);
// }
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
// arr.splice(0,3, 'c','a','b');
let index;
index = arr[2];
console.log(index);
arr.unshift();
console.log(arr);


// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까? 












