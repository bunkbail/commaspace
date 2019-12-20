function replace() {
  var txtBox = document.getElementById("txtbox").value;
  var txtBoxModified = txtBox.replace(/, /g,'\n');
  document.getElementById("txtbox").value = txtBoxModified;
}

var button = document.getElementById("copyToClipboard"),
    input = document.getElementById("txtbox");

    button.addEventListener("click", function(event) {
      event.preventDefault();
      input.select();
      document.execCommand("copy");
    });
