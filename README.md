# google-apps-script-utils
Collection of Google Apps Script Utility Functions & Web Apps

## Description
This repo is a collection of Google Apps Scripts that I had originally posted on my blog and several other forums. I'm consolidating all of the scripts here, and linking to the original blog posts. 

## Scripts
|name|description|
|----|-----------|
|[Doc Images to Folder](scripts/Doc%20Images%20to%20Folder) | Extracts all images from Doc with sourceId and saves them to folderId (or new folder if not specified)|
|[POST File to Folder](scripts/Post%20File%20to%20Folder) | Saves a file to folderId (or new folder) when the URL is sent as a POST request to a webapp.|
|[Get Contacts For Label](scripts/Get%20Contacts%20For%20Label)|This Google Apps Script integrates with the Google Contacts API to retrieve contacts and contact groups. The script exposes a web endpoint that accepts GET requests with parameters to specify the desired operation, such as retrieving contacts belonging to a specific label or fetching all contact groups.|
|[List Header Names](scripts/List%20Header%20Names)|The allHeaders function retrieves all table and column headers from all sheets within a Google Sheets document, except the currently active sheet. Each header is represented as a pair [table name, column name].|
|[Post File To Folder](scripts/Post%20File%20to%20Folder)|This script is designed to be deployed as a web app and handle POST requests containing file URLs. It downloads the file from the provided URL and saves it to a specified folder in Google Drive.|
|[Save Email Attachments](scripts/Save%20Email%20Attachments)|downloads new Gmails with a matching label to a Google Sheet. Each email's details, including sender, subject, and body, are saved to the sheet. Additionally, if an email contains attachments, their links are saved in a new column.|
|[Sheet Backup Scheduler](scripts/Sheet%20Backup%20Scheduler)|Backs up a list of sheets to the specified folder on a schedule|

### Work In Progress
Working on backlog of scripts from my old blog posts. Check back for updates! 

## More Resources
Most of these scripts were first posted within a longer tutorial or blog post. The originals can be found at:
|   |   |   |   |
|---|---|---|---|
|[GreenFlux Blog](https://blog.greenflux.us/) | [AppSheet Forums](https://www.googlecloudcommunity.com/gc/forums/searchpage/tab/message?filter=location,authorId&q=script&noSynonym=false&location=category:appsheet&author_id=312288&collapse_discussion=true) | [Appsmith Community](https://community.appsmith.com/tag/google-apps-script) | [u/HomeBrewDude on Reddit](https://www.reddit.com/user/HomeBrewDude/) |


![image](https://github.com/GreenFluxLLC/google-apps-script-utils/assets/24459976/c14013a0-cb7a-4843-8913-f82e86e9e167)
