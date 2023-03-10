import { Interface } from "readline"

// interface 重名 重合
interface A {
  name:string,
  age:number
}

interface A {
  Ikun: string
}

let ikun:A = {
  name:'123',
  age:17,
  Ikun:'ikun'
}
// interface 任意key
interface B {
  name:string,
  age:number,
  [propName:string]:any //索引签名 后台返回数据不知道有什么类型时
}
let a:B = {
  name:'112',
  age:14,
  a:1,
  b:2
}
// interface ? readonly
interface C {
  name:string,
  age?:number,//可选，可有可无
  readonly id:number//readonly只读 不能修改
}
let a1:C = {
  name:'112',
  age:14,
  id:1
}

// interface 接口继承
interface C1 extends C2 {
  name:string,
  age?:number,//可选，可有可无
  readonly id:number//readonly只读 不能修改
}
interface C2{
  like:string
}
let a2:C1 = {
  name:'112',
  age:14,
  id:1,
  like:'ikun'
}

// interface 定义函数类型
interface Fn {
  (name:string):number[]
}
const fn:Fn = function (name:string) {
  return [1]
}
// 不能多属性 也不能少属性