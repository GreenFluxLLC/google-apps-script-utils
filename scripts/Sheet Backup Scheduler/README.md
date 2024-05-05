# Google Sheets Backup Script

This Google Apps Script automates the process of backing up sheets from a source spreadsheet to destination folders in Google Drive.
> Original Blog Post: https://blog.greenflux.us/save-files-to-google-drive-by-post-ing-the-url-to-a-web-app

## Overview

The `backupSheets` function takes input parameters specifying the source spreadsheet ID, the name of the sheet containing the list of source sheet IDs, the column indices for source and destination IDs, and the column index to update with the URL of the new backup files. It copies each source sheet to its respective destination folder in Google Drive and updates the specified column with the URL of the new backup files.

## Usage

To use the script:

1. **Configuration**: 
   - Specify the source spreadsheet ID, sheet name, and column indices for source and destination IDs in the script.
   - Ensure that the source sheet contains a list of sheet IDs to be backed up and the corresponding destination folder IDs.

2. **Deployment**:
   - Copy the script into the script editor of a Google Sheets document.
   - Run the `backupSheets` function once to trigger the permission dialog and authorize the script.

3. **Execution**:
   - Call the `backupSheets` function with the required parameters to initiate the backup process.
   - The script will copy each source sheet to its designated destination folder in Google Drive and update the specified column with the URL of the new backup files.

## Parameters

- `spreadsheetId`: The ID of the source spreadsheet containing the sheets to be backed up.
- `sheetName`: The name of the sheet within the source spreadsheet containing the list of source sheet IDs.
- `sourceIdCol`: The column index of the source sheet IDs in the specified sheet.
- `destinationIdCol`: The column index of the destination folder IDs in the specified sheet.
- `newFileURLCol`: The column index to update with the URL of the new backup files.

|Source Sheet ID|Destination Folder ID|New File URL|
|---------------|---------------------|------------|
abc123|xyz456|[https://docs.google.com/spreadsheets/d/backup_id_1]|
def456|uvw789|[https://docs.google.com/spreadsheets/d/backup_id_2]|
ghi789|lmn012|[https://docs.google.com/spreadsheets/d/backup_id_3]|
