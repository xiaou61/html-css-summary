str='abcajddaijdbajkcakjm'
var o={};
for (var i=0; i<str.length; i++) {
    chars=str.charAt(i)
    if(o[chars]){
        o[chars]++;
    }else{
        o[chars]=1
    }
}
var max=0
var ch='';
for(var k in o){
    if(o[k]>max){
        max=o[k]
        ch=k
    }
}
console.log(k, max);