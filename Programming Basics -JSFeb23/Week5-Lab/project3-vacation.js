function vacation(input) {
    let index = 0
   
    let moneyForTrip = Number(input[index])
    index++
   
    let moneyInPocket = Number(input[index])
    index++
   
    let spendOrSave = input[index]
    index++
   
    let moneyInOut = Number(input[index])
    index++
   
    let spendDays = 0
    let days = 0
    let spendMoney = 0
    let savedMoney = 0
   
    while (spendDays < 5) {
      days++
      if (spendOrSave === 'spend') {
        moneyInPocket -= moneyInOut
        spendDays++
      }
   
      if (spendOrSave === 'save') {
        spendDays = 0
        moneyInPocket += moneyInOut
      }
        if (moneyInPocket >= moneyForTrip) {
          console.log(`You saved the money for ${days} days.`)
          return
        }
      
   
      if (moneyInPocket <= 0) {
        moneyInPocket = 0
        if (Array.length - 1 && moneyForTrip > moneyInPocket) {
          console.log(`You can't save the money.`)
          console.log(`${spendDays}`)
          return
        }
      }
   
      spendOrSave = input[index]
      index++
   
      moneyInOut = Number(input[index])
      index++
    }
   
    console.log(`You can't save the money.`)
    console.log(`${days}`)
  }