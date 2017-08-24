var Converter = function() {
    this.integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    this.romanNumeral = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    this.numeralResult = "";
    this.numberResult = 0;
}

Converter.prototype = {

  convertNumberToRN: function(number) {
    if(number > 3999 || number < 0) {
      return;
    }
     // loop over every index in the array
     for(var i = 0; i <= this.integer.length; i++){
      // while the entered number has a remainder of less than the number when devided by the index add that numeral to the result string. and remove the integer value from the inputted number.
      while(number % this.integer[i] < number) {
        this.numeralResult += this.romanNumeral[i];
        number -= this.integer[i];
      }
     }
     return this.numeralResult;
  },

  convertNumeralToNumber: function(numeral) {
    // loop over every element in the array
    for(var i = 0; i <= this.integer.length; i++) {
      // while the entered numerals index doesnt equal 0, add the numerical value to the result and then remove the letter from the entered numeral.
      while(numeral.indexOf(this.romanNumeral[i]) === 0) {
        this.numberResult += this.integer[i];
        numeral = numeral.replace(this.romanNumeral[i], "");
      }
    }
    if(this.numberResult > 3999 || this.numberResult < 0){
      return;
    }
    return this.numberResult;
  }

};

module.exports = Converter;