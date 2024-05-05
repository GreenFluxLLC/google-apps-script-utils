/**
 * Google Apps Script to process POST requests and save files to Google Drive.
 * 
 * This script is designed to be deployed as a web app and handle POST requests containing file URLs.
 * It downloads the file from the provided URL and saves it to a specified folder in Google Drive.
 * 
 * Deployment:
 * 1. Copy this script into the script editor and save. 
 * 2. Run the doPost function once to trigger the permission dialog, and then click allow. 
 * 3. Publish the script as a web app:
 *    - Go to "Publish" > "Deploy as web app" in the script editor.
 *    - Choose a version name and click "Deploy."
 *    - Set access permissions to "Anyone, even anonymous" or "Anyone within organization."
 *    - Click "Deploy" and authorize the script when prompted.
 * 3. Note the web app URL generated after deployment, which will be used to send POST requests.
 *
 * 
 * Post Body Format:
 * - The script expects POST requests with a JSON body containing the following fields:
 *   - key: A custom string to authenticate the request. Change the value of `key` to match the one used in the request.
 *   - fileUrl: The URL of the file to be downloaded and saved to Google Drive.
 *   - folderId (optional): The ID of the folder in Google Drive where the file should be saved.
 *     If not provided, the file will be saved to the default folder specified in the script.
 * 
 * @param {Object} e The event object representing the HTTP POST request.
 * @return {TextOutput} Text output containing the URL of the new file Drive.
 */

const DEFAULT_FOLDER_ID = 'FOLDER_ID_FROM_URL'; // Folder ID to use if no ID is given
const API_KEY = 'TEST_KEY'; // Change key, and optionally, move it to a script property

function doPost(e) {
  try {
    const requestData = JSON.parse(e.postData.contents);
    const { key, fileUrl, folderId } = requestData;

    if (!key || key !== API_KEY || !fileUrl) {
      throw new Error('Invalid request. Missing key or fileUrl.');
    }

    const returnedUrl = getFileByUrl(fileUrl, folderId || DEFAULT_FOLDER_ID);
    return ContentService.createTextOutput(returnedUrl);
  } catch (error) {
    console.error('Error processing request:', error.message);
    return ContentService.createTextOutput('Error processing request.');
  }
}

function getFileByUrl(url = DEFAULT_URL, folderId = DEFAULT_FOLDER_ID) { 
  // Download file from URL and save it to the specified folder in Google Drive
  const fileData = UrlFetchApp.fetch(url);
  const folder = DriveApp.getFolderById(folderId);
  const fileName = url.substring(url.lastIndexOf('/') + 1); // Extract file name from URL
  const newFile = folder.createFile(fileData).setName(fileName);
  const newFileUrl = newFile.getUrl();
  Logger.log(`File created: ${newFileUrl}`);
  return newFileUrl;
}
