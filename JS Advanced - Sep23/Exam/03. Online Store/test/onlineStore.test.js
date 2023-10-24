let expect = require('chai').expect;
let onlineStore = require('../onlineStore');


describe('Online Store Tests', () => {
    it('isProductAvailable', () => {
        expect(() => {onlineStore.isProductAvailable(15,15)}).to.throw("Invalid input.");
        expect(() => {onlineStore.isProductAvailable("shoes","15")}).to.throw("Invalid input.");   
        expect(onlineStore.isProductAvailable("shoes",0)).to.equal("Sorry, shoes is currently out of stock.") 
        expect(onlineStore.isProductAvailable("shoes",2)).to.equal("Great! shoes is available for purchase.") 
    });
    it("canAffordProduct", () => {
        expect(() => {onlineStore.canAffordProduct("15",15)}).to.throw("Invalid input.");
        expect(() => {onlineStore.canAffordProduct(15,"15")}).to.throw("Invalid input.");
        expect(onlineStore.canAffordProduct(30,20).to.equal("You don't have sufficient funds to buy this product."));
        expect(onlineStore.canAffordProduct(10,20).to.equal("Product purchased. Your remaining balance is 10."));
    });
    it("getRecommendedProducts", () => {
        expect(() => {onlineStore.getRecommendedProducts("shoes","clothes")}).to.throw("Invalid input.");
        expect(() => {onlineStore.getRecommendedProducts("shoes",3)}).to.throw("Invalid input.");
        expect(onlineStore.getRecommendedProducts([],"shoes").to.equal("Sorry, we currently have no recommended products in the shoes category."));
        expect(onlineStore.getRecommendedProducts(["shoes","hats"],"shoes").to.equal("Recommended products in the shoes category: shoes"));
    })
});

