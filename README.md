# google-apps-script-utils

Collection of Google Apps Script Utility Functions & Web Apps

**Author**: _Joseph Petty - [GreenFlux, LLC](https://www.greenflux.us/)_

## Description
This repo is a collection of Google Apps Scripts that I had originally posted on my blog and several other forums over the last decade while working as a freelancer. I'm consolidating all of the scripts here, and linking to the original blog posts. 

## Scripts
|name|description|
|----|-----------|
|[Doc Images to Folder](scripts/Doc%20Images%20to%20Folder) | Extracts all images from Doc with `sourceId` and saves them to `folderId` (or new folder if not specified)|
|[POST File to Folder](scripts/Post%20File%20to%20Folder) | Saves a file to `folderId` (or new folder) when the URL is sent as a `POST` request to a webapp.|
|[Get Contacts For Label](scripts/Get%20Contacts%20For%20Label)|Creates an endpoint to `GET` contacts from your account with a certain label. Useful for adding a dropdown list in other platforms.|
|[List Header Names](scripts/List%20Header%20Names)|The `allHeaders()` function retrieves all table and column headers from all sheets within a Google Sheets document, except the currently active sheet. Each header is represented as a pair [table name, column name].|
|[Post File To Folder](scripts/Post%20File%20to%20Folder)|Creates a `POST` endpoint to save files to Drive. It downloads the file from the provided URL and saves it to a specified folder.|
|[Save Email Attachments](scripts/Save%20Email%20Attachments)|Downloads new Gmails with a matching label to a Google Sheet. Each email's details, including sender, subject, and body, are saved to the sheet. Additionally, if an email contains attachments, their links are saved in a new column.|
|[Sheet Backup Scheduler](scripts/Sheet%20Backup%20Scheduler)|Backs up a list of sheets to the specified folder on a schedule|

## More Resources
Most of these scripts were first posted within a longer tutorial or blog post. The originals can be found at:
|   |   |   |   |
|---|---|---|---|
|[GreenFlux Blog](https://blog.greenflux.us/) | [AppSheet Forums](https://www.googlecloudcommunity.com/gc/forums/searchpage/tab/message?filter=location,authorId&q=script&noSynonym=false&location=category:appsheet&author_id=312288&collapse_discussion=true) | [Appsmith Community](https://community.appsmith.com/tag/google-apps-script) | [u/HomeBrewDude on Reddit](https://www.reddit.com/user/HomeBrewDude/) |

## Contributing
Given that the purpose of this repo is to consolidate my own scripts, it doesn't really make sense to allow others to contribute new scripts. However, I'm happy to accept contributions that improve on my existing scripts (without changing scope or intent). Or you can submit ideas for new scripts, and I'll be happy to consider writing it, if it seems useful for the wider Apps Script community (not too specific to one use case). 

![image](https://github.com/GreenFluxLLC/google-apps-script-utils/assets/24459976/c14013a0-cb7a-4843-8913-f82e86e9e167)
