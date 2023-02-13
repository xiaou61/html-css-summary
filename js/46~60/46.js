//检测是否为数组
var arr=[];
var obj={};
console.log(arr instanceof Array);
console.log(obj instanceof Array);
//第二种方法
console.log(Array.isArray(arr));
//添加元素在末尾添加
arr.push(12)
//push完毕之后，返回的结果是新数组的长度。
//原数组会发生变化
//在数组开头添加数组，返回的结果也是新数组的长度
arr.unshift(1)
//删除数组元素pop,可以删除最后一个元素
//后面是没有参数的，返回的结果是删除的最后一个元素
arr.pop()
//删除数组中的第一个元素
arr.shift();



