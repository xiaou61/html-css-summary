//第一种方法
var obj={};//创建了一个空对象
var obj1={
    unmae:'李子凡',
    age:18,
    sex:'男',
    sayHi:function() {
        console.log('Hi~');
      }
}
console.log(obj1.age);
console.log(obj1['age']);


//第二种方法
var objs=new Object();
objs.unmae='你好'
objs.age=18
objs.gender='男'
objs.sayHi=function (){
  console.log('hi');
}

