function isRunYear(year){
    flag=false;
    if((year%4==0&&year%100!=0)||year%400==0){
        flag=true;
    }
    return flag;
}
year=prompt('请输入一个年份')
isRunYear(year)
alert(year+'年'+(flag?'是':'不是')+'闰年')