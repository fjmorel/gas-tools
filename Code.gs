/*

How to Use:

1. Update the folder IDs at lines 26 and 27.
   SOURCE = The entire folder you want a copy of
   DESTINATION = The folder in which you want the new folder to be stored.
   
   A folder ID is the last portion of the URL when you
   are looking at a Google Drive folder. For example, when
   viewing https://drive.google.com/drive/folders/2J3HOFV5IHGP5wqeGIU2paU219Av
   the folder ID is 2J3HOFV5IHGP5wqeGIU2paU219Av.

2. Open the "Run" menu above and click "begin"
   The first time you run this, there will be a prompt to
   authorize this script to access your Google Drive.

3. Wait. Scripts have a 6-minute execution limit,
   so verify that all files were copied if processing a
   large folder. You will know it's finished when the yellow
   box saying "Running function begin....Cancel Dismiss" disappears.
   If a red box appears instead, there was an error.
   
*/

var SOURCE = DriveApp.getFolderById("INSERT_ID_HERE");
var DESTINATION = DriveApp.getFolderById("INSERT_ID_HERE");

//Create new folder in DESTINATION and then begin recursive copying of subitems
function begin(){
  duplicate(SOURCE, DESTINATION.createFolder("Copy of "+SOURCE.getName()));
}

//Recursively traverse the folder tree, copying subitems from source to destination
function duplicate(source, destination) {
  //Get subitems
  var files = source.getFiles();
  var subfolders = source.getFolders();
  
  //For each file, make copy with the original file's name (without the "Copy of ")
  while(files.hasNext()){
    var file = files.next();
    file.makeCopy(destination).setName(file.getName());
    Utilities.sleep(1000);//To prevent server errors from hitting rate limit, sleep for a second
  }
  
  //For each folder, make new folder, then duplicate subitems
  while(subfolders.hasNext()){
    var subfolder = subfolders.next();
    duplicate(subfolder, destination.createFolder(subfolder.getName()));
  }
  
  return;
}