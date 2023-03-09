# TypeScript-hzqcx
## TypeScript01（基础类型）

TS是JS的超集，所以JS基础的类型都包含在内

安装：**npm install typescript -g**

**运行tsc 文件名**

### 1.字符串类型

字符串是使用string定义

```typescript
let a:string = '123'
//普通声明

//使用es6字符串模板
let str:string = `${a}`
```

### 2.数字类型

支持十六进制、十进制、八进制和二进制

```typescript
let notANumber: number = NaN;//Nan
let num: number = 123;//普通数字
let infinityNumber: number = Infinity;//无穷大
let decimal: number = 6;//十进制
let hex: number = 0xf00d;//十六进制
let binary: number = 0b1010;//二进制
let octal: number = 0o744;//八进制s
```

### 3.布尔类型

注意，使用构造函数 `Boolean` 创造的对象**不是**布尔值：

```typescript
let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象 

事实上 new Boolean() 返回的是一个 Boolean 对象 需要改成
let createdBoolean: Boolean = new Boolean(1)
 
let booleand: boolean = true //可以直接使用布尔值
 
let booleand2: boolean = Boolean(1) //也可以通过函数返回布尔值
```

### 4.空值类型

JavaScript 没有空值（Void）的概念，在 [TypeScript](https://so.csdn.net/so/search?q=TypeScript&spm=1001.2101.3001.7020) 中，可以用 `void` 表示没有任何返回值的函数

```typescript
function voidFn(): void {
    console.log('test void')
}
```

`void` 类型的用法，主要是用在我们**不希望**调用者关心函数返回值的情况下，比如通常的**异步回调函数**

**void也可以定义undefined 和 null类型**



```typescript
let u: void = undefined
let n: void = null;
```

### 5.Null和undefined类型

```
let u: undefined = undefined;//定义undefined
let n: null = null;//定义null
```

### void 和 undefined 和 null 最大的区别

### 与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 string 类型的变量：

```typescript
//这样写会报错 void类型不可以分给其他类型
let test: void = undefined
let num2: string = "1"
 
num2 = test

//这样是没问题的
let test: null = null
let num2: string = "1"
 
num2 = test
 
//或者这样的
let test: undefined = undefined
let num2: string = "1"
 
num2 = test
```

**TIPS 注意：**

如果你配置了tsconfig.json 开启了严格模式:"strict": true

### ***\*null 不能 赋予 void 类型\**** 
