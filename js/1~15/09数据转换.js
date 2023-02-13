num=10
//利用tostring
str=num.toString();
console.log(typeof str);
//利用String
console.log(typeof String(num));
//利用+拼接
console.log(num+'');
var age=prompt("请输入年龄")
console.log(age);//这里是字符型
//parseInt
console.log(parseInt(age));//这里就变成了数字型,但他是取整的。
console.log(parseInt('120px'));//这里遇见字母就直接停止转换了。所以就变成了120
//parseFloat
console.log(parseFloat(3.14));//这里就可以输出小数了。  
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));