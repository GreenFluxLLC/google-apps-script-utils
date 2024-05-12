# Google Drive File Downloader Web App

This Google Apps Script processes POST requests containing file URLs and saves the files to Google Drive.
> Original Blog Post: https://blog.greenflux.us/save-files-to-google-drive-by-post-ing-the-url-to-a-web-app

## Description

This script is designed to be deployed as a web app and handle POST requests containing file URLs. It downloads the file from the provided URL and saves it to a specified folder in Google Drive.

## Deployment Steps

1. **Copy Script**: Copy this script into the script editor and save it.
2. **Trigger Permission Dialog**: Run the `doPost` function once to trigger the permission dialog, and then click allow.
3. **Publish as Web App**:
   - Go to "Publish" > "Deploy as web app" in the script editor.
   - Choose a version name and click "Deploy."
   - Set access permissions to "Anyone, even anonymous" or "Anyone within organization."
   - Click "Deploy" and authorize the script when prompted.
4. **Note Web App URL**: Note the web app URL generated after deployment, which will be used to send POST requests.

## Post Body Format

The script expects POST requests with a JSON body containing the following fields:
- `key`: A custom string to authenticate the request. Change the value of `key` to match the one used in the request.
- `fileUrl`: The URL of the file to be downloaded and saved to Google Drive.
- `folderId` (optional): The ID of the folder in Google Drive where the file should be saved. If not provided, the file will be saved to the default folder specified in the script.

## Function Signature

```javascript
/**
 * @param {Object} e The event object representing the HTTP POST request.
 * @return {TextOutput} Text output containing the URL of the new file Drive.
 */
function doPost(e) {
  // Function logic
}
