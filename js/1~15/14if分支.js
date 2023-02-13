//进入网吧
age = prompt("请输入你的年龄")
if (age >= 18) {
    alert('我想带你去网吧偷耳机')
} else {
    alert('我不能带你去网吧偷耳机了，好可惜')
}
//判断闰年
year = prompt('请你输入一个年份')
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert(year + '是一个闰年')
} else {
    alert(year + '是一个平年')
}
//if elseif
if (condition) {

} else if (condition) {

} else if (condition) {

} else if (condition) {

} else {

}