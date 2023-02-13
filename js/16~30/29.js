//删除指定元素
var arr=[1,2,0,0,0]
var newArr=[]
for(i=0;i<arr.length;i++){
    if(arr[i]!=0){
        newArr[newArr.length]=arr[i]
    }
}
console.log(newArr);