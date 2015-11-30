
// function used to create cookie
function createCookie(name,value,days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  }
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
