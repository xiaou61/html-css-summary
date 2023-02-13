//猜数字
var random=getRandomIntInclusive(1,10)
while(true){
    num=prompt('来猜一个数字')
    if(num>random){
        alert('大了')
        continue;
    }else if(num<random){
        alert('小了')
        continue;
    }else{
        alert('猜对了')
        break;
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
  }