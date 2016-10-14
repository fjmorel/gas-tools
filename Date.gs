function timeMinutesFromNow(minutes) { return new Date(new Date().getTime() + minutes*60000); }

//Figure out calendar year of period
function fiscalToCalendar(year, month){
  var cal = (year - (month < 4 ? 1 : 0)) % 100;
  return cal > 9 ? cal : ("0" + cal);
}

/**
Get tomorrow as a date string, i.e. 11/24/12
*/
function getTomorrow(){
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0,0,0,0);
  return tomorrow;
}

//Properties and strings
var MONTHS = ["","October","November","December","January","February","March","April","May","June","July","August","September"];
var MONTHS_LABELS = ["","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"];

//List of months
function getMonthsInFiscalOrder(){ return ["","October","November","December","January","February","March","April","May","June","July","August","September"]; }
function getMonthsInChronoOrder(){ return ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; }