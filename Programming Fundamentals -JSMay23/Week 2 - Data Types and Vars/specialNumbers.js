function special(num){
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let total = 0;
        let isSpecial = "False";
        sum = i;
        while(parseInt(sum) / 10 > 0){
            total += sum % 10;
            sum /= 10;
        }  
        if ((parseInt(total) === 5) || (parseInt(total) === 7) || (parseInt(total) === 11)){isSpecial = "True";}
        console.log(`${i} -> ${isSpecial}`);        
    }   
}

special(19)