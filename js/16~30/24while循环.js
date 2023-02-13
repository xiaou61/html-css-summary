money=100
choose=0
while(choose!=4){
    choose=prompt('请输入你要的操作'+'\n'+'1.存钱'+'\n'+'2.取钱'+'\n'+'3.显示余额'+'\n'+'4.退出')
    switch (choose) {
        case '1':
            //存钱
            saveMoney=prompt('请输入您要存的钱')
            money=parseFloat(saveMoney)+money;
            alert('您当前余额'+money+'元')
            break;
        case '2':
            //取钱
            putMoney=prompt('请输入您要取的钱')
            money=money-parseFloat(putMoney);
            alert('您当前余额'+money+'元')
            break;
        case '3':
            alert('您当前余额'+money+'元')
            break;
        case '4':
            break;
        default:
            alert('没有这个选项请重新输入')
            break;
    }
}

