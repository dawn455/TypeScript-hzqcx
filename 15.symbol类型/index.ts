let a1:symbol = Symbol(1)
let a2:symbol = Symbol(1)

console.log(a1);//Symbol(1)
console.log(a2);//Symbol(1)
console.log(a1 === a2);//false 内存地址不同 唯一的

// for Symbol for全局symbol有没有注册过这个key 如果有直接拿来用 没有就创建一个
console.log(Symbol.for('a') === Symbol.for('a'));//true


let obj1 = {
  name:1,
  [a1]:111,
  [a2]:222
}
console.log(obj);//解决key相同的情况

// for in 不能读到symbol
for(let key in obj) {
  console.log(key);//name
}

// keys 不能读到symbol
console.log(Object.keys(obj));//name
// Object.getOwnPropertyNames不能读到symbol
console.log(Object.getOwnPropertyNames(obj));//name

console.log(Object.getOwnPropertySymbols(obj));//Symbol(1) Symbol(1)读不到name

console.log(Reflect.ownKeys(obj));//全读

//1.生成器 
function* gen(){
  yield Promise 
}







