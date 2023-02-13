var myMath={
    PI:3.1415926535,
    max:function (){
        max=arguments[0]
        for(var i =1;i<=arguments.length;i++){
            if(max<arguments[i]){
                max=arguments[i]
            }
        }
        return this.max
    }
}