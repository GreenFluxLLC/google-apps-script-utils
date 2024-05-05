/**
 * Retrieves images from a Google Doc and saves them to a specified Drive folder.
 * @param {string} sourceId - The ID of the source Google Doc.
 * @param {string} destinationId - (Optional) The ID of the destination Drive folder.
 */
function getDocImages(sourceId, destinationId) {
  // Validate sourceId
  if (!sourceId || typeof sourceId !== 'string') {
    throw new Error('Invalid sourceId. Please provide a valid Google Doc ID.');
  }

  // Retrieve source name and images
  const sourceName = DriveApp.getFileById(sourceId).getName();
  const allImages = DocumentApp.openById(sourceId).getBody().getImages();

  // Determine destination folder
  if (!destinationId) {
    const parentId = DriveApp.getFileById(sourceId).getParents().next().getId();
    destinationId = DriveApp.getFolderById(parentId).createFolder('images').getId();
  }

  const saveTo = DriveApp.getFolderById(destinationId);

  // Save images to destination folder
  allImages.forEach((image, idx) => {
    const imageName = `${sourceName}_${idx + 1}`;
    const imageBlob = image.getAs('image/png'); // Change file type if needed
    saveTo.createFile(imageBlob.setName(imageName));
  });
}
