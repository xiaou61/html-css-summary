function countDown(time) {
    var nowTime = +new Date();
    var inputTime = new Date(time);
    var times = (inputTime-nowTime)/1000;//这个就是剩余时间的秒数
    var d=parseInt(times/60/60/24)
    d=d<10?'0'+d:d;
    var h=parseInt(times/60/60%24)
    h=h<10?'0'+h:h;
    var m=parseInt(times/60%60)
    var s=parseInt(times%60)
    s=s<10?'0'+s:s;
    return d+'天'+h+'时'+m+'分'+s+'秒';
} 
console.log(countDown('2022-12-28 18:00'));