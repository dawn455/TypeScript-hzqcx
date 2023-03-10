
// number[] 数组类型
let arr:number[] = [1,2,3,4,5]

// string[] 
let arr1:string[] = ['1','2','3']

// number[] 
let arr2:boolean[] = [false,true]

// Array<boolean>数组普通类型
let arr3:Array<boolean> = [true,false]

// 定义对象数组使用interface
interface X {
  name:string,
  age?:number
}

let arr4:X[] = [{
  name:'123'
},
{
  name:'234',
  age:1
}] 

// 二维数组 number[][] 或 Array<Array<number>>
let arr5:number[][] = [[1],[2],[3]]

// 大杂烩数组 any[]

function a(...args:any[]) {
  console.log(args);
}

a(1,'a',{},true)

// 伪数组 arguments 
function a1(...args:any[]) {
  // let a:IArguments = arguments

  let a:A = arguments
}
// IArguments原理
interface A{
  callee:Function,
  length:number,
  [index:number]:any
}