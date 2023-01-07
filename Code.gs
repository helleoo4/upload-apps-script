function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function getAt() {
  return ScriptApp.getOAuthToken();
}

// This commented line is used for enabling Drive API and adding a scope
"https://www.googleapis.com/auth/drive"
// So please don't remove this.
// DriveApp.createFile();
