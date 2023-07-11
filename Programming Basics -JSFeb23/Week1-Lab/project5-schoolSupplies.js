function schoolSupplies(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let percentDiscount = Number(input[3])/100;

    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let priceCleaner = cleaner * 1.20;

    let totalPrice = pricePens + priceMarkers + priceCleaner;
    let totalDiscount = totalPrice * percentDiscount;
    let finalPrice = totalPrice - totalDiscount;
    console.log(finalPrice);
}

schoolSupplies(['4','2','5','13'])