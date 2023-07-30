function solve(arr){

    let newArr = arr.shift().split(" ");
    let actions = {Buy: buy,
        Trash: equipment =>  newArr = newArr.filter(x => x !== equipment),
        Repair: repair, Upgrade: upgrade}
  
   
    function buy(equipment){
        if(!newArr.includes(equipment)){
            newArr.push(equipment);
        }
    }
   
    function repair(equipment){
        if(newArr.includes(equipment)){
            newArr = newArr.filter(x => x !== equipment)
            newArr.push(equipment)
        }
    }

    function upgrade(equipment){
        let newEquipement  = equipment.split("-");
        if(newArr.includes(newEquipement[0])){
            let index = newArr.findIndex(x => x === newEquipement[0])
            newArr.splice(index + 1, 0, `${newEquipement[0]}:${newEquipement[1]}`)
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        let [type, equipment] = arr[i].split(" ")
        try {  
            actions[type](equipment)
        } catch(e){    
        }
    }
    
    console.log(newArr.join(" "))
  
  }