function triangleArea(a,b,c){
    let s = 0.5 * (a+b+c);
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
}

triangleArea(3,5.5,4)