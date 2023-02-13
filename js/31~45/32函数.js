//求数组的最大值
var arr=[2,4,5,6,8]
function getArrMax(arr){
    max=arr[0]
    for(i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max
}
var result=getArrMax(arr)
console.log(result);