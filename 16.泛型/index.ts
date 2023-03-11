
function a(a:number,b:number):Array<number>{
  return [a,b]
}

// 动态类型
function a<T>(a:T,b:T):Array<T>{
  return [a,b]
}

// 泛型约束
// 在类型后面跟一个extends 再更一个约束的类型
function add<T extends number>(a:T,b:T){
  return a+b
}

interface Data{
  name:string
  age:number
  sex:string
}

type Options<T extends object> = {
  [key in keyof T]?:T[key]
}

type B = Options<Data>