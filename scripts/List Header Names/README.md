# allHeaders Google Apps Script

## Overview

The `allHeaders` function retrieves all table and column headers from all sheets within a Google Sheets document, except the currently active sheet. Each header is represented as a pair `[table name, column name]`.

![image](https://github.com/GreenFluxLLC/google-apps-script-utils/assets/24459976/2bcfbaf4-44a1-4624-b887-1da10e0dadb5)

## Usage

To use the function:

1. **Copy the Script**: Copy the `allHeaders` function into the script editor of your Google Sheets document.

2. **Cell Formula**: Enter the cell formula `=allHeaders()` in any cell of your Google Sheets document.

3. **Result**: The function will return a 2D array containing all table and column headers, excluding the headers from the currently active sheet.

## Return Value Format

The function returns a 2D array where each row represents a table and column header pair. The format of each row is `[table name, column name]`.

## Example


|TABLE  | COLUMN|
|-|-|
|Table1 | Column1|
|Table1 | Column2|
|Table1 | Column3|
|Table2 | Column1|
|Table2 | Column2|
|Table2 | Column3|
