function softUniBarIncome(input){
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+(|.\d+))\$/g;
    let i = 0;
    let result = 0;

    while(input[i] !== 'end of shift'){
        let line = input[i];

        let match = [...line.matchAll(pattern)];

        i++;

        for (let el of match) {
            let prices = Number(el.groups.quantity) * Number(el.groups.price);

            result += prices;
            console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${result.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)