var app = function(){
  var numConvert = document.getElementById("num-button");
    numConvert.addEventListener("click", numberButtonHandler);
  var romanConvert = document.getElementById("rn-button");
      romanConvert.addEventListener("click", romanButtonHandler);
}

var updateNumberUrl = function(number) {
  var numberToRomanUrl = "http://localhost:3000/convertNumberToRoman/" + number;
  return numberToRomanUrl;
}

var updateRomanUrl = function(numeral) {
  var romanToNumberUrl = "http://localhost:3000/convertRomanToNumber/" + numeral;
  return romanToNumberUrl;  
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var numberRequestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var numberResponse = JSON.parse(jsonString);
  var showNumber = document.getElementById("converted-num");

  showResult(showNumber, numberResponse);
  }

var RomanRequestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var romanResponse = JSON.parse(jsonString);
  var showRoman = document.getElementById("converted-rn");
  showResult(showRoman, romanResponse)
}

var numberButtonHandler = function() {
  var numberInput = document.getElementById("num-to-rn");
  var number = numberInput.value;
  var url =  updateNumberUrl(number);
  var result = makeRequest(url, numberRequestComplete);
}

var romanButtonHandler = function() {
  var romanInput = document.getElementById("rn-to-num");
  var roman = romanInput.value.toUpperCase();
  var url = updateRomanUrl(roman);
  var result = makeRequest(url, RomanRequestComplete);

}

  var showResult = function(element, result){
    element.innerText = result["result"];
  }

window.addEventListener("load", app);