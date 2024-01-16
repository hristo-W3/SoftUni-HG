function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textArea = document.querySelector("#inputs textarea");
   const restaurantName = document.querySelector("#bestRestaurant p");
   const restaurantWorkers = document.querySelector("#workers p");

   function onClick () {
      let info = JSON.parse(textArea.value);
      let res = {};
      for (let restaurantInfo of info) {
         let [name, workersString] = restaurantInfo.split(" - ");
         let workers = workersString.split(", ");
         if (!res.hasOwnProperty(name)){
            res[name] = {
               avgSalary: calcAvgSalary(workers),
               bestSalary: calcBestSalary(workers),
               workers: workers
            }
         } else {
            res[name].workers = concatWorkers(res[name].workers,workers);
            res[name].avgSalary = calcAvgSalary(res[name].workers);
            res[name].bestSalary = calcBestSalary(res[name].workers);
         }
      }

      let sortRestaurant = Object.entries(res).sort((a,b) => b[1].avgSalary - a[1].avgSalary);
      let bestRest = sortRestaurant[0];
      let workersAsText = "";
      bestRest[1].workers.sort(sortWorkers).forEach(e => {
         let [name, salary] = e.split(' ');
         workersAsText += `Name: ${name} With Salary: ${salary} `;
         return;
      });
      
      restaurantName.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].avgSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`
      restaurantWorkers.textContent = workersAsText;
   }

   function calcAvgSalary(workers) {
      let sum = 0;
      workers.forEach(worker => {
         let [name,salary] = worker.split(" ");
         return sum+= Number(salary);
      })
      return sum / workers.length;
   }
   function calcBestSalary(workers){
      let highestSalary = 0;
      workers.forEach(worker => {
         let [name,salary] = worker.split(" ");
         salary = Number(salary);
         if (salary > highestSalary){
            highestSalary = salary;
         }
      })
      return highestSalary;
   }
   function concatWorkers(oldWorkers, newWorkers) {
      return oldWorkers.concat(newWorkers);
   }

   function sortWorkers(workerA,workerB) {
      let [nameA, salaryA] = workerA.split(' ');
      let [nameB, salaryB] = workerB.split(' ');
      salaryA = Number(salaryA);
      salaryB = Number(salaryB);
      return salaryB - salaryA;
   }
}