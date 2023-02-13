//数组的筛选
arr=[2,0,6,1,77,0,52,0,25,7]
var newArr=[]
for(i=0;i<arr.length;i++){
    if(arr[i]>10){
        newArr[newArr.length]=arr[i]
    }
}
console.log(newArr);