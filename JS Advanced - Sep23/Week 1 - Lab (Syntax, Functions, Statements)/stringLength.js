function strLength(str1,str2,str3){
    let sumLength = 0;
    let averageLength = 0;
    sumLength = str1.length + str2.length + str3.length
    averageLength = Math.floor(sumLength/3)

    console.log(sumLength);
    console.log(averageLength);
}

strLength('chocolate', 'ice cream', 'cake')