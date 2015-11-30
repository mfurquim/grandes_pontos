/**
 * logSuit.js
 *
 * @var
 * hours defines the number of hours in one day
 * minutes defines the number of minutes in one hours
 * seconds defines the number of seconds in one minute
 * milliseconds defines the number of milliseconds in one seconds
 *
 * @function
 * function createCookie creates a cookie with the specified name, value and
 * expire date
 * function readCookie retrieves a cookie with the specified name
 * function eraseCookie deletes a cookie with the specified name as well
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
  // formatting name to be searched in user cookies
  var nameToBeSearched = name + "=";
  // creating array of cookies
  var splittedCookies = document.cookie.split(';');

  for(var index=0;index < splittedCookies.length;index++) {
    var currentCookie = splittedCookies[index];
    while (currentCookie.charAt(0)==' ') {
      currentCookie = currentCookie.substring(1,currentCookie.length);
    }
    if (currentCookie.indexOf(nameToBeSearched) === 0) return currentCookie.substring(nameToBeSearched.length,currentCookie.length);
  }
  return null;
}

// function used to delete created cookies
function eraseCookie(name) {
  /* setting cookie with name: name to an empty string and than deleting it
   by passing negative duration. */
  createCookie(name,"",-1);
}
