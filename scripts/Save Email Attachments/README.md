# Gmail to Google Sheet Downloader

## Overview

The `emailToSheet` function downloads new Gmails with a matching label to a Google Sheet. Each email's details, including sender, subject, and body, are saved to the sheet. Additionally, if an email contains attachments, their links are saved in a new column.

> Based on script from this forum post: https://www.googlecloudcommunity.com/gc/Tips-Tricks/APPS-SCRIPT-Download-Gmails-to-GSheet-using-Gmail-Filters-Labels/m-p/362574

## Usage

To use the function:

1. **Create Filter Rule in Gmail**: Set up a filter rule in Gmail to apply a custom named label to emails you want to download.

2. **Modify Script Parameters**:
   - Replace `'YOUR_CUSTOM_LABEL'` with the name of the custom label applied to matching emails.
   - Replace `'GSHEET_ID'` with the ID from the Google Sheet URL where you want to save the emails.

3. **Run Script and Authorize**: Save the script and click run. Follow the authorization prompts to grant necessary permissions.

4. **Install Timed Trigger (Optional)**: Optionally, install a timed trigger for the script to automate the download process at regular intervals.

## Behavior

- Matching emails are downloaded to the Google Sheet.
- The custom label is removed from the downloaded emails.
- Emails are moved to the archive and marked as read.
- Optionally, emails can be moved to a new label after download by uncommenting and configuring the `moveToLabel` variable.

## Attachments

Attachments are saved to the same folder as the Google Sheet in a subfolder named with the timestamp and subject of the email.
