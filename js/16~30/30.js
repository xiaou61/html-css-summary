//翻转数组
var arr=[1,2,3,4,5,6]
var newArr=[]
for(i=arr.length-1;i>=0;i--){
    newArr[newArr.length]=arr[i]
}
console.log(newArr);