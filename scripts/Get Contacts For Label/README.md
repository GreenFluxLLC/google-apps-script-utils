# Google Contacts API Integration

## Overview

This Google Apps Script integrates with the Google Contacts API to retrieve contacts and contact groups. The script exposes a web endpoint that accepts GET requests with parameters to specify the desired operation, such as retrieving contacts belonging to a specific label or fetching all contact groups.
> Original Blog Post: https://blog.greenflux.us/adding-gmail-contacts-to-appsmith-using-apps-script

## Usage

1. **API Key Setup**:
   - Set the `API_KEY` variable in the script to a custom string that will be used to authenticate requests.

2. **Deploy Script as Web App**:
   - Save the script and deploy it as a web app in your Google Apps Script project.
   - Go to "Publish" > "Deploy as web app" in the script editor.
   - Choose a version name and click "Deploy."
   - Set access permissions to "Anyone, even anonymous" or "Anyone within organization."
   - Click "Deploy" and authorize the script when prompted.

3. **Accessing Contacts and Groups**:
   - Make GET requests to the web app URL with the following parameters:
     - `key`: API key for authentication.
     - `label`: (Optional) Label of the contact group to retrieve contacts from.
     - `labels`: (Optional) Flag to indicate retrieval of all contact groups.

## Behavior

- When a valid API key is provided, the script retrieves contacts or contact groups based on the specified parameters.
- Contacts are returned with name, phone, and email properties.
- Contact groups are returned with label and value properties.
- Errors are handled gracefully, and appropriate error responses are returned for unauthorized requests or failed API calls.

## Script Author

This script was authored by [Your Name]. For more information, visit [Your Website].
