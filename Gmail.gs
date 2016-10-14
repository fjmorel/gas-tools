//Get existing label or create it if necessary
function getOrCreateGmailLabel(labelName){
  var gmailLabel = GmailApp.getUserLabelByName(labelName);
  return gmailLabel ? gmailLabel : GmailApp.createLabel(labelName);
}