// 1.函数定义类型和返回值 | 箭头函数定义类型和返回值
// function add(a:number,b:number):number{
//   return a+b
// }
// const add = (a:number = 10,b?:number):number => a+b
function a(user) {
    return user;
}
//ts可以定义this类型，在js中不行 必须是第一个参数定义this的类型
let obj = {
    user: [1, 2, 3],
    add() {
        this.user.push();
    }
};
// 函数重载
let user1 = [1, 2, 3];
function findNum(ids) {
    if (typeof ids == 'number') {
        return user1.filter(v => v == ids);
    }
    else if (Array.isArray(ids)) {
        user1.push(...ids);
        return user1;
    }
    else {
        return user1;
    }
}
