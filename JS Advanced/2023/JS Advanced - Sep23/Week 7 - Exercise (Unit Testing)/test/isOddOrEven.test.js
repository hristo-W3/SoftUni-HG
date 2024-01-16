let {assert} = require("chai");
let {isOddOrEven} = require("../isOddOrEven");

describe("test with incorrect parameter", ()=>{
    it("test with object", ()=>{
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, 'return value must be undefined');
    })
    it("test with array", ()=>{
        assert.equal(isOddOrEven(["Pesho"]), undefined, 'return value must be undefined');
    })
    it("test with number", ()=>{
        assert.equal(isOddOrEven(10), undefined, 'return value must be undefined');
    })
})

describe("test with correct data", ()=>{
    it("test with even length", ()=>{
        assert.equal(isOddOrEven("word"),"even", 'return value must be equal to "even"');
    })
    it("test with odd length", ()=>{
        assert.equal(isOddOrEven("words"),"odd", 'return value must be equal to "odd"');
    })
})