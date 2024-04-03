class BikeRentalService {
    constructor(name, location, availableBikes) {
        this.name = name;
        this.location = location;
        this.availableBikes = {};
    }

    // get availableBikes() {
    //     return Object.values(this.bikes);
    // }

    addBikes(bikes) {
        bikes.forEach(bike => {
            let [brand, quantity, price] = bike.split('-');
            quantity = Number(quantity);
            price = Number(price);
            if (!this.bikes.hasOwnProperty(brand)) {
                this.bikes[brand] = {brand, quantity, price};
            } else {
                if (this.bikes[brand].price < price) {
                    this.bikes[brand].price = price;
                }
            }
        });

        return 'Successfully added ' + Object.keys(this.bikes).join(', ') + '.';
    }

    rentBikes(selectedBikes) {

    }
}