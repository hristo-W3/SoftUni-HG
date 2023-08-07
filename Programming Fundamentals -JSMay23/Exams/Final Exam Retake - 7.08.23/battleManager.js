function battleManager(input) {
    let fighters = {};

    for (let el of input) {
        let line = el.split(':')
        let command = line.shift();
        switch(command){
            case 'Add':
                let [name, ...stats] = line;
                if (!fighters.hasOwnProperty(name)){
                    fighters[name] = stats;
                    fighters[name][0] = Number(stats[0]);
                    fighters[name][1] = Number(stats[1]);
                } else {
                    fighters[name][0] += Number(stats[0]);
                }
                break;   
            case 'Attack':
                let [name1,name2,damage] = line;
                if (fighters.hasOwnProperty(name1) && fighters.hasOwnProperty(name2)){
                    fighters[name2][0] -= Number(damage);
                    fighters[name1][1] -= 1;
                    if (fighters[name2][0] <= 0){
                        console.log(`${name2} was disqualified!`);
                        delete fighters[name2];
                    }
                    if (fighters[name1][1] <= 0){
                        console.log(`${name1} was disqualified!`);
                        delete fighters[name1];
                    }
                }  
                break;
            case 'Delete':
                let nameToDel = line;
                if (nameToDel[0] === 'All'){
                    for (let each in fighters) {
                        delete fighters[each];
                    }
                } else {
                    delete fighters[nameToDel];
                }    
                break;
            default: break;   
        }  
    }
    let fightersLeft = Object.keys(fighters);
    console.log(`People count: ${fightersLeft.length}`);
    for (const key in fighters) {
        console.log(`${key} - ${fighters[key][0]} - ${fighters[key][1]}`);
    }
}

//battleManager(["Add:Mark:1000:5",
//"Add:Clark:1000:2",
//"Attack:Clark:Mark:500",
//"Attack:Clark:Mark:800",
//"Add:Charlie:4000:10",
//"Results"])
//console.log('-------------');
//battleManager(["Add:Bonnie:3000:5",
//"Add:Kent:10000:10",
//"Add:Johny:4000:10",
//"Attack:Johny:Bonnie:400",
//"Add:Johny:3000:5",
//"Add:Peter:7000:1",
//"Delete:Kent",
//"Results"])
//console.log('-------------');
battleManager(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Add:Aleks:1000:70",
"Add:Tom:4000:1",
"Results"])

