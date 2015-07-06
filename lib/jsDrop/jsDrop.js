dropzone = document.getElementById("js-drop");

dropzone.addEventListener("dragenter", function(e) {
  e.preventDefault();
  e.stopPropagation();
  addClass(dropzone, "jsd-dragenter");
});

dropzone.addEventListener("dragover", function(e) {
  e.preventDefault();
  e.stopPropagation();
  addClass(dropzone, "jsd-dragover");
});

dropzone.addEventListener("drop", function(e) {
  e.preventDefault();
  e.stopPropagation();
  addClass(dropzone, "jsd-drop");

  // fetch files
  var files = e.dataTransfer.files;
  console.log(files);

  // print file names
  var fileNames;
  for(var i=0; i<files.length; i++) {
    fileNames = fileNames + files[i].name + " ";
  }
  document.getElementById("files").innerHTML = "<code>" + fileNames + "</code>";
});

function addClass(element, className) {
  element.className = element.className + " " + className;
}