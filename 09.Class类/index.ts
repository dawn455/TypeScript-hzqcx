// 1.class的基本用法 继承 和 类型的约束 implements
// 2.class的修饰符readonly private private protected public
// 3.super原理
// 4.静态方法
// 5.get set

// private只能自己使用 私有的
// protected给子类和内部使用
// public 都能使用

// interface Options {
//   el: string | HTMLElement
// }

// interface VueCls {
//   options: Options
//   init():void
// }

// interface Vnode{
//   tag:string //div section header
//   text?:string //123
//   children?:Vnode[]
// }

// // 虚拟duo简单版
// class Dom{
//   // 创建节点的方法
//   createElement(el:string) {
//     return document.createElement(el)
//   }
//   // 填充文本的方法
//   setText(el:HTMLElement,text:string | null) {
//     el.textContent = text;
//   }
//   // 渲染函数
//   render(data:Vnode){
//     let root = this.createElement(data.tag)
//     if(data.children && Array.isArray(data.children)){
//       data.children.forEach(item=>{
//         let child = this.render(item)
//         root.appendChild(child)
//       })
//     }else {
//       this.setText(root,data.text)
//     }
//     return root
//   }
// }

// class Vue extends Dom implements VueCls{ 
//   options: Options
//   constructor(options:Options){
//     super()//父类的prototype.constructor.call
//     this.options = options
//     this.init()
//   }
//   init(): void {
//     let data:Vnode = {
//       tag:'div',
//       children:[
//         {
//           tag:'section',
//           text:'我是子节点1'
//         },
//         {
//           tag:'section',
//           text:'我是子节点2'
//         },
//         {
//           tag:'input',
//           text:'我是子节点3'
//         },
//       ]
//     }
//     let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el

//     app.appendChild(this.render(data))
//   }
// }

// new Vue({
//   el:'#app'
// })

// 5.get set
class Ref{
  _value:any
  constructor(value:any){
    this._value = value
  }

  get value(){
    return this._value
  }
  set value(newVal){
    this._value = newVal
  }
}

const ref = new Ref('hzqcx')
// ref.value = 'a'
console.log(ref.value);
