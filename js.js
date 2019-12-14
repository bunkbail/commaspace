function replace() {
  var txtBox = document.getElementById("txtbox").value;
  var txtBoxModified = txtBox.replace(/, /g,'\n');
  document.getElementById("txtbox").value = txtBoxModified;
}
