function furniture(arr) {

    let pattern = />>(?<furniture>[A-Z][A-Za-z]*)<<(?<price>\d+(|.\d+))!(?<quantity>\d+)/;

    let totalSum = 0;

    console.log('Bought furniture:');
    for (let el of arr) {
        let result = el.match(pattern);

        if(result){
            let items = result.groups.furniture;
            let price = +result.groups.price;
            let quantity = +result.groups.quantity;

            totalSum += price * quantity;
            console.log(items);
            //console.log(`${items} - ${price} - ${quantity}`);
        }        
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
)
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
)