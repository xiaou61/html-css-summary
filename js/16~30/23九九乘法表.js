str=''
for(i=1;i<=9;i++){
    for(j=1;j<=i;j++){
        str=str+j+'x'+i+'='+(i*j)+'\t'
    }
    str=str+'\n'
}
console.log(str);