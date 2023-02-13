function unique(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var demo=unique(['c','a','b','c','d','e','f','g','h'])
console.log(demo);
