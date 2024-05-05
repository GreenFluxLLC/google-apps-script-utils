const API_KEY = 'APIKEY'; // Custom string to check before returning contacts

/**
 * Handles GET requests to retrieve contacts or contact groups based on provided parameters.
 * @param {Object} e The event object representing the HTTP GET request.
 * @returns {ContentOutput} The response containing contacts or contact groups in JSON format.
 */
function doGet(e) {
  let responseBody = {'requestEvent': e};

  // Check if the API key is provided and valid
  if ('key' in e.parameter && e.parameter.key == API_KEY) {
    // Retrieve contacts if 'label' parameter is provided
    if ('label' in e.parameter) {
      const label = e.parameter.label;
      const foundContacts = getContacts(label);
      responseBody['contacts'] = foundContacts;
    } 
    // Retrieve contact groups if 'labels' parameter is provided
    else if ('labels' in e.parameter) {
      const foundGroups = getLabels();
      responseBody['groups'] = foundGroups;
    }
  } 
  // Return error if API key is missing or invalid
  else {
    responseBody['error'] = 'Unauthorized';
  }

  // Return response as JSON
  return ContentService.createTextOutput(JSON.stringify(responseBody))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Retrieves contacts belonging to the specified label.
 * @param {string} label The label of the contact group to retrieve contacts from.
 * @returns {Array} An array of contacts with name, phone, and email properties.
 */
function getContacts(label) {
  try {
    // Get contact group and contacts belonging to the group
    const contactGroup = ContactsApp.getContactGroup(label); 
    const contactsArr = ContactsApp.getContactsByGroup(contactGroup);

    // Map contacts to desired format
    const contacts = contactsArr.map(c => ({
      'name': c.getFullName(),
      'phone': c.getMobilePhone(),
      'email': c.getEmailAddresses().join(', ') // Join multiple email addresses
    }));

    // Log contacts for debugging
    Logger.log(JSON.stringify(contacts));
    return contacts;
  } catch (error) {
    // Handle errors and log them
    Logger.log('Error retrieving contacts:', error);
    return [];
  }
}

/**
 * Retrieves contact groups available in the user's Google Contacts.
 * @returns {Array} An array of contact groups with label and value properties.
 */
function getLabels() {
  try {
    // Get all contact groups
    const groups = ContactsApp.getContactGroups();
    // Map contact groups to desired format
    const groupsArr = groups.map(group => ({
      'label': group.getName(),
      'value': group.getName()
    }));

    // Log contact groups for debugging
    Logger.log(groupsArr);
    return groupsArr;
  } catch (error) {
    // Handle errors and log them
    Logger.log('Error retrieving labels:', error);
    return [];
  }
}
