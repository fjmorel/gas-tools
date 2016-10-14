//Round numbers
function fourDec(num) { return Math.round(num * 10000) / 10000; }
function twoDec(num){ return Math.round(num * 100) / 100; }
function oneDec(num){ return Math.round(num * 10) / 10; }
function noDec(num){ return Math.round(num); }

//Adds commas to a number
var REGEX_THREE_DIGITS = /(\d+)(\d{3})/;//Look for any number of digits to the left of 3 digits.
function addCommas(num) {
	var parts = (num+'').split('.');
    //Insert "," between extra digits and last 3 digits as often as needed
	while (REGEX_THREE_DIGITS.test(parts[0])) { parts[0] = parts[0].replace(REGEX_THREE_DIGITS, '$1,$2'); }
	return num==="0" ? "" : parts.join(".");
}
function twoDecWithCommas(num){ return addCommas(twoDec(num)); }
function noDecWithCommas(num){ return addCommas(noDec(num)); }

//Number <--> Dollar
function numToDollar(num){ return num < 0 ? "-$"+addCommas(noDec(-num)) : "$"+addCommas(noDec(num)); }

//Number <--> Percent
function percentStringToNumber(str){ return parseFloat(str.replace("%","").replace("+","")); }
function percentNumberToString(num){
  num = twoDec(num);
  if(num === 0) return "---";//0 becomes ---
  else if(num>0) return "+"+num+"%";
  else return "-"+num+"%";
}
function numberToRoundedPercentString(num){
  if(num === 0 || isNaN(num)) return "---";//0 becomes ---
  return Utilities.formatString('%+.2f%%', num);//Replace % with decimal number with 2 decimal places and always include + or -
}
function roundedPercentStringToNumber(str){ return parseFloat(str.replace("%","").replace("+","")); }

//Percent Change
function percentChange(newV, oldV){ return oldV !== 0 && typeof(oldV) === "number" && typeof(newV) === "number" ? 100 * (newV/oldV - 1) : 0; }