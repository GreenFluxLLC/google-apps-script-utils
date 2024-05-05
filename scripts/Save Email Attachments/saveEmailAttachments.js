/**
 * Downloads new Gmails with a matching label to a Google Sheet.
 * 
 * 1. Create a filter rule in Gmail to apply a custom named 'label'.
 * 2. Replace 'YOUR_CUSTOM_LABEL' below with the new label name.
 * 3. Replace 'GSHEET_ID' with the ID from the sheet URL.
 * 4. Save the script and click run, then authorize.
 * 5. Optionally, install a timed trigger for the script.
 * 
 * Matching emails are downloaded, and then the label is removed.
 * 
 * @returns {void}
 * 
 */
function emailToSheet() {
  var label = GmailApp.getUserLabelByName('YOUR_CUSTOM_LABEL'); // <-- RENAME TO YOUR CUSTOM FILTER LABEL
  var ss = SpreadsheetApp.openById('GSHEET_ID'); //  <-- INSERT GSHEET_ID
  var sh = ss.getSheetByName("Email");  //  <-- RENAME TO SAVE TO DIFFERENT SHEET
  // var moveToLabel = GmailApp.getUserLabelByName('MOVE_TO_LABEL'); // <-- Uncomment to move to new label after download
  var threads = label.getThreads();

  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();

    for (var j = 0; j < messages.length; j++) {
      var sent = messages[j].getDate();
      var sender = messages[j].getFrom();
      var subject = messages[j].getSubject();
      var body = messages[j].getPlainBody();

      // Get attachments
      var attachments = messages[j].getAttachments();
      var attachmentLinks = [];

      // Save attachments and get links
      if (attachments.length > 0) {
        var folder = DriveApp.getRootFolder().createFolder(getFolderName(subject));
        for (var k = 0; k < attachments.length; k++) {
          var attachment = attachments[k];
          var attachmentName = attachment.getName();
          var attachmentFile = folder.createFile(attachment);
          var attachmentUrl = attachmentFile.getUrl();
          attachmentLinks.push(attachmentUrl);
        }
      }

      // Append row with email details and attachment links
      ss.appendRow([sent, sender, subject, body].concat(attachmentLinks));
    }

    // Remove label, move to archive, mark as read, and optionally move to a new label
    threads[i].removeLabel(label);
    threads[i].moveToArchive();
    threads[i].markRead();
    // if (typeof moveToLabel !== 'undefined') {threads[i].addLabel(moveToLabel)}
  }
}

/**
 * Generates a folder name using the timestamp and subject.
 * 
 * @param {string} subject The subject of the email.
 * @returns {string} The folder name.
 */
function getFolderName(subject) {
  var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd");
  return timestamp + "-" + subject;
}
