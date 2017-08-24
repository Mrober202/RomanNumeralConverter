var Converter = require("../public/converter.js");
var assert = require("assert");

describe("converter", function() {
  beforeEach(function () {
    converter = new Converter()
  });

  it("should be able to convert numbers to roman numerals", function() {
    converter.convertNumberToRN(13);
    assert.equal(converter.numeralResult, "XIII")
  });

  it("should return nothing if inputted number is greater than 3999", function() {
    converter.convertNumberToRN(4000);
    assert.equal(converter.numeralResult, "");
  })

  it("should return nothing if inputted number is less than 0", function() {
    converter.convertNumberToRN(-1);
    assert.equal(converter.numeralResult, "");
  })

  it("should be able to convert roman numerals to numbers", function() {
    converter.convertNumeralToNumber("XIII");
    assert.equal(converter.numberResult, 13);
  });

})