let expect = require('chai').expect;
let onlineStore = require('../workforceManagement');


describe('Workforce Management Tests', () => {
    it('recruitStaff', () => {
        expect(() => {workforceManagement.recruitStaff(2,"Role", 13)}).to.throw("Name must be a string.");
        expect(() => {workforceManagement.recruitStaff("John", 2, 13)}).to.throw("Role must be a string.");
        expect(workforceManagement.recruitStaff("John","QA", 13)).to.equal("We are not currently hiring for this role.");
        expect(workforceManagement.recruitStaff("John","Developer", 5)).to.equal("John has been successfully recruited for the role of Developer.");
        expect(workforceManagement.recruitStaff("John","Developer", 3)).to.equal("John is not suitable for this role.");
    });
    it('computeWages', () => {
        expect(() => {workforceManagement.computeWages("Not a number")}).to.throw("Invalid hours");
        expect(() => {workforceManagement.computeWages(-5)}).to.throw("Invalid hours");
        expect(workforceManagement.computeWages(5).to.equal(90));
        expect(workforceManagement.computeWages(161).to.equal(4398));
    });
    it('dismissEmployee', () => {
        expect(() => {workforceManagement.dismissEmployee(3,3)}).to.throw("Invalid input");
        expect(() => {workforceManagement.dismissEmployee(['Sam','John'],'hello')}).to.throw("Invalid input");
        expect(() => {workforceManagement.dismissEmployee(['Sam','John'],3)}).to.throw("Invalid input");
    })

});
