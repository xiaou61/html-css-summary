function getTime(){
    var time=new Date;
    var h=time.getHours();
    h=h<10?'0'+h:h;
    var m=time.getMinutes();
    m=m<10?'0'+m:m;
    var s=time.getSeconds();
    s=s<10?'0'+s:s;
    return h+":"+m+":"+s;
}
time=getTime();
console.log(time);

console.log(date.valueOf());//和java里面的valueof是相似的，就是现在的时间距离1970的时间
var date1=+new Date();//这里返回的就是总的毫秒数。这个更加的简单，也是最常用的写法。
//还有更加简单的方法，是h5新增的方法

console.log(Data.now())
//也叫做时间戳。