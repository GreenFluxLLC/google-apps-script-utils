/**
 * Backup sheets listed in a source spreadsheet to destination folders in Google Drive.
 * 
 * @param {string} spreadsheetId The ID of the source spreadsheet.
 * @param {string} sheetName The name of the sheet containing the list of source sheet IDs.
 * @param {number} sourceIdCol The column index of the source sheet IDs.
 * @param {number} destinationIdCol The column index of the destination folder IDs.
 * @param {number} newFileURLCol The column index to update with the URL of the new backup files.
 */
function backupSheets(spreadsheetId, sheetName, sourceIdCol, destinationIdCol, newFileURLCol) {
  try {
    // Load source sheet IDs for backup
    const ss = SpreadsheetApp.openById(spreadsheetId); 
    const sh = ss.getSheetByName(sheetName);
    const lastRow = sh.getLastRow();
    const sourceIds = sh.getRange(2, sourceIdCol, lastRow - 1, 1).getValues(); // Array of IDs for source sheets

    // Copy each source sheet to destination folder
    sourceIds.forEach((sourceId, index) => {
      const source = SpreadsheetApp.openById(sourceId);
      const sourceName = source.getName();
      const dateTimeStr = Utilities.formatDate(new Date(), 'GMT-4', 'yyyyMMdd_HHmmss');
      const backupName = sourceName + '_BAK_' + dateTimeStr;
      const backupId = source.copy(backupName).getId(); // File created in My Drive by default
      const destinationId = sh.getRange(index + 2, destinationIdCol).getValue(); // Folder ID for destination sheet
      const destination = DriveApp.getFolderById(destinationId);
      DriveApp.getFileById(backupId).moveTo(destination);

      // Save new file link to sheet
      const backupURL = 'https://docs.google.com/spreadsheets/d/' + backupId + '/edit#gid=0';
      const hyperlink = SpreadsheetApp.newRichTextValue().setText(backupName).setLinkUrl(backupURL).build();
      sh.getRange(index + 2, newFileURLCol).setRichTextValue(hyperlink); // Link to last backup file
    });
  } catch (error) {
    console.error('Error backing up sheets:', error);
  }
}
