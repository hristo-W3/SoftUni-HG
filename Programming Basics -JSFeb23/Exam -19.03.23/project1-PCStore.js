function PCStore(input){
    let priceCPUinUSD = Number(input[0]);
    let priceGPUinUSD = Number(input[1]);
    let priceRAMinUSD = Number(input[2]);
    let countRAM = Number(input[3]);
    let discount = Number(input[4]);

    let exchangeRate = 1.57;

    let finalCPUpriceInBGN = (priceCPUinUSD * exchangeRate) * (1 - discount);
    let finalGPUpriceInBGN = (priceGPUinUSD * exchangeRate) * (1 - discount);

    let finalRAMpriceInBGN = priceRAMinUSD * exchangeRate * countRAM;

    let totalAmount = finalCPUpriceInBGN + finalGPUpriceInBGN + finalRAMpriceInBGN;

    console.log(`Money needed - ${totalAmount.toFixed(2)} leva.`);
}

PCStore(["500","200","80","2","0.05"])