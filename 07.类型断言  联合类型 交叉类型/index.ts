// 联合类型
let phone:number | string = '010-123456'

let fn = function(type:number | boolean):boolean {
  return !!type
}
// 交叉类型 合并
interface Pople{
  name:string,
  age:number
}

interface Man {
  sex:number
}

const aa = (man:Pople & Man):void => {
  console.log(man);
}

aa({
  name:'11',
  age:1,
  sex:1
});

// 类型断言
(window as any).abc = 123