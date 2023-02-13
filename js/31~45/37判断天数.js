function backDay(){
    year=prompt('请输入年份')
    isRunYear(year)?alert('这个年份有29天'):alert('这个年份有28天')
}

function isRunYear(year){
    flag=false;
    if((year%4==0&&year%100!=0)||year%400==0){
        flag=true;
    }
    return flag;
}
backDay()