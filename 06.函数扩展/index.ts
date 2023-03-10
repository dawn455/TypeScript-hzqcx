// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// function add(a:number,b:number):number{
//   return a+b
// }
// const add = (a:number = 10,b?:number):number => a+b

// 2.参数是一个对象如何定义
interface User {
  name:string,
  age:number
}
function a(user):User {
  return user
}
// 函数this类型
interface Obj {
  user: number[]
  add:(this:Obj,num:number)=>void
}

//ts可以定义this类型，在js中不行 必须是第一个参数定义this的类型
let obj:Obj = {
  user:[1,2,3],
  add(){
    this.user.push()
  }
}
// 函数重载
let user1:number[] = [1,2,3]
function findNum(add:number[]):number[] //如果穿的是一个number类型的数组就做添加
function findNum(id:number):number[] //如果传了一个id就是单个查询
function findNum():number[] //如果没传就是全部查询
function findNum(ids?:number | number[]):number[]{
  if(typeof ids == 'number'){
    return user1.filter(v=>v == ids)
  }else if(Array.isArray(ids)){
    user1.push(...ids)
    return user1
  }else{
    return user1
  }
}
