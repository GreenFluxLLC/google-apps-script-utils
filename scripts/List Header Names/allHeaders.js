/**
 * Retrieves all table and column headers from all sheets except the current one.
 * Each header is represented as a pair [table name, column name].
 * 
 * @returns {string[][]} 2D array of table and column headers.
 */
function allHeaders() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var currentSheetName = SpreadsheetApp.getActiveSheet().getName();
  var allHeaders = [];
  
  for (var i = 0; i < sheets.length; i++) {
    var sheetName = sheets[i].getName();
    
    if (sheetName != currentSheetName) {
      var sheet = spreadsheet.getSheetByName(sheetName);
      var lastColumn = sheet.getLastColumn();
      var headerNames = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
      
      for (var j = 0; j < lastColumn; j++) {
        var tableAndColumn = [sheetName, headerNames[j]];
        allHeaders.push(tableAndColumn);
      }
    }
  }
  
  return allHeaders;
}
