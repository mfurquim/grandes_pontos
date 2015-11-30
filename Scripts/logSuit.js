/**
 * event.js
 *
 * @var
 * gridConfiguration describes the rows, columns, width, height and offset
 *
 * @function
 * windows.onclick [will] call resolveTurn if the click was inside grid
 * window.onmousemove
 * function getClickedElement(gridClick)
 * function getHoveredElement(gridClick)
 * function doKeyDown(event)
 *
 *
 * @author
 * Matheus Mello
 */

// Date variables
var hours = 24,
    minutes = 60,
    seconds = 60,
    milliseconds = 1000;

// function used to create cookie
function createCookie(name,value,days) {
  var expires = "";

  // create cookie with expire date
  if (days) {
    // current date
    var date = new Date();
    // calculating days argument in milliseconds
    daysInMilliseconds = days * hours * minutes * seconds * milliseconds;
    // setting expire date
    date.setTime(date.getTime() + daysInMilliseconds);
    expires = "; expires="+date.toGMTString();
  }
  // create cookie without expire date
  else {
  expires = "";
}
  document.cookie = name+"="+value+expires+"; path=/";
}

// function used to retrieve created cookies
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

// function used to delete created cookies
function eraseCookie(name) {
  /* setting cookie with name: name to an empty string and than deleting it
   by passing negative duration. */
  createCookie(name,"",-1);
}
