function towns(input) {
    for (let i = 0; i < input.length; i++) {        
        let townsObj = {};
        let [name, lat, long] = input[i].split(' | ');
        townsObj.town = name;
        townsObj.latitude = Number(lat).toFixed(2);
        townsObj.longitude = Number(long).toFixed(2);
        console.log(townsObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])