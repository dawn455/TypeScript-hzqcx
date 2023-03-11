// const fna = (type) => {
//   if(type === 'red') {
//     return 0
//   }
//   if(type === 'green') {
//     return 1
//   }
//   if(type === 'blue') {
//     return 2
//   }
// }

import { ok } from "assert";

// red:0 green:1 blue:2
enum Color{
  red,
  green,
  blue
}
console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);

// 增长枚举
enum Color1{
  red=1,//1
  green,//2
  blue//3
}

// 字符串枚举
enum Color2{
  red='red',
  green='green',
  blue='blue'
}

// 异构枚举
enum Color4{
  yes = 1,
  no = 'no'
}

// 接口枚举
interface A{
  red:Color4.yes
}

let obj1:A = {
  red:1
}

//const枚举
const enum Types{
  sucess,
  fail
}

let code:number = 0
if(code === Types.sucess){
  console.log('ok');
}

// 反向映射
enum Types1{
  sucess
}

let sucess:number = Types1.sucess
let key = Types1[sucess]
console.log(`value---${sucess}`,`key---${key}`);//value---0 key---sucess
