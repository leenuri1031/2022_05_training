/* arr.push(arr[0]);
arr.unshift(arr[arr.length-1]);
console.log(arr); */

const arr = [ "a", "b", "c"];

// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까? 

// arr.push(arr[0]);
// console.log(arr);
// arr.shift();
// console.log(arr);

// let temp;
// temp = arr[0];
// console.log(temp);
// arr.shift();
// console.log(arr);
// arr.push(temp);
// console.log(arr);

let temp;
temp = arr[0];
for(let i = 0; i < arr.length; i++){
  arr.shift();
  arr.push(temp);
  console.log(arr);
}










