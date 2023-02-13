//翻转数组
var arr = ['pink','orange'];
arr.reverse();
console.log(arr);
//冒泡排序
var arr2 =[2,4,5,6]
arr2.sort(function(a,b){
    return a-b;//升序的排列，b-a是降序
})
console.log(arr2);
//返回数组元素的索引号,只返回第一个满足的索引，不满足的返回-1
arr2.indexOf(2);
//这个是从后面开始查找索引。和indexof相反。
arr2.lastIndexOf(2);

