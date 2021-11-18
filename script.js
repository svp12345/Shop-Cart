function validation(){
     var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
    var y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }
    var z = document.forms["myForm"]["phone"].value;
  if (z == "") {
    alert("Name must be filled out");
    return false;
  }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}