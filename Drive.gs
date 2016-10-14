//Find a folder by name within a folder, or create that folder
function getOrCreateFolder(root, name){
  var folders = root.getFolders(), i;
  
  //Search through subfolders for the same name and return it if a match is found
  for(i = 0; i < folders.length; i += 1){ if(folders[i].getName() === name) return folders[i]; }
  
  //Create new folder and return it
  return root.createFolder(name);
}