function rounding(num,deci){
    let precision = 0;
    if (deci > 15){precision = 15;} 
    else {precision = deci;}
    console.log(parseFloat(num.toFixed(precision)));
}

rounding(10.5,3)