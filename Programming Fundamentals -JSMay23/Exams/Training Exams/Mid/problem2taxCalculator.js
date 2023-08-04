function solve(input) {
    let cars = input.split('>>');
    let nap = 0;
    for (let i = 0; i < cars.length; i++) {
        let [type, years, km] = cars[i].split(' ');
        if (type === 'family' || type === 'heavyDuty' || type == 'sports'){
            console.log(`A ${type} car will pay ${taxYears(type,years,km).toFixed(2)} euros in taxes.`);
            nap += taxYears(type,years,km); 
        } else {
            console.log('Invalid car type.');
        }
    }
    console.log(`The National Revenue Agency will collect ${nap.toFixed(2)} euros in taxes.`);

    function taxYears(carType,year,kms){
        let types = ['family','heavyDuty','sports'];
        let initalTax = [50,80,100]
        let index = types.indexOf(carType);
        let taxYears = [5,8,9];
        let taxKm = [12, 14, 18];
        let kmBreaks = [3000,9000,2000];
        return initalTax[index] - (taxYears[index] * year) + (taxKm[index]*(Math.floor(kms/kmBreaks[index])));
    }
}

solve('family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410')