function inventory(arr) {

    let arrHero = []
    for (let line = 0; line < arr.length; line++) {
        let objHero = {};
        let [name, level, ...items] = arr[line].split(' / ');
        objHero.name = name;
        objHero.level = Number(level);
        objHero.items = items.join(', ')
        arrHero.push(objHero)
    }
    arrHero.sort((a, b) => a.level - b.level);

    arrHero.forEach( e => {
        console.log(`Hero: ${e.name}`);
        console.log(`level => ${e.level}`);
        console.log(`items => ${e.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)
console.log('-----------')
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
)