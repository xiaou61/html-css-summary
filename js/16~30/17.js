time = prompt('请输入一个0~59的数字')
    //三元表达式
result = time < 10 ? '0' + time : time
alert(result)