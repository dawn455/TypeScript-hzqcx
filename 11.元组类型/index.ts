// 元组就是数组的变种
let arr: readonly [number,boolean] = [1,true]

type first = typeof arr[0] //number
type first1 = typeof arr['length'] //2



// 应用场景描述excel数据
let excel:[string,string,number][]=[
  ['1','男',18],
  ['2','男',18],
  ['3','男',18],
  ['4','男',18],
]

