//利用函数求任意个数的最大值
function getMax(){
    var max=arguments[0];
    for(i=1;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i]
        }
    }
    return max;
}
console.log(getMax(1,2,3,4,5));