var sum=0;
for(i=1;i<=100;i++){
    sum=sum+i
}
console.log(sum);
//求1~100的平均值
avg=sum/100

//2.求1~100之间所有偶数和奇数的和
even=0;
odd=0;
for(i=1;i<=100;i++){
    if(i%2==0){
        even=even+i;
    }else{
        odd=odd+i;
    }
}
console.log('奇数为'+even);
console.log('偶数为'+odd);

//3.能被三整除的数
result=0;
for(i=1;i<=100;i++){
    if(i%3==0){
        result=result+i;
    }
}
console.log('能被三整除的数的和为'+result);