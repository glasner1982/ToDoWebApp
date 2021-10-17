// Create a "close" button and append it to each list item
var myNodelist = document.querySelectorAll('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var title = document.getElementById("listTitle");
function saveList() {
  if (typeof(Storage) !== "undefined") {
    if (document.querySelector('UL').innerHTML != "") {
      localStorage.setItem(title.value, JSON.stringify(myUL.innerHTML));
      newListElement();
    }
  } else {
    alert("no storage here");
  }
}

function addList() {
  var input = document.getElementById("myInput");
  var titleInput = document.getElementById("listTitle");
  var curList = document.getElementById("myUL");
  input.value = "";
  titleInput.value = "";
  curList.innerHTML = "";
}

function openListPopup() {
  var popup = document.getElementById("openListPopup");
  popup.style.visibility = "visible";
  popup.innerHTML = "";
  for (i = 0; i < localStorage.length; i++){
    x = localStorage.key(i);
    var li = document.createElement("li");
    var t = document.createTextNode(x);
    li.appendChild(t);
    popup.appendChild(li);
  }
}

document.getElementById("openListPopup").addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    document.getElementById("listTitle").value = ev.target.innerHTML;
    document.getElementById("myUL").innerHTML = JSON.parse(localStorage.getItem(ev.target.innerHTML));
    document.getElementById("openListPopup").style.visibility = "hidden";
  }
}, false);

function newListElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("listTitle").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("openListPopup").appendChild(li);
  }
}