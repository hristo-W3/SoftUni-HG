function solve(input) {
    let headers = input.shift();

    return JSON.stringify(input.map(each => {
        let [name, lat, lng] = each.split(/\s*\|\s*/gm).filter(x => x !== '');
        return {
            Town: name,
            Latitude: Number(Number(lat).toFixed(2)),
            Longitude: Number(Number(lng).toFixed(2))
        };
    }),null, 2)
}


console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));
console.log('------------------------');
console.log(solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));