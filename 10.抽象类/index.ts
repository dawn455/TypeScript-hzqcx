// 基类 抽象类
// abstract所定义的抽象类 都只能描述不能实现
abstract class Vue{
  name:string
  constructor(name?:string) {
    this.name = name 
  }
  getName():string{
    return this.name
  }
  abstract init(name:string):void
}

class React extends Vue{
  constructor(){
    super()
  }
  init(name: string){
    
  }
  setName(name:string) {
    this.name = name
  }
}
const react = new React()
react.setName('hzqcx-1')
console.log(react.getName());
