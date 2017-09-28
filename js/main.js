function loadProjects() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('index').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'projects.html', true);
  xhttp.send();
}

function loadBlog() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('index').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', 'blogpage.html', true);
  xhttp.send();
}

// function loadAbout() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById('index').innerHTML = this.responseText;
//     }
//   };
//   xhttp.open('GET', 'index.html', true);
//   xhttp.send();
// }
