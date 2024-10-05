//Name prompt button
document.getElementById('nameButton').addEventListener('click', function() {
  var userName = prompt('Please enter your name:');
  if (userName) {
      document.getElementById('displayName').textContent = 'Hello, ' + userName + '!';
  }
});

//Enlarge Image
function change(element) {
element.classList.toggle("fullsize");
}

//Dropdown Menu
function myFunction() 
{
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Tied to onmouseover event
function mOver(some_tag) {
some_tag.classList.toggle("mOver");
  }
