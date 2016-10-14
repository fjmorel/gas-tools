var columnArray = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

/**
Sort all the sheets in a spreadsheet by name, making the one with the same name as the workbook first
*/
function sortSheets(ss){
  var ssName = ss.getName();
  var sheets = ss.getSheets();
  var names = [];
  for(var i = 0; i < sheets.length; i += 1){
    names.push(sheets[i].getSheetName());
  }
  names.sort();
  
  for(var i = 0; i < names.length; i += 1){
    ss.setActiveSheet(ss.getSheetByName(names[i]));
    ss.moveActiveSheet(i);
  }
  if(ss.getSheetByName(ssName)){
    ss.setActiveSheet(ss.getSheetByName(ssName));
    ss.moveActiveSheet(1);
  }
}


/**
Get the data range of a sheet, but without the headers
*/
function getDataRangeWithoutHeaders(sheet){ return sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()); }


/********************************************************
***                  Copy Formatting                  ***
********************************************************/
/**
Returns the formating of a range
*/
function getRangeFormatting(range){
  return {
    BC : range.getBackgroundColors(), FC : range.getFontColors(), FS : range.getFontSizes(), FF : range.getFontFamilies(),
    FI : range.getFontStyles(), FW : range.getFontWeights(), HA : range.getHorizontalAlignments(), VA : range.getVerticalAlignments(),
  }
}
/**
Sets given formatting on given range
*/
function setRangeFormatting(range, format){
  range.setBackgroundColors(format.BC).setFontColors(format.FC)
  .setFontSizes(format.FS).setFontFamilies(format.FF)
  .setFontStyles(format.FI).setFontWeights(format.FW)
  .setHorizontalAlignments(format.HA).setVerticalAlignments(format.VA);
}



/********************************************************
***                   DataValidation                  ***
********************************************************/
//Create from array of values
function createRestrictedValidation(values){ return SpreadsheetApp.newDataValidation().requireValueInList(values, true).setAllowInvalid(false).build(); }
function createOpenValidation(values){ return SpreadsheetApp.newDataValidation().requireValueInList(values, true).setAllowInvalid(true).build(); }