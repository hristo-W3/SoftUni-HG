function pieceOfPie(array, target1, target2){
    return array.slice(array.indexOf(target1),array.indexOf(target2) + 1)
}

console.log(pieceOfPie(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie'))