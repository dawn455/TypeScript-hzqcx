// never类型 最底层 联合类型时会被忽略
type A = 'a' | 'b' | 'c'

function kun(value:A){
  switch (value) {
    case 'a':
      break
    case 'b':
      break
    case 'c':
      break
    default:
      // 兜底逻辑
      const error:never = value;
      break
  }
}