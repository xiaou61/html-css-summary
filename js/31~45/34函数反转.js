function reverse(arr){
    var newArr=[]
    for(i=arr.length-1;i>=0;i--){
        newArr[newArr.length]=arr[i]
    }
    return newArr;
}
var arr1=[1,2,4,5,6]
arrNew=reverse(arr1)
console.log(arrNew);