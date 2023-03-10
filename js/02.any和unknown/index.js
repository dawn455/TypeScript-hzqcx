// // any 任意类型 unknown 不知道类型
// // 1.top type 顶级类型 any unknown
// // 2.Object
// // 3.Number String Boolean
// // 4.number string boolean
// // 5.1  'aa'  false
// // 6.never
// // let a1:any = 1
// // let b:number = 2
// // a=b
// // b=a
// // any类型可以互相赋值
// let hzqcx:any = {name:'hzqcx',open:() => 66}
// console.log(hzqcx.name);
// console.log(hzqcx.open());
// // unknown只能赋值给自身 或者是any
// // unknown没办法读任何属性 方法也不能调用
// // unknown比any更加安全
// // let hzqcx:unknown = {name:'hzqcx',open:() => 66}
// // hzqcx.name
// // hzqcx.open()
// // let a2:unknown = 1
// // let b3:number = 2
// // a2=b3
// // b3=a2
