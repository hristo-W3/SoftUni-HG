function cityTaxes(name, population, treasury) {
    const city = {
        name,
        population,
        treasury
    }

    return city;
}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

console.log('------------');

const city2 =
  cityTaxes('Tortuga',
  7000,
  15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population);
